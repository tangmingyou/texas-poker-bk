package store

import (
	"errors"
	"fmt"
	"sort"
	"sync"
	"sync/atomic"
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/model/vo"
	"texas-poker-bk/tool/collect"
)

var (
	TableNo     *atomic.Int32
	LobbyTables map[int32]*game.Table
	LobbyLock   *sync.Mutex
)

func init() {
	TableNo = &atomic.Int32{}
	LobbyTables = make(map[int32]*game.Table, 16)
	LobbyLock = &sync.Mutex{}
}

func SaveNewTable(table *game.Table) error {
	LobbyLock.Lock()
	defer LobbyLock.Unlock()
	if LobbyTables[table.TableNo] != nil {
		return errors.New(fmt.Sprintf("table no %d exists!", table.TableNo))
	}
	LobbyTables[table.TableNo] = table
	return nil
}

func GetLobbyTablesView() []*vo.TableVO {
	if LobbyTables == nil || len(LobbyTables) == 0 {
		return make([]*vo.TableVO, 0)
	}
	tables := make([]*vo.TableVO, len(LobbyTables))
	idx := 0
	for _, t := range LobbyTables {
		tVO := &vo.TableVO{}
		tVO.TableNo = t.TableNo
		if collect.IsNotEmptySlice(t.Players) {
			tVO.Players = make([]*vo.PlayerVO, len(t.Players))
			for i, player := range t.Players {
				pVO := &vo.PlayerVO{Id: player.Id, Username: player.Username, Avatar: player.Avatar}
				tVO.Players[i] = pVO
			}
		}
		if collect.IsNotEmptySlice(t.Robots) {
			tVO.Robots = make([]*vo.RobotVO, len(t.Robots))
			for i, _ := range t.Robots {
				rVO := &vo.RobotVO{}
				tVO.Robots[i] = rVO
			}
		}

		tables[idx] = tVO
		idx++
	}
	// 牌桌号降序
	sort.Slice(tables, func(i, j int) bool {
		return tables[i].TableNo > tables[j].TableNo
	})
	return tables
}
