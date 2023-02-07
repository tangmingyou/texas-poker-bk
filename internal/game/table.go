package game

import (
	"errors"
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

	PlayerNum     int32     // 玩家数
	RobotNum      int32     // 机器人数
	Players       []*Player // 玩家
	Robots        []*Robot
	BigBlindPos   int   // 大盲注位
	SmallBlindPos int   // 小盲注位
	BigBlindChip  int32 // 大盲注金额
	TexasType     int32 // 德州扑克类型: (1限注德州扑克:你只能增加与大盲注相同的投注额; 2底池限制德州扑克：你只能增加当时台面最大额的投注额（已经完成所有投注）; 3无限制德州扑克：你可在手持额度下，增加任何额度的投注额，如果你投入所有筹码，就是“全押”)

	PlayersLock *sync.Mutex
	ChipLock    *sync.Mutex // 桌面筹码更新锁
	// TODO game logs7
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

func (t *Table) NextPosPlayer(current int) int {
	for i := current + 1; i < len(t.Players); i++ {
		if t.Players[i] == nil {
			continue
		}
		return i
	}
	for i, p := range t.Players {
		if p != nil {
			return i
		}
	}
	return 0
}

func (t *Table) FindPlayerPos(player *Player) int32 {
	for i, p := range t.Players {
		if p != nil && p.Id == player.Id {
			return int32(i)
		}
	}
	return -1
}

func (t *Table) JoinPlayer(player *Player) error {
	t.PlayersLock.Lock()
	defer t.PlayersLock.Unlock()
	for i := range t.Players {
		// 找个空位坐下
		if t.Players[i] == nil {
			t.Players[i] = player
			return nil
		}
	}
	return errors.New("牌桌玩家已满")
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
			Robot:      false,
			Id:         p.Id,
			Username:   p.Username,
			Avatar:     p.Avatar,
			Chip:       p.Chip,
			Status:     p.Status,
			LastStatus: p.LastStatus,
			Master:     t.MasterId == p.Id,
			HandCard:   make([]*api.Card, 2),
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
	// TODO 机器人

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

// NoticeGamePlayerCall TODO 发送(下注信息、下注人、下一位下注人)到牌桌所有用户
//func (t *Table) NoticeGamePlayerCall() {
//
//}

type Stage int

func (s *Stage) String() string {
	return stageNames[*s]
}

// 游戏阶段名称
var stageNames = []string{"Stage00WaitBegin", "Stage10Perflop", "Stage20Flop", "Stage30Turn", "Stage40River"}

// 游戏阶段
const (
	Stage00WaitBegin Stage = iota // 等待游戏开始
	Stage10Perflop   Stage = iota // 下大小盲注，然后没人发2张底牌，大盲注后面第一个玩家跟注、加注或放弃，依次顺时针表态
	Stage20Flop      Stage = iota // 发三张公牌，由小盲注开始顺时针表态
	Stage30Turn      Stage = iota // 发第四张公共牌，由小盲注开始顺时针表态
	Stage40River     Stage = iota // 发第五张牌，由小盲注开始顺时针表态，然后亮牌比大小
)
