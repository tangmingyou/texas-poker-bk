package event

import (
	"fmt"
	"texas-poker-bk/internal/service/store"
	"texas-poker-bk/internal/session"
	"texas-poker-bk/tool/collect"
	"texas-poker-bk/tool/watcher"
	"time"
)

var (
	// OfflineWatcher 离线动作
	OfflineWatcher *watcher.Watcher[int64, bool]

	//OfflineQueue    *collect.DelayQueue[*session.NetAccount]

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
		// 不在游戏中，直接下线
		removeMemoryAccount(account)
		return
	}
	if collect.In(account.Player.GameTable.Stage, 1, 9) {
		// 牌局未在进行中直接移除玩家并下线
		account.Player.GameTable.RemovePlayer(account.Id)
		account.SettlePlayerChip()
		removeMemoryAccount(account)
		return
	}
	// 判断当前是玩家回合（60s自动过牌/弃牌）
	if account.Player.Status == 6 {
		account.Player.GameTable.RefAutoBettingDelayQueue.Add(60*time.Second, account.Id)
	}
	// 待玩家回合时还是offline（自动过牌/弃牌）
}

func removeMemoryAccount(account *session.NetAccount) {
	store.NetAccounts.Delete(account.Id)
	store.TokenVersions.Delete(account.Id)
	// TODO 持久化账户金额
}
