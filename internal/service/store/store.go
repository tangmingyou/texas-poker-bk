package store

import (
	"errors"
	"fmt"
	"sync"
	"sync/atomic"
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/session"
)

var (
	TableNo     *atomic.Int32
	LobbyTables map[int32]*game.Table
	lobbyLock   *sync.Mutex

	// NetAccounts 存储一下在线用户
	NetAccounts map[int64]*session.NetAccount
	accountLock *sync.Mutex
)

func init() {
	TableNo = &atomic.Int32{} // 牌桌编号计数器

	LobbyTables = make(map[int32]*game.Table, 16)
	lobbyLock = &sync.Mutex{}

	NetAccounts = make(map[int64]*session.NetAccount)
	accountLock = &sync.Mutex{}
}

func SaveNewTable(table *game.Table) error {
	lobbyLock.Lock()
	defer lobbyLock.Unlock()
	if LobbyTables[table.TableNo] != nil {
		return errors.New(fmt.Sprintf("table no %d exists!", table.TableNo))
	}
	LobbyTables[table.TableNo] = table
	return nil
}

// SaveNetAccounts 保存一下在线账户映射关系 TODO 处理断线、重连问题
func SaveNetAccounts(account *session.NetAccount) *session.NetAccount {
	accountLock.Lock()
	defer accountLock.Unlock()
	current := NetAccounts[account.Id]
	if current == nil {
		NetAccounts[account.Id] = account
		return account
	}
	// 掉线重连的用户, TODO 重复登录的用户
	current.Client = account.Client
	return current
}
