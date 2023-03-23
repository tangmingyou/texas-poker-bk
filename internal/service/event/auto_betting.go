package event

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/service/store"
	"texas-poker-bk/tool/collect"
	"time"
)

var AutoBettingDelayQueue *collect.DelayQueue[int64]

var HandleReqBetting func(player *game.Player, msg *api.ReqBetting) (proto.Message, error)

func init() {
	AutoBettingDelayQueue = collect.NewDelayQueue(handleAutoBetting)
}

func handleAutoBetting(accountId int64, _ time.Time) {
	fmt.Println("auto betting...", accountId)
	account := store.NetAccounts.Get(accountId)
	if account == nil || account.Player == nil || account.Player.Status != 6 {
		return
	}
	// 自动下注逻辑
	betType, betChip := account.Player.AutoBetting()
	res, err := HandleReqBetting(account.Player, &api.ReqBetting{
		BetType: betType, BetChip: betChip, Operator: 1,
	})
	resFail, ok := res.(*api.ResFail)
	if err != nil || ok {
		fmt.Println("auto betting err: ", resFail, err)
	}
}
