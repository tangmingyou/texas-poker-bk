package event

import (
	"fmt"
	gameDelayer "texas-poker-bk/internal/game/delayer"
	"texas-poker-bk/internal/logic/delayer"
	"texas-poker-bk/internal/logic/store"
	"texas-poker-bk/tool/collect"
	"texas-poker-bk/tool/watcher"
	"time"
)

var (
	// OfflineWatcher 离线动作
	OfflineWatcher *watcher.Watcher[int64, bool]
)

func init() {
	OfflineWatcher = watcher.NewWatcher(128, handleOffline)
	go OfflineWatcher.Run()
}

func handleOffline(e *watcher.Event[int64, bool]) {
	account := store.NetAccounts.Get(e.Publisher)
	if account == nil {
		return
	}
	fmt.Printf("account %d, %s handle offline.\n", account.Id, account.UserName)
	if account == nil || store.NetAccounts.Get(account.Id) == nil {
		return
	}
	if account.Player == nil {
		// 不在游戏中，n秒后移除
		account.OfflineCleanCanceler = delayer.OfflineCleanDelayer.Delay(10*time.Second, account.Id)
		return
	}
	// 牌局未在进行中直接移除玩家并下线
	if collect.In(account.Player.GameTable.Stage, 1, 9) {
		found, _ := account.Player.GameTable.RemovePlayer(account.Id)
		if found {
			account.SettlePlayerChip()
		}
		account.OfflineCleanCanceler = delayer.OfflineCleanDelayer.Delay(10*time.Second, account.Id)
		return
	}
	// 牌局结束展示时间，10s后再移除玩家
	if account.Player.GameTable.Stage == 7 {
		accountId := e.Publisher
		gameDelayer.GameDelayer.Delay(10*time.Second, func() {
			account := store.NetAccounts.Get(accountId)
			if account == nil || account.Player == nil || collect.NotIn(account.Player.GameTable.Stage, 1, 7, 9) {
				return
			}
			// 从牌桌移除玩家
			found, _ := account.Player.GameTable.RemovePlayer(account.Id)
			if found {
				account.SettlePlayerChip()
			}
			account.OfflineCleanCanceler = delayer.OfflineCleanDelayer.Delay(3*time.Second, account.Id)
		})
	}
}
