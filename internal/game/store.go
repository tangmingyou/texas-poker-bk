package game

import (
	"strconv"
	"sync/atomic"
	"texas-poker-bk/tool/cache"
)

// LobbyTables 存储当前进行中的牌桌
var (
	TableNo     = &atomic.Int32{} // 牌桌编号计数器
	LobbyTables *cache.KVCache[int32, *Table]
)

func init() {
	TableNo = &atomic.Int32{} // 牌桌编号计数器
	TableNo.Store(10000)
	
	var tableZeroValue *Table = nil
	LobbyTables = cache.NewKVCache(tableZeroValue, func(k int32) string {
		return strconv.Itoa(int(k))
	})
}
