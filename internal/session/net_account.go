package session

import (
	"sync"
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/logic/balance"
	"texas-poker-bk/tool/async"
)

// NetAccount 已认证的长连接用户
type NetAccount struct {
	Id          int64
	UserName    string
	Avatar      string
	Client      *NetClient
	Balance     int32 // 余额
	Player      *game.Player
	BalanceLock *sync.RWMutex
	Lock        *sync.Mutex

	OfflineDelayCanceler *async.Canceler[int64]
}

func (account *NetAccount) DecrementBalance(amount int32) int32 {
	account.BalanceLock.Lock()
	defer account.BalanceLock.Unlock()
	account.Balance -= amount

	// 账户金额持久化
	balance.AsyncPersist.Persist(account.Id, account.Balance)
	return account.Balance
}

func (account *NetAccount) IncrementBalance(amount int32) int32 {
	account.BalanceLock.Lock()
	defer account.BalanceLock.Unlock()
	account.Balance += amount

	// 账户金额持久化
	balance.AsyncPersist.Persist(account.Id, account.Balance)
	return account.Balance
}

func (account *NetAccount) GetBalance() int32 {
	account.BalanceLock.RLock()
	defer account.BalanceLock.RUnlock()
	return account.Balance
}

func (account *NetAccount) SettlePlayerChip() {
	// 返还玩家账户金额
	account.IncrementBalance(account.Player.Chip) // 牌桌筹码返还到账户
	account.Player.Chip = 0
	account.Player = nil // 解除账户绑定
}
