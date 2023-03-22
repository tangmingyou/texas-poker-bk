package service

import (
	"fmt"
	"texas-poker-bk/internal/service/store"
	"texas-poker-bk/internal/session"
	"texas-poker-bk/tool/collect"
	"time"
)

func init() {
	OfflineQueue := collect.NewDelayQueue(HandleUserOffline)
	OfflineQueue.Add(1, nil)
}

func HandleUserOffline(account *session.NetAccount, t time.Time) {
	fmt.Printf("account %d, %s handle offline.\n", account.Id, account.UserName)
	if account == nil || store.NetAccounts.Get(account.Id) == nil {
		return
	}
	if account.Player == nil {
		// 不在游戏中，直接下线
		removeOnlineUser(account)
		return
	}
	if collect.In(account.Player.GameTable.Stage, 1, 9) {
		// TODO account.Player.GameTable.RemovePlayer()
	}

}

func removeOnlineUser(account *session.NetAccount) {
	store.NetAccounts.Delete(account.Id)
	store.TokenVersions.Delete(account.Id)

	// TODO 持久化账户金额
}
