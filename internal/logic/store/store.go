package store

import (
	"strconv"
	"texas-poker-bk/internal/session"
	"texas-poker-bk/tool/cache"
)

var (
	//TableNo *atomic.Int32

	// LobbyTables 存储当前进行中的牌桌
	//LobbyTables *cache.KVCache[int32, *game.Table]

	// NetAccounts 存储一下在线用户, TODO 连接终端,未在牌局或牌局未开始中回收账号,机器人代打后回收账号
	NetAccounts *cache.KVCache[int64, *session.NetAccount]

	// TokenVersions 存储token版本号,登录时+1,一个账户同一时间只允许一个token有效
	TokenVersions *cache.KVCache[int64, int32]
)

func init() {
	//TableNo = &atomic.Int32{} // 牌桌编号计数器

	//var tableZeroValue *game.Table = nil
	//LobbyTables = cache.NewKVCache(tableZeroValue, func(k int32) string {
	//	return strconv.Itoa(int(k))
	//})

	var accountZeroValue *session.NetAccount = nil
	NetAccounts = cache.NewKVCache(accountZeroValue, func(k int64) string {
		return strconv.FormatInt(k, 10)
	})

	TokenVersions = cache.NewKVCache(int32(-1), func(k int64) string {
		return strconv.FormatInt(k, 10)
	})
}
