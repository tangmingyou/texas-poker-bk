package store

import (
	"errors"
	"fmt"
	"github.com/patrickmn/go-cache"
	"strconv"
	"sync"
	"sync/atomic"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/session"
	"time"
)

var (
	TableNo     *atomic.Int32
	LobbyTables map[int32]*game.Table
	lobbyLock   *sync.Mutex

	// NetAccounts 存储一下在线用户, TODO 连接终端,未在牌局或牌局未开始中回收账号,机器人代打后回收账号
	NetAccounts map[int64]*session.NetAccount
	accountLock *sync.Mutex

	// 存储登录 token version
	//TokenVersionStore map[int64]int32
	//tokenVersionLock  *sync.Mutex

	// 后面使用多个缓存实体，减少不同类型锁时间
	storeCache *cache.Cache
	// a. cache in one -> type conv
	// b. cache in many -> space/code more
	TokenVStore *store[int64, int32]
)

const (
	NoExpiration      time.Duration = cache.NoExpiration
	DefaultExpiration time.Duration = cache.DefaultExpiration
)

type store[K any, V any] struct {
	c         *cache.Cache
	zeroValue V
	k2str     func(K) string
}

func (s *store[K, V]) SetDefault(k K, v V) {
	s.c.SetDefault(s.k2str(k), v)
}

func (s *store[K, V]) Set(k K, v V, d time.Duration) {
	s.c.Set(s.k2str(k), v, d)
}

func (s *store[K, V]) Get(k K) V {
	v, found := s.c.Get(s.k2str(k))
	if !found {
		return s.zeroValue
	}
	return v
}

func (s *store[K, V]) Delete(k K) {
	s.c.Delete(s.k2str(k))
}

func init() {
	TokenVStore = &store[int64, int32]{
		c:         cache.New(cache.NoExpiration, cache.NoExpiration),
		zeroValue: 0,
		k2str: func(k int64) string {
			return strconv.FormatInt(k, 10)
		},
	}

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

// SaveAndTryRecoverNetAccounts 保存一下在线账户映射关系 TODO 处理断线、重连问题
func SaveAndTryRecoverNetAccounts(account *session.NetAccount) *session.NetAccount {
	accountLock.Lock()
	defer accountLock.Unlock()
	current := NetAccounts[account.Id]
	if current == nil {
		NetAccounts[account.Id] = account
		return account
	}
	// 掉线重连的用户, TODO 重复登录的用户
	current.Client.Write(&api.ResFail{Code: 403, Msg: "该账号在其他地方登录，您已下线"})
	current.Client = account.Client
	if current.Player != nil {
		current.Player.ProtoWriter = account.Client
	}
	return current
}
