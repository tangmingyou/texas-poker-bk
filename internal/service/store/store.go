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

	LobbyTables *store[int32, *game.Table]

	// NetAccounts 存储一下在线用户, TODO 连接终端,未在牌局或牌局未开始中回收账号,机器人代打后回收账号
	NetAccounts *store[int64, *session.NetAccount]

	TokenVersions *store[int64, int32]
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
	return v.(V)
}

func (s *store[K, V]) Delete(k K) {
	s.c.Delete(s.k2str(k))
}

func (s *store[K, V]) ForEach(f func(k string, v V)) {
	for k, v := range s.c.Items() {
		f(k, v.Object.(V))
	}
}

func (s *store[K, V]) Count() int {
	return s.c.ItemCount()
}

func init() {
	LobbyTables = &store[int32, *game.Table]{
		c:         cache.New(cache.NoExpiration, cache.NoExpiration),
		zeroValue: nil,
		k2str: func(k int32) string {
			return strconv.Itoa(int(k))
		},
	}
	NetAccounts = &store[int64, *session.NetAccount]{
		c:         cache.New(cache.NoExpiration, cache.NoExpiration),
		zeroValue: nil,
		k2str: func(k int64) string {
			return strconv.FormatInt(k, 10)
		},
	}

	TokenVersions = &store[int64, int32]{
		c:         cache.New(cache.NoExpiration, cache.NoExpiration),
		zeroValue: -1,
		k2str: func(k int64) string {
			return strconv.FormatInt(k, 10)
		},
	}

	TableNo = &atomic.Int32{} // 牌桌编号计数器
}
