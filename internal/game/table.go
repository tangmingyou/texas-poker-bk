package game

import (
	"errors"
	"github.com/golang/protobuf/proto"
	"sync"
	"texas-poker-bk/api"
	"texas-poker-bk/tool/async"
	"texas-poker-bk/tool/collect"
)

var (
// LobbyTables 存储当前进行中的牌桌
// LobbyTables *store.Store[int32, *Table]
)

func init() {
	//var tableZeroValue *Table = nil
	//LobbyTables = store.NewStore(tableZeroValue, func(k int32) string {
	//	return strconv.Itoa(int(k))
	//})
}

type Table struct {
	TableNo   int32 // 牌桌编号
	MasterId  int64 // 房主Id
	GameTimes int32 // 游戏次数
	Stage     int32 // 游戏阶段: 1等待玩家准备;2游戏开始(自动扣大小盲注,发手牌,轮流下注); 3:发3张公共牌 4:发第四张公共牌,轮流下注;5:发第五张公共牌,轮流下注,7比牌结算,9已解散

	PlayerBetting *PlayerBetting // 限注/不限制 规则处理

	Chip        int32    // 牌桌当前筹码
	robotChip   int32    // 牌桌当前机器人下注筹码
	Dealer      *Dealer  // 发牌员
	PublicCards [5]*Card // 公共牌

	PlayerNum      int32     // 玩家数
	RobotNum       int32     // 机器人数
	Players        []*Player // 玩家
	Robots         []*Robot
	BigBlindPos    int   // 大盲注位
	SmallBlindPos  int   // 小盲注位
	BigBlindChip   int32 // 大盲注金额
	SmallBlindChip int32 // 大盲注金额
	TexasType      int32 // 德州扑克类型: (1限注德州扑克:你只能增加与大盲注相同的投注额; 2底池限制德州扑克：你只能增加当时台面最大额的投注额（已经完成所有投注）; 3无限制德州扑克：你可在手持额度下，增加任何额度的投注额，如果你投入所有筹码，就是“全押”)
	LimitInAmount  int32 // 最低入场金额

	LastPosBetOp    int32 // 上家下注类型(弃牌不记录跳过) -> player.BetOpts
	LastPosBetChip  int32 // 上家下注金额
	RoundRaiseTimes int32 // 该轮押注圈加注次数

	RoundBetTotal map[int64]int32         // 该轮玩家投注金额
	RoundBetChips map[int64][]int32       // 该轮玩家投注队列
	RoundBetOps   map[int64][]int32       // 该轮投注玩家选项队列
	RoundBetLogs  [4][2]map[int64][]int32 // 投注日志,回合结束可存到DB [[op,chip],[op,chip]]

	Lock        *sync.Mutex // 牌桌锁
	PlayersLock *sync.Mutex

	RefAutoBettingDelayQueue *async.DelayQueue[int64]
}

// InitGameAndPlayerStatus 初始化桌面
func (t *Table) InitGameAndPlayerStatus() {
	if t.PlayersLock == nil {
		t.PlayersLock = &sync.Mutex{}
	}
	if t.Lock == nil {
		t.Lock = &sync.Mutex{}
	}
	t.PublicCards = [5]*Card{nil, nil, nil, nil, nil}
	if t.Dealer == nil {
		t.Dealer = NewDealer()
	} else {
		t.Dealer.Init()
	}
	// 重置一些状态
	t.Stage = 1
	t.LastPosBetOp = 0
	t.LastPosBetChip = 0
	t.RoundRaiseTimes = 0
	t.RoundBetOps = nil
	t.RoundBetChips = nil
	t.RoundBetTotal = nil

	for _, p := range t.Players {
		if p != nil {
			p.RoundInit()
		}
	}
}

func (t *Table) PlayerBet(player *Player, betOp int32, betChip int32) {
	if t.RoundBetOps == nil {
		t.RoundBetOps = make(map[int64][]int32)
	}
	if t.RoundBetChips == nil {
		t.RoundBetChips = make(map[int64][]int32)
	}
	if t.RoundBetTotal == nil {
		t.RoundBetTotal = make(map[int64]int32)
	}
	if t.RoundBetOps[player.Id] == nil {
		t.RoundBetOps[player.Id] = []int32{}
	}
	if t.RoundBetChips[player.Id] == nil {
		t.RoundBetChips[player.Id] = []int32{}
	}

	t.RoundBetOps[player.Id] = append(t.RoundBetOps[player.Id], betOp)
	t.RoundBetChips[player.Id] = append(t.RoundBetChips[player.Id], betChip)
	t.RoundBetTotal[player.Id] += betChip
	//fmt.Println("betChip:", player.Id, betOp, betChip)
}

func (t *Table) GetPlayerById(id int64) *Player {
	for _, p := range t.Players {
		if p.Id == id {
			return p
		}
	}
	return nil
}

func (t *Table) PlayerCount() int32 {
	var count int32 = 0
	for _, p := range t.Players {
		if p != nil {
			count++
		}
	}
	return count
}

func (t *Table) NextPlayerPos(current int) int {
	// 当前位置往后
	for i := current + 1; i < len(t.Players); i++ {
		if t.Players[i] != nil {
			return i
		}
	}
	// 从头找
	for i := 0; i < current && i < len(t.Players); i++ {
		if t.Players[i] != nil {
			return i
		}
	}
	return current
}

// NextHoldingCardPlayerPos 下一个未弃牌玩家
func (t *Table) NextHoldingCardPlayerPos(current int) int {
	nextPos := current
	for i := 0; i < 999; i++ {
		nextPos = t.NextPlayerPos(nextPos)
		if nextPos == current {
			return current
		}
		if t.Players[nextPos].Status != 7 {
			return nextPos
		}
	}
	return current
}

//func (t *Table) FindPlayerPos(player *Player) int32 {
//	for i, p := range t.Players {
//		if p != nil && p.Id == player.Id {
//			return int32(i)
//		}
//	}
//	return -1
//}

func (t *Table) JoinPlayer(player *Player) (int, error) {
	t.PlayersLock.Lock()
	defer t.PlayersLock.Unlock()
	for i := range t.Players {
		// 找个空位坐下
		if t.Players[i] == nil {
			t.Players[i] = player
			return i, nil
		}
	}
	return -1, errors.New("牌桌玩家已满")
}

// RemovePlayer 从牌桌移除玩家
func (t *Table) RemovePlayer(playerId int64) (found bool, player *Player) {
	t.PlayersLock.Lock()
	defer t.PlayersLock.Unlock()
	// 从牌桌移除
	for i, p := range t.Players {
		if p.Id == playerId {
			t.Players[i] = nil
			return true, p
		}
	}
	return false, nil
}

// BuildResGameFullStatus 构建牌桌当前游戏状态消息
func (t *Table) BuildResGameFullStatus() *api.ResGameFullStatus {
	resGame := &api.ResGameFullStatus{
		//InGame:        collect.In(t.Stage, 2, 3, 4, 5),
		TableNo:       t.TableNo,
		GameStage:     t.Stage,
		Chip:          t.Chip,
		BigBlindPos:   int32(t.BigBlindPos),
		SmallBlindPos: int32(t.SmallBlindPos),
	}

	// 公共牌
	resGame.PublicCard = make([]*api.Card, len(t.PublicCards))
	for i, card := range t.PublicCards {
		if card == nil {
			resGame.PublicCard[i] = nil
			continue
		}
		resGame.PublicCard[i] = &api.Card{Dot: int32(card.Dot), Suit: CardColors[card.Suit]}
	}
	// 牌桌玩家
	resGame.Players = make([]*api.TablePlayer, len(t.Players))
	for i, p := range t.Players {
		if p == nil {
			resGame.Players[i] = nil
			continue
		}
		player := &api.TablePlayer{
			Robot:         false,
			Id:            p.Id,
			Username:      p.Username,
			Avatar:        p.Avatar,
			Chip:          p.Chip,
			Status:        p.Status,
			Master:        t.MasterId == p.Id,
			RoundBetTimes: p.RoundBetTimes,
			TotalBetChip:  p.TotalBetChip,
			HandCard:      make([]*api.Card, 2),
			BetRole: &api.BetRole{
				BetMin:  p.BetMin,
				BetMax:  p.BetMax,
				BetOpts: p.BetOpts,
			},
		}
		if p.Hand != nil {
			player.HandType = &api.HandType{
				Hand:   p.Hand.CardType.Name(),
				HandZh: p.Hand.CardType.NameZh(),
				Point:  int64(p.Hand.GetPoint()),
			}
		}
		// 玩家手牌
		for j, card := range p.Cards {
			if card == nil {
				player.HandCard[j] = nil
				continue
			}
			player.HandCard[j] = &api.Card{Dot: int32(card.Dot), Suit: CardColors[card.Suit]}
		}
		resGame.Players[i] = player
	}
	return resGame
}

func (t *Table) NoticeGameFullStatus() {
	// 发送当前游戏状态消息到牌桌所有用户
	resGame := t.BuildResGameFullStatus()
	gameEnd := collect.In(t.Stage, 1, 7, 9)
	for _, player := range t.Players {
		if player != nil && player.Client != nil {
			resGame.PlayerId = player.Id
			// 除结算时,只返回自己的手牌
			if !gameEnd {
				resGame = t.BuildResGameFullStatus()
				resGame.PlayerId = player.Id
				for _, p := range resGame.Players {
					if p != nil && p.Id != player.Id {
						p.HandCard[0] = nil
						p.HandCard[1] = nil
					}
				}
			}
			player.Client.Write(resGame)
		}
	}
}

// NoticeAllPlayer 发送消息到牌桌所有玩家
func (t *Table) NoticeAllPlayer(message proto.Message) {
	for _, player := range t.Players {
		if player != nil && player.Client != nil {
			player.Client.Write(message)
		}
	}
}

// HoldingCardPlayers 当前未弃牌玩家
func (t *Table) HoldingCardPlayers() []*Player {
	return collect.Filter(t.Players, func(i int, p *Player) bool {
		return p != nil && p.Status != 7
	})
}

// SetNextPlayerWithRoundStart 回合开始, 设置下一个下注玩家
func (t *Table) SetNextPlayerWithRoundStart() {
	nextPos := t.SmallBlindPos
	if t.Stage == 2 { // 第一回合第一轮由大盲注后一个玩家下注
		nextPos = t.NextPlayerPos(t.BigBlindPos)
	}
	if t.Players[nextPos].Status == 7 { // 其他回合由小盲注或其后第一个未弃牌玩家开始下注
		nextPos = t.NextHoldingCardPlayerPos(nextPos)
	}
	// 重置其他玩家状态为等待
	for _, p := range t.Players {
		if p == nil || p.Status == 7 {
			continue
		}
		if p.PosIndex != nextPos {
			p.WaitBet()
		}
	}

	nextP := t.Players[nextPos]
	nextP.SetStatus(6)
	nextP.BetOpts = []int32{2, 4}
	nextP.BetMin = t.BigBlindChip

	// 回合第一个玩家可过牌
	if t.Stage != 2 {
		nextP.BetOpts = append(nextP.BetOpts, 5)
	}

	switch t.TexasType {
	case 2: // 底池限注
		nextP.BetMax = t.Chip + t.LastPosBetChip*2
	case 3: // 无限注
		nextP.BetOpts = append(nextP.BetOpts, 3) // 可 all in
		nextP.BetMax = -1
	case 1: // 限注
		fallthrough
	default:
		// 第1,2回合跟注加注需和大盲注相同, 3,4回合两倍
		nextP.BetMax = t.BigBlindChip * (t.Stage/2 + 1)
	}

	// 如果下一玩家是大小盲注第一次下注
	if t.Stage == 2 && nextP.RoundBetTimes == 0 {
		switch nextP.PosIndex {
		case t.SmallBlindPos:
			nextP.BetMin -= t.SmallBlindChip
			if t.TexasType != 3 {
				nextP.BetMax -= t.SmallBlindChip
			}
		case t.BigBlindPos:
			nextP.BetMin -= t.BigBlindChip
			if t.LastPosBetChip == t.BigBlindChip { // 下注额未超过大盲注可过牌
				nextP.BetOpts = append(nextP.BetOpts, 5)
			}
			if t.TexasType != 3 {
				nextP.BetMax -= t.BigBlindChip
			}
		}
	}
}

// SetNextPlayer 查找下一个下注玩家, 并计算最大最小下注额
func (t *Table) SetNextPlayer(current int) {
	// 找下一个拿牌玩家
	var nextPos = t.NextHoldingCardPlayerPos(current)
	// 其他玩家状态等待
	for _, p := range t.Players {
		if p == nil || p.Status == 7 {
			continue
		}
		if p.PosIndex != nextPos {
			p.WaitBet()
		}
	}
	nextP := t.Players[nextPos]

	// 判断该轮下一玩家可下注情况    : 下一玩家是否已下注,当前玩家是否跟注,
	nextP.SetStatus(6)

	// 最大最小下注额
	nextP.BetMin = t.LastPosBetChip
	nextP.BetOpts = []int32{4}
	// 可过牌
	if t.LastPosBetOp == 5 {
		nextP.BetMin = t.BigBlindChip
		nextP.BetOpts = append(nextP.BetOpts, 5)
	} else {
		// 非过牌时可跟注
		nextP.BetOpts = append(nextP.BetOpts, 1)
	}
	// 下一玩家需跟注
	// 游戏类型处理最大下注额
	switch t.TexasType {
	case 2: // 底池限注
		nextP.BetOpts = append(nextP.BetOpts, 2)
		nextP.BetMax = t.Chip + t.LastPosBetChip*2
	case 3: // 无限注
		nextP.BetOpts = append(nextP.BetOpts, 2, 3) // 可 all in
		nextP.BetMax = -1
	case 1: // 限注
		fallthrough
	default:
		// 限注比赛只允许一次下注与三次加注
		if t.RoundRaiseTimes < 3 {
			nextP.BetOpts = append(nextP.BetOpts, 2)
			// 第1,2回合跟注加注需和大盲注相同, 3,4回合两倍
			nextP.BetMax = t.BigBlindChip * (t.Stage/2 + 1)
		} else {
			// 只能跟注
			nextP.BetMax = t.LastPosBetChip
		}
	}

	// 如果下一玩家是大小盲注第一次下注
	if t.Stage == 2 && nextP.RoundBetTimes == 0 {
		switch nextP.PosIndex {
		case t.SmallBlindPos:
			nextP.BetMin -= t.SmallBlindChip
			if t.TexasType != 3 {
				nextP.BetMax -= t.SmallBlindChip
			}
		case t.BigBlindPos:
			nextP.BetMin -= t.BigBlindChip
			if t.LastPosBetChip == t.BigBlindChip { // 下注额未超过大盲注可过牌
				nextP.BetOpts = append(nextP.BetOpts, 5)
			}
			if t.TexasType != 3 {
				nextP.BetMax -= t.BigBlindChip
			}
		}
	}
}

// RoundOver 当前回合结束
func (t *Table) RoundOver() (finished bool, err error) {
	// TODO 记录 t.RoundBetLogs[]

	// 游戏结束,开牌结算
	if t.Stage == 5 || 1 == len(collect.Filter(t.Players, func(i int, p *Player) bool {
		return p != nil && p.Status != 7
	})) {
		return true, t.cardFightAndSettle()
	}

	// 开启下一回合, 根据回合发公共牌
	switch t.Stage {
	case 2: // 发3张公共牌(翻牌)
		t.Stage = 3
		for i := 0; i < 5; i++ {
			if i < 3 {
				t.PublicCards[i] = t.Dealer.Deal()
				continue
			}
			// 第4,5张牌置空
			t.PublicCards[i] = nil
		}
	case 3: // 发第4张公共牌(转牌turn)
		t.Stage = 4
		t.PublicCards[3] = t.Dealer.Deal()
	case 4: // 发第5张公共牌(河牌river)
		t.Stage = 5
		t.PublicCards[4] = t.Dealer.Deal()
	}

	// 重置一些状态
	t.LastPosBetOp = 0
	t.LastPosBetChip = 0
	t.RoundRaiseTimes = 0
	t.RoundBetOps = nil
	t.RoundBetChips = nil
	t.RoundBetTotal = nil

	// 由小盲注或小盲注后第一个未弃牌玩家开始
	t.PlayerBetting.SetNextPlayer(true, t, nil)
	// t.SetNextPlayerWithRoundStart()

	return false, nil
}

// cardFightAndSettle 斗牌并结算
func (t *Table) cardFightAndSettle() error {
	var winners []*Player = nil
	leftPlayers := collect.Filter(t.Players, func(i int, p *Player) bool {
		return p != nil && p.Status != 7
	})
	if t.Stage != 5 && 1 < len(leftPlayers) {
		return errors.New("未到最后一轮下注且由1一个以上玩家持有牌")
	}
	t.Stage = 7

	if 1 == len(leftPlayers) {
		// 还剩一个玩家未弃牌
		winners = leftPlayers
	} else {
		// 剩余玩家大于1: 比牌
		for _, p := range t.Players {
			if p == nil || p.Status == 7 {
				continue
			}
			hand, err := AnalyzeMaxHand(p.Cards, t.PublicCards)
			if err != nil {
				return err
			}
			p.Hand = hand
			if winners == nil {
				winners = []*Player{p}
			} else {
				if p.Hand.GetPoint() > winners[0].Hand.GetPoint() {
					winners = []*Player{p}
				} else if p.Hand.GetPoint() == winners[0].Hand.GetPoint() {
					// 手牌相同
					winners = append(winners, p)
				}
			}
		}
	}

	// 向所有玩家输赢消息 ResCalcWinnerChip
	winnerCount := int32(len(winners))
	resWin := &api.ResCalcWinnerChip{}
	resWin.WinsChip = make(map[int64]int32, 11)
	for _, p := range t.Players {
		if p != nil {
			resWin.WinsChip[p.Id] = -p.TotalBetChip
		}
	}
	if winnerCount == 1 {
		// 只有一个玩家获胜
		winner := winners[0]
		winner.Chip += t.Chip
		resWin.WinsChip[winner.Id] += t.Chip
		t.Chip = 0
	} else {
		// 平分奖池
		once := t.Chip / winnerCount
		lessPos := winners[0].PosIndex
		lessNear := lessPos - t.SmallBlindPos
		for _, p := range winners {
			p.Chip += once
			resWin.WinsChip[p.Id] += once

			// 计算最靠近发牌者的赢家
			pNear := p.PosIndex - t.SmallBlindPos
			if pNear*lessPos < 0 { // 一正一负, 正的近
				if pNear >= 0 {
					lessPos = p.PosIndex
				}
			} else if lessNear > pNear {
				lessPos = p.PosIndex
			}
		}
		// 无法平分之小额筹码,顺时针靠近发牌者得
		less := t.Chip - once*winnerCount
		if less > 0 {
			t.Players[lessPos].Chip += less
			resWin.WinsChip[t.Players[lessPos].Id] += less
		}
		t.Chip = 0
	}

	// 斗牌结束, 玩家置为待操作状态
	for _, p := range t.Players {
		if p != nil {
			p.WaitBet()
			p.SetStatus(8)
		}
	}

	// 手牌: stage(1,2) other
	// 1.展示其他玩家手牌(组合牌型)
	// 2.展示玩家输赢金额(动画) ResCalcWinnerChip
	t.NoticeAllPlayer(resWin)
	// 3.主动准备 (重置) ready card[2]hold, pub[5]hold, self not show

	// TODO 初始化牌桌及状态
	// t.InitGameAndPlayerStatus()

	go func() {
		// TODO 等前端展示3秒钟后,牌桌回到初始状态,剔除掉线玩家
	}()
	return nil
}

// NoticeGamePlayerCall TODO 发送(下注信息、下注人、下一位下注人)到牌桌所有用户
//func (t *Table) NoticeGamePlayerCall() {
//
//}

//type Stage int
//
//func (s *Stage) String() string {
//	return stageNames[*s]
//}
//
//// 游戏阶段名称
//var stageNames = []string{"Stage00WaitBegin", "Stage10Perflop", "Stage20Flop", "Stage30Turn", "Stage40River"}
//
//// 游戏阶段
//const (
//	Stage00WaitBegin Stage = iota // 等待游戏开始
//	Stage10Perflop   Stage = iota // 下大小盲注，然后没人发2张底牌，大盲注后面第一个玩家跟注、加注或放弃，依次顺时针表态
//	Stage20Flop      Stage = iota // 发三张公牌，由小盲注开始顺时针表态
//	Stage30Turn      Stage = iota // 发第四张公共牌，由小盲注开始顺时针表态
//	Stage40River     Stage = iota // 发第五张牌，由小盲注开始顺时针表态，然后亮牌比大小
//)
