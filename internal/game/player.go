package game

import (
	"sync"
	"texas-poker-bk/internal/letter"
)

// Player 游戏玩家
type Player struct {
	PosIndex int // 座位索引
	Id       int64
	Username string
	Avatar   string

	Cards         [2]*Card // 手牌
	Chip          int32    // 玩家筹码
	RoundChip     int32    // 该回合已下注筹码
	Status        int32    // 状态: 1待准备开始,2已准备开始,3等待其他玩家动作,4第一回合小盲注跟注, [5待大盲注,5待小盲注,] 6待跟注,7已弃牌
	LastStatus    int32    // 变化前一个状态
	BetOpts       []int32  // status=[4,6]时下注可操作按钮: 1跟注,2加注(-[0]+),3All-In,4弃牌,5过牌
	BetMin        int32    // 最低下注额
	BetMax        int32    // 最高下注额 -1不限
	RoundBetTimes int32    // 当前回合下注次数
	Hand          *Hand    // 手牌牌型

	GameTable   *Table // 当前牌桌
	ProtoWriter letter.ProtoWriter
	Lock        *sync.Mutex
	StatusLock  *sync.Mutex
}

func (p *Player) Init() {
	p.Lock = new(sync.Mutex)
	p.StatusLock = new(sync.Mutex)
}

// RoundInit 下一回合初始化
func (p *Player) RoundInit() {
	p.RoundChip = 0
}

func (p *Player) SetStatus(status int32) {
	p.StatusLock.Lock()
	defer p.StatusLock.Unlock()

	p.LastStatus = p.Status
	p.Status = status
}
