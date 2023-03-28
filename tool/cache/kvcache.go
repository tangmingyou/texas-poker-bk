package cache

import (
	"github.com/patrickmn/go-cache"
	"time"
)

const (
	NoExpiration      time.Duration = cache.NoExpiration
	DefaultExpiration time.Duration = cache.DefaultExpiration
)

type KVCache[K any, V any] struct {
	c         *cache.Cache
	zeroValue V // 默认值
	k2str     func(K) string
}

func NewKVCache[K any, V any](zeroValue V, k2str func(K) string) *KVCache[K, V] {
	return NewExpireStore(cache.NoExpiration, cache.NoExpiration, zeroValue, k2str)
}

func NewExpireStore[K any, V any](defaultExpiration, cleanupInterval time.Duration, zeroValue V, k2str func(K) string) *KVCache[K, V] {
	return &KVCache[K, V]{
		c:         cache.New(defaultExpiration, cleanupInterval),
		zeroValue: zeroValue,
		k2str:     k2str,
	}
}

func (s *KVCache[K, V]) SetDefault(k K, v V) {
	s.c.SetDefault(s.k2str(k), v)
}

func (s *KVCache[K, V]) Set(k K, v V, d time.Duration) {
	s.c.Set(s.k2str(k), v, d)
}

func (s *KVCache[K, V]) Get(k K) (zero V) {
	v, found := s.c.Get(s.k2str(k))
	if !found {
		return s.zeroValue
	}
	return v.(V)
}

func (s *KVCache[K, V]) Delete(k K) {
	s.c.Delete(s.k2str(k))
}

func (s *KVCache[K, V]) ForEach(f func(k string, v V)) {
	for k, v := range s.c.Items() {
		f(k, v.Object.(V))
	}
}

func (s *KVCache[K, V]) Count() int {
	return s.c.ItemCount()
}
