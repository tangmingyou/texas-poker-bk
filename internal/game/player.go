package game

import (
	"sync"
	"texas-poker-bk/internal/letter"
)

// Player 游戏玩家
type Player struct {
	Id       int64
	Username string
	Avatar   string
	Cards    [2]*Card // 手牌
	Chip     int32    // 玩家筹码
	Status   int32    // 状态: 1待准备开始,2已准备开始,3等待其他玩家动作,4小盲注跟注, [5待大盲注,5待小盲注,] 6待跟注,7已弃牌

	GameTable   *Table // 当前牌桌
	ProtoWriter letter.ProtoWriter
	Lock        *sync.Mutex
}

func (p *Player) Init() {
	p.Lock = new(sync.Mutex)
}
