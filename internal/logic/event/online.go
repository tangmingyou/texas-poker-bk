package event

import (
	"texas-poker-bk/internal/logic/store"
	"texas-poker-bk/tool/watcher"
)

// OnlineWatcher 上线动作
var OnlineWatcher *watcher.Watcher[int64, bool]

func init() {
	OnlineWatcher = watcher.NewWatcher(128, handleOnline)
	go OnlineWatcher.Run()
}

// handleOnline 玩家上线了，取消一些自动操作动作
func handleOnline(e *watcher.Event[int64, bool]) {
	account := store.NetAccounts.Get(e.Publisher)
	if account == nil {
		return
	}
	if account.OfflineCleanCanceler != nil {
		account.OfflineCleanCanceler.Cancel()
	}
	if account.Player == nil {
		return
	}
	// 取消自动下注
	if account.Player.OfflineAutoBetDelayCanceler != nil {
		account.Player.OfflineAutoBetDelayCanceler.Cancel()
		account.Player.OfflineAutoBetDelayCanceler = nil
	}
}
