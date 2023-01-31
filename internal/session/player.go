package session

import (
	"sync"
	"texas-poker-bk/internal/game"
)

// Player 玩家: table,balance,(hand card)
type Player struct {
	Account *NetAccount

	Id         int64
	Username   string
	Avatar     string
	Cards      [2]*game.Card // 手牌
	Chip       int           // 玩家筹码
	Status     int32         // 状态: 1待准备开始,2已准备开始,3等待其他玩家动作,4待大盲注,5待小盲注,6待跟注,7已弃
	StatusLock *sync.Mutex
}
