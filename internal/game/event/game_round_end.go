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
	table.PlayersLock.Lock()
	defer table.PlayersLock.Unlock()

	notice := true
	for i, player := range table.Players {
		if player == nil {
			continue
		}
		if !player.Client.IsOnline() {
			// 踢了
			table.Players[i] = nil
			// 结算玩家金额
			store.NetAccounts.Get(player.Id).SettlePlayerChip()
			// 被踢玩家消息
			// player.Client.Write(&api.ResKickOutTable{})

			// 该离线玩家是房主, 房主给到下个位置玩家
			if table.MasterId == player.Id {
				nextMasterPos := table.NextPlayerPos(i)
				if nextMasterPos == i {
					// 没有玩家了, 解散牌桌
					notice = false
					table.Stage = 9
					game.LobbyTables.Delete(player.GameTable.TableNo)
					return
				}
				table.MasterId = table.Players[nextMasterPos].Id
			}
		}
	}
	// 通知牌桌所有玩家
	if notice {
		table.NoticeGameFullStatus()
	}
}
