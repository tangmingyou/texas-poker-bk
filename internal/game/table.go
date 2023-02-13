package game

import (
	"errors"
	"github.com/golang/protobuf/proto"
	"sync"
	"texas-poker-bk/api"
	"texas-poker-bk/tool/collect"
)

type Table struct {
	TableNo    int32 // 牌桌编号
	MasterId   int64 // 房主Id
	RoundTimes int32 // 回合次数
	Stage      int32 // 游戏阶段: 1等待玩家准备;2游戏开始(自动扣大小盲注,发牌,轮流下注)  [2(开始发牌)下大盲注;3下小盲注;4发公共牌;] 5发第四张公共牌,轮流下注;6发第五张公共牌,轮流下注,7比牌结算,9已解散

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

	LastPosBetChip  int32 // 上家下注金额
	RoundRaiseTimes int32 // 该轮押注圈加注次数

	PlayersLock *sync.Mutex
	ChipLock    *sync.Mutex // 桌面筹码更新锁
	// TODO game logs7
}

// InitGameAndPlayerStatus 初始化桌面
func (t *Table) InitGameAndPlayerStatus() {
	if t.PlayersLock == nil {
		t.PlayersLock = &sync.Mutex{}
	}
	if t.ChipLock == nil {
		t.ChipLock = &sync.Mutex{}
	}
	t.PublicCards = [5]*Card{nil, nil, nil, nil, nil}
	if t.Dealer == nil {
		t.Dealer = NewDealer()
	} else {
		t.Dealer.Init()
	}
	t.Stage = 1
	t.BigBlindPos = 0
	t.SmallBlindPos = 0

	for _, p := range t.Players {
		if p != nil {
			p.RoundInit()
		}
	}
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
		if t.Players[i] == nil {
			continue
		}
		return i
	}
	// 从头找
	for i, p := range t.Players {
		if p != nil {
			return i
		}
	}
	return current
}

// NextHoldingCardPlayerPos 下一个未弃牌玩家
func (t *Table) NextHoldingCardPlayerPos(current int) int {
	for i := 0; i < 999; i++ {
		nextPos := t.NextPlayerPos(current)
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

// BuildResGameFullStatus 构建牌桌当前游戏状态消息
func (t *Table) BuildResGameFullStatus() *api.ResGameFullStatus {
	resGame := &api.ResGameFullStatus{
		InGame:        collect.In(t.Stage, 2, 3, 4, 5, 6, 7),
		TableNo:       t.TableNo,
		GameStage:     t.Stage,
		Chip:          t.Chip,
		RoundTimes:    t.RoundTimes,
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
			LastStatus:    p.LastStatus,
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
	for _, player := range t.Players {
		if player != nil && player.ProtoWriter != nil {
			resGame := t.BuildResGameFullStatus()
			resGame.PlayerId = player.Id
			// 只返回自己的手牌 TODO 结算时全部返回
			for _, p := range resGame.Players {
				if p != nil && p.Id != player.Id {
					p.HandCard[0] = nil
					p.HandCard[1] = nil
				}
			}
			player.ProtoWriter.Write(resGame)
		}
	}
}

// NoticeAllPlayer 发送消息到牌桌所有玩家
func (t *Table) NoticeAllPlayer(message proto.Message) {
	for _, player := range t.Players {
		if player != nil && player.ProtoWriter != nil {
			player.ProtoWriter.Write(message)
		}
	}
}

// RoundOver 当前回合结束
func (t *Table) RoundOver() error {
	// 游戏结束,开牌结算
	if t.RoundTimes >= 4 || 1 == len(collect.Filter(t.Players, func(i int, p *Player) bool {
		return p != nil && p.Status != 7
	})) {
		return t.cardFightAndSettle()
	}

	// 开启下一回合, 重置一些状态
	t.RoundRaiseTimes = 0
	t.RoundTimes++
	for _, p := range t.Players {
		if p != nil {
			p.RoundBetTimes = 0
			p.TotalBetChip = 0
			p.BetMin = 0
			p.BetMax = 0
			p.BetOpts = []int32{}
			p.SetStatus(3)
		}
	}
	// 由小盲注或小盲注后第一个未弃牌玩家开始
	nextBegin := t.SmallBlindPos
	if t.Players[t.SmallBlindPos].Status == 7 {
		nextBegin = t.NextHoldingCardPlayerPos(nextBegin)
	}
	begin := t.Players[nextBegin]
	begin.SetStatus(6)
	begin.BetOpts = []int32{1, 2, 4, 5}

	// 根据回合发公共牌
	switch t.RoundTimes {
	case 2: // 发3张公共牌(翻牌)
		for i := 0; i < 5; i++ {
			if i < 3 {
				t.PublicCards[i] = t.Dealer.Deal()
				continue
			}
			// 第4,5张牌置空
			t.PublicCards[i] = nil
		}
	case 3: // 发第4张公共牌(转牌turn)
		t.PublicCards[3] = t.Dealer.Deal()
		t.Stage = 5
	case 4: // 发第5张公共牌(河牌river)
		t.PublicCards[4] = t.Dealer.Deal()
		t.Stage = 6
	}
	return nil
}

// cardFightAndSettle 斗牌并结算
func (t *Table) cardFightAndSettle() error {
	var winners []*Player = nil
	leftPlayers := collect.Filter(t.Players, func(i int, p *Player) bool {
		return p != nil && p.Status != 7
	})

	if t.RoundTimes < 4 && 1 < len(leftPlayers) {
		return errors.New("未到最后一轮下注且由1一个以上玩家持有牌")
	}
	t.Stage = 7

	if 1 == len(leftPlayers) {
		// 还剩一个玩家未弃牌
		winners = leftPlayers
	} else {
		// 剩余玩家大于1: 比牌
		for _, p := range t.Players {
			if p != nil {
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
				if p.Hand.point > winners[0].Hand.point {
					winners[0] = p
				} else if p.Hand.point == winners[0].Hand.point {
					// 手牌相同
					winners = append(winners, p)
				}
			}
		}
	}
	winnerCount := int32(len(winners))
	// TODO 所有玩家输赢消息 ResCalcWinnerChip
	if winnerCount == 1 {
		// 只有一个玩家获胜
		winner := winners[0]
		winner.Chip += t.Chip
		t.Chip = 0
	} else {
		// 平分奖池
		once := t.Chip / winnerCount
		lessPos := winners[0].PosIndex
		lessNear := lessPos - t.SmallBlindPos
		for _, p := range winners {
			p.Chip += once
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
		}
		t.Chip = 0
	}

	// TODO 通知输赢金额

	// TODO 初始化牌桌及状态
	t.InitGameAndPlayerStatus();

	go func() {
		// TODO 等前端展示3秒钟后,牌桌回到初始状态,剔除掉线玩家
	}()
	return nil
}

// DiscardAllPlayerWin 其他玩家弃牌,玩家赢
func (t *Table) DiscardAllPlayerWin(player *Player) {

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
