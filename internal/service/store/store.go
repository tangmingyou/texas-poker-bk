package store

import (
	"errors"
	"fmt"
	"sync"
	"sync/atomic"
	"texas-poker-bk/internal/game"
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
