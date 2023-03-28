package delayer

import (
	"texas-poker-bk/internal/logic/store"
	"texas-poker-bk/tool/async"
	"time"
)

// 清理离线用户

var (
	OfflineCleanDelayer *async.DelayQueue[int64]
)

func init() {
	OfflineCleanDelayer = async.NewDelayQueue(time.Second, 128, removeMemoryAccount)
}

// func removeMemoryAccount(account *session.NetAccount) {
func removeMemoryAccount(accountId int64, now time.Time) {
	_ = store.NetAccounts.Get(accountId)
	store.NetAccounts.Delete(accountId)
	store.TokenVersions.Delete(accountId)
	// TODO 持久化账户金额
}
