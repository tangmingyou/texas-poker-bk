package delayer

import (
	"texas-poker-bk/internal/game/delayer"
	"texas-poker-bk/internal/logic/store"
	"texas-poker-bk/tool/async"
	"texas-poker-bk/tool/collect"
	"time"
)

// 清理离线用户

var (
	OfflineDelayer *async.DelayQueue[int64]
)

func init() {
	OfflineDelayer = async.NewDelayQueue(time.Second, 128, handleOfflineDelay)
}

func handleOfflineDelay(accountId int64, now time.Time) {
	account := store.NetAccounts.Get(accountId)
	if account == nil {
		return
	}
	if account.Player == nil {
		// 不在游戏中，移除
		removeMemoryAccount(accountId)
		return
	}
	// 牌局未在进行中直接移除玩家并下线
	if collect.In(account.Player.GameTable.Stage, 1, 9) {
		table := account.Player.GameTable
		found, _ := table.RemovePlayer(account.Id)
		if found {
			account.SettlePlayerChip()
			table.NoticeGameFullStatus()
		}
		removeMemoryAccount(accountId)
		return
	}
	// 牌局结束展示时间，10s后再移除玩家
	if account.Player.GameTable.Stage == 7 {
		accountId := accountId
		delayer.GameDelayer.Delay(10*time.Second, func() {
			account := store.NetAccounts.Get(accountId)
			if account == nil || account.Player == nil || collect.NotIn(account.Player.GameTable.Stage, 1, 7, 9) {
				return
			}
			// 从牌桌移除玩家
			table := account.Player.GameTable
			found, _ := table.RemovePlayer(account.Id)
			if found {
				account.SettlePlayerChip()
				table.NoticeGameFullStatus()
			}
			removeMemoryAccount(account.Id)
		})
	}
	// 牌局进行中，自动下注待结束自动处理
}

// func removeMemoryAccount(account *session.NetAccount) {
func removeMemoryAccount(accountId int64) {
	_ = store.NetAccounts.Get(accountId)
	store.NetAccounts.Delete(accountId)
	store.TokenVersions.Delete(accountId)
	// TODO 持久化账户金额
}
