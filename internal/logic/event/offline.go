package event

import (
	"fmt"
	"texas-poker-bk/internal/logic/delayer"
	"texas-poker-bk/internal/logic/store"
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
	// 10s内未重连上处理离线逻辑
	account.OfflineDelayCanceler = delayer.OfflineDelayer.Delay(10*time.Second, account.Id)
}
