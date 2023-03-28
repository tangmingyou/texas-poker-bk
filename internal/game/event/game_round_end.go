package event

import (
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/logic/store"
	"texas-poker-bk/tool/collect"
	"texas-poker-bk/tool/watcher"
)

// 回合结束时，自动清除离线玩家

var (
	GameRoundEndWatcher *watcher.Watcher[int32, bool]
)

func init() {
	GameRoundEndWatcher = watcher.NewWatcher(32, handleGameRoundEnd)
	go GameRoundEndWatcher.Run()
}

func handleGameRoundEnd(e *watcher.Event[int32, bool]) {
	table := game.LobbyTables.Get(e.Publisher)
	if table == nil || collect.NotIn(table.Stage, 1, 7) {
		return
	}
	table.Lock.Lock()
	defer table.Lock.Unlock()

	for _, player := range table.Players {
		if player == nil {
			continue
		}
		// 移除牌桌上所有离线玩家
		if !player.Client.IsOnline() {
			// 踢了
			found, _ := table.RemovePlayer(player.Id)
			if found {
				// 结算玩家金额
				store.NetAccounts.Get(player.Id).SettlePlayerChip()
			}
		}
	}
	// 通知牌桌所有玩家
	if 0 < table.PlayerCount() {
		table.NoticeGameFullStatus()
	}
}
