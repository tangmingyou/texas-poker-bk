package game

import (
	"sync"
	"texas-poker-bk/internal/letter"
)

var (
	emptyOpts = make([]int32, 0)
)

// Player 游戏玩家
type Player struct {
	PosIndex int // 座位索引
	Id       int64
	Username string
	Avatar   string

	Cards               [2]*Card // 手牌
	Chip                int32    // 玩家筹码
	TotalBetChip        int32    // 本次游戏已下注筹码
	Status              int32    // 状态: 1待准备开始,2已准备开始,3等待其他玩家动作,[4第一回合小盲注跟注,5待大盲注,5待小盲注,] 6待跟注,7已弃牌,8结算中
	BetOpts             []int32  // status=[4,6]时下注可操作按钮: (-2大盲注,-1小盲注) 1跟注,2加注(-[0]+),3All-In,4弃牌,5过牌
	BetMin              int32    // 最低下注额
	BetMax              int32    // 最高下注额 -1不限
	RoundBetTimes       int32    // 当前回合下注次数
	Hand                *Hand    // 手牌牌型
	RoundCheckRaiseOnly bool     // 该回合仅过牌下注

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
	p.SetStatus(1)
	p.BetOpts = emptyOpts
	p.Hand = nil
	p.BetMin = 0
	p.BetMax = 0
	p.RoundBetTimes = 0
	p.TotalBetChip = 0
	p.Cards[0] = nil
	p.Cards[1] = nil
	p.RoundCheckRaiseOnly = false
}

// WaitBet 将状态置为:3等待下注
func (p *Player) WaitBet() {
	if p.Status == 7 {
		return
	}
	p.SetStatus(3)
	p.BetOpts = emptyOpts
	p.BetMin = 0
	p.BetMax = 0
}

func (p *Player) SetStatus(status int32) {
	p.StatusLock.Lock()
	defer p.StatusLock.Unlock()

	switch status {
	case 1:
		fallthrough
	case 2:
		fallthrough
	case 3: // 等待其他玩家
		fallthrough
	case 7: // 弃牌
		p.BetMin = 0
		p.BetMax = 0
		if len(p.BetOpts) > 0 {
			p.BetOpts = emptyOpts
		}
	}

	p.Status = status
}
