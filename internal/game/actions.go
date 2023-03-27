package game

import (
	"errors"
	"fmt"
	"github.com/golang/protobuf/proto"
	"texas-poker-bk/api"
	"texas-poker-bk/tool/collect"
	"time"
)

type PlayerBetting struct {
	betHandlers map[int32]func(player *Player, betChip int32) proto.Message

	SetNextPlayer func(roundStart bool, t *Table, current *Player)

	IsRoundOver func(current *Player, currentBetOp int32) bool
}

// GetBetHandler 获取下注类型对应 handler
// betOp: 1跟注,2加注,3All-In,4弃牌,5过牌
func (betting *PlayerBetting) GetBetHandler(betOp int32) (func(player *Player, betChip int32) proto.Message, error) {
	handler := betting.betHandlers[betOp]
	if handler == nil {
		return nil, errors.New(fmt.Sprintf("未知操作#%d", betOp))
	}
	return handler, nil
}

var (
	LimitedBetting *PlayerBetting
)

// var LimitedActions map[int32]func(player *Player, betChip int32) proto.Message

func init() {
	// 1跟注,2加注,3All-In,4弃牌,5过牌
	LimitedActions := make(map[int32]func(player *Player, betChip int32) proto.Message, 7)
	LimitedActions[1] = Call4Limited
	LimitedActions[2] = Raise4Limited
	LimitedActions[3] = AllIn4Limited
	LimitedActions[4] = Fold4Limited
	LimitedActions[5] = Check4Limited
	LimitedBetting = &PlayerBetting{
		betHandlers:   LimitedActions,
		SetNextPlayer: SetNextPlayer4Limited,
		IsRoundOver:   IsRoundOver4Limited,
	}

}

func Call4Limited(player *Player, betChip int32) proto.Message {
	if betChip > player.BetMin {
		return &api.ResFail{Msg: fmt.Sprintf("投注金额大于跟注金额:%d", player.BetMin)}
	}
	return Raise4Limited(player, betChip)
}

// Raise4Limited 限注加注处理
func Raise4Limited(player *Player, betChip int32) proto.Message {
	table := player.GameTable
	if betChip < player.BetMin {
		return &api.ResFail{Msg: fmt.Sprintf("小于当前最低投注额:%d", player.BetMin)}
	}
	if player.BetMax > 0 && betChip > player.BetMax {
		return &api.ResFail{Msg: fmt.Sprintf("大于当前最大投注额:%d", player.BetMax)}
	}
	// 限注式加注3次判断
	if table.TexasType == 1 && betChip > player.BetMin && table.RoundRaiseTimes >= 3 {
		return &api.ResFail{Msg: "限加注3次,当前只能跟注"}
	}
	var raise bool // 是否加注
	betNotice := &api.ResNoticePlayerLine{PlayerId: player.Id}

	//if table.Stage == 2 && player.RoundBetTimes == 0 {
	//	// 如果是第一圈第一次大小盲注玩家下注,下注额算加上盲注
	//	switch player.PosIndex {
	//	case table.SmallBlindPos:
	//		playerBettingChip += table.SmallBlindChip
	//	case table.BigBlindPos:
	//		playerBettingChip += table.BigBlindChip
	//	}
	//}
	// 加注判断
	raise = betChip > player.BetMin
	if raise {
		table.RoundRaiseTimes++
		table.LastPosBetOp = 2
	} else {
		table.LastPosBetOp = 1
	}
	player.RoundBetTimes++
	table.LastPosBetChip = betChip
	table.Chip += betChip
	player.Chip -= betChip
	player.TotalBetChip += betChip

	betNotice.Line1 = fmt.Sprintf("+%d", betChip)
	if betChip == player.BetMin {
		betNotice.Line2 = fmt.Sprintf("跟注%d", player.BetMin)
	} else {
		betNotice.Line2 = fmt.Sprintf("加注:%d", betChip-player.BetMin)
		if player.BetMin > 0 {
			betNotice.Line3 = fmt.Sprintf("跟注:%d", player.BetMin)
		}
	}
	// 通知下注结果
	table.NoticeAllPlayer(betNotice)

	return &api.ResSuccess{}
}

func AllIn4Limited(player *Player, betChip int32) proto.Message {
	return &api.ResFail{Msg: "限注牌桌不可AllIn"}
}

// Fold4Limited 弃牌限注局
func Fold4Limited(player *Player, betChip int32) proto.Message {
	table := player.GameTable
	table.LastPosBetOp = 4
	table.LastPosBetChip = 0

	betNotice := &api.ResNoticePlayerLine{PlayerId: player.Id}

	player.SetStatus(7)
	betNotice.Line2 = "弃牌"
	// 剩余玩家数为1则结束, 在 service 中判断
	//leftPlayers := collect.Filter(player.GameTable.Players, func(i int, p *Player) bool {
	//	return p != nil && p.Status != 7
	//})
	//if len(leftPlayers) == 1 {
	//	err := table.RoundOver()
	//	if err != nil {
	//		return &api.ResFail{Code: 500, Msg: err.Error()}
	//	}
	//	// player.GameTable.NoticeAllPlayer(betNotice)
	//	return &api.ResSuccess{}
	//}
	// player.GameTable.NoticeAllPlayer(betNotice)
	return &api.ResSuccess{}
}

func Check4Limited(player *Player, betChip int32) proto.Message {
	table := player.GameTable
	table.LastPosBetOp = 5
	table.LastPosBetChip = 0
	betNotice := &api.ResNoticePlayerLine{PlayerId: player.Id}

	player.RoundBetTimes++
	betNotice.Line2 = "过牌"

	// 第一轮只有未加注时大盲注可过牌,大盲注了不算只过牌
	player.RoundCheckRaiseOnly = table.Stage != 2

	player.GameTable.NoticeAllPlayer(betNotice)
	return nil
}

// IsRoundOver4Limited 判断回合是否结束
func IsRoundOver4Limited(current *Player, currentBetOp int32) bool {
	table := current.GameTable
	// 当前玩家弃牌, 判断剩余玩家数1结束
	if currentBetOp == 4 {
		if 1 == len(table.HoldingCardPlayers()) {
			return true
		}
	}
	// 判断下注轮 和 下注金额
	if collect.IsEmptyMap(table.RoundBetOps) ||
		collect.IsEmptyMap(table.RoundBetChips) {
		return false
	}
	// 当前玩家加注, 继续
	if currentBetOp == 2 {
		return false
	}
	var totalTemp int32 = -1 // 所有玩家投入相同筹码回合结束
	for _, p := range table.Players {
		if p == nil || p.Status == 7 {
			continue
		}
		// 还有玩家未下注
		if collect.IsEmptySlice(table.RoundBetOps[p.Id]) {
			return false
		}
		// 计算玩家下注额
		if totalTemp == -1 {
			totalTemp = table.RoundBetTotal[p.Id]
			continue
		}
		if totalTemp != table.RoundBetTotal[p.Id] {
			return false
		}
	}

	// 判断当前玩家和下一玩家 回合是否结束
	nextPlayerPos := table.NextHoldingCardPlayerPos(current.PosIndex)
	nextPlayer := table.Players[nextPlayerPos]
	if table.Stage == 2 && nextPlayerPos == table.BigBlindPos &&
		len(table.RoundBetOps[nextPlayer.Id]) == 1 { // 大盲注玩家还下注一次
		return false
	}
	//// 投注金额相同
	//currentBetTotal := table.RoundBetTotal[current.Id]
	//if currentBetTotal == 0 {
	//	if currentBetOp == 5 && // 当前玩家过牌且下一位玩家已过牌
	//		collect.Tail(table.RoundBetOps[nextPlayer.Id], 0) == 5 {
	//		return true
	//	}
	//
	//} else if table.RoundBetTotal[nextPlayer.Id] == currentBetTotal {
	//	// 下一玩家已投入等量筹码
	//	return true
	//}

	//var total int32 = -1
	//for uid, betTotal := range table.RoundBetTotal {
	//	player := table.GetPlayerById(uid)
	//	if player == nil || player.Status == 7 {
	//		continue
	//	}
	//	if total == -1 {
	//		total = betTotal
	//		continue
	//	}
	//	if total != betTotal {
	//		return false
	//	}
	//}

	// TODO 判断剩余牌手All-In情况
	return true
}

func SetNextPlayer4Limited(roundStart bool, t *Table, current *Player) {
	var nextPos int = t.SmallBlindPos
	if !roundStart {
		// 非回合开始
		nextPos = t.NextHoldingCardPlayerPos(current.PosIndex)
	} else {
		// 回合开始
		if t.Stage == 2 { // 第一轮由大盲注后一个玩家下注
			nextPos = t.NextPlayerPos(t.BigBlindPos)

		} else if t.Players[nextPos].Status == 7 { // 小盲注弃牌,其后第一个未弃牌玩家开始
			nextPos = t.NextHoldingCardPlayerPos(nextPos)
		}
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
	// 下一玩家操作项和下注限额
	nextP := t.Players[nextPos]
	nextP.SetStatus(6)
	nextP.BetOpts = []int32{4}

	// 回合最大下注额 减 下一玩家总下注额
	roundMaxBet := collect.Max(collect.MapValues(t.RoundBetTotal), 0)
	nextP.BetMin = roundMaxBet - t.RoundBetTotal[nextP.Id]
	// 第1,2回合跟注加注需和大盲注相同, 3,4回合两倍
	nextP.BetMax = t.BigBlindChip * (t.Stage/2 + 1)
	if nextP.BetMin == 0 { // 过牌
		nextP.BetOpts = append(nextP.BetOpts, 5)
	} else if nextP.BetMin > 0 { // 跟注
		nextP.BetOpts = append(nextP.BetOpts, 1)
	}
	if nextP.BetMax > nextP.BetMin { // 加注
		nextP.BetOpts = append(nextP.BetOpts, 2)
	}
	// TODO 筹码不够跟注时可 all in

	// 玩家离线，n秒后自动投注
	if !nextP.Client.IsOnline() {
		nextP.OfflineAutoBetDelayCanceler = nextP.GameTable.RefAutoBettingDelayQueue.Delay(60*time.Second, nextP.Id)
	}
}

func AllIn4NoLimited(player *Player, betChip int32) proto.Message {

	return nil
}
