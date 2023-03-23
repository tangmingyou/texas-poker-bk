package store

import (
	"github.com/patrickmn/go-cache"
	"strconv"
	"sync/atomic"
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/session"
	"time"
)

var (
	TableNo *atomic.Int32

	// LobbyTables 存储当前进行中的牌桌
	LobbyTables *Store[int32, *game.Table]

	// NetAccounts 存储一下在线用户, TODO 连接终端,未在牌局或牌局未开始中回收账号,机器人代打后回收账号
	NetAccounts *Store[int64, *session.NetAccount]

	// TokenVersions 存储token版本号,登录时+1,一个账户同一时间只允许一个token有效
	TokenVersions *Store[int64, int32]
)

const (
	NoExpiration      time.Duration = cache.NoExpiration
	DefaultExpiration time.Duration = cache.DefaultExpiration
)

func init() {
	TableNo = &atomic.Int32{} // 牌桌编号计数器

	var tableZeroValue *game.Table = nil
	LobbyTables = NewStore(tableZeroValue, func(k int32) string {
		return strconv.Itoa(int(k))
	})

	var accountZeroValue *session.NetAccount = nil
	NetAccounts = NewStore(accountZeroValue, func(k int64) string {
		return strconv.FormatInt(k, 10)
	})

	TokenVersions = NewStore(int32(-1), func(k int64) string {
		return strconv.FormatInt(k, 10)
	})
}

type Store[K any, V any] struct {
	c         *cache.Cache
	zeroValue V
	k2str     func(K) string
}

func NewStore[K any, V any](zeroValue V, k2str func(K) string) *Store[K, V] {
	return NewExpireStore(cache.NoExpiration, cache.NoExpiration, zeroValue, k2str)
}

func NewExpireStore[K any, V any](defaultExpiration, cleanupInterval time.Duration, zeroValue V, k2str func(K) string) *Store[K, V] {
	return &Store[K, V]{
		c:         cache.New(defaultExpiration, cleanupInterval),
		zeroValue: zeroValue,
		k2str:     k2str,
	}
}

func (s *Store[K, V]) SetDefault(k K, v V) {
	s.c.SetDefault(s.k2str(k), v)
}

func (s *Store[K, V]) Set(k K, v V, d time.Duration) {
	s.c.Set(s.k2str(k), v, d)
}

func (s *Store[K, V]) Get(k K) V {
	v, found := s.c.Get(s.k2str(k))
	if !found {
		return s.zeroValue
	}
	return v.(V)
}

func (s *Store[K, V]) Delete(k K) {
	s.c.Delete(s.k2str(k))
}

func (s *Store[K, V]) ForEach(f func(k string, v V)) {
	for k, v := range s.c.Items() {
		f(k, v.Object.(V))
	}
}

func (s *Store[K, V]) Count() int {
	return s.c.ItemCount()
}
