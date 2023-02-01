package session

import (
	"sync"
	"texas-poker-bk/internal/game"
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
}

func (account *NetAccount) DecrementBalance(amount int32) int32 {
	account.BalanceLock.Lock()
	defer account.BalanceLock.Unlock()
	account.Balance -= amount
	// TODO 同步到 DB
	return account.Balance
}

func (account *NetAccount) IncrementBalance(amount int32) int32 {
	account.BalanceLock.Lock()
	defer account.BalanceLock.Unlock()
	account.Balance += amount
	return account.Balance
}

func (account *NetAccount) GetBalance() int32 {
	account.BalanceLock.RLock()
	defer account.BalanceLock.RUnlock()
	return account.Balance
}
