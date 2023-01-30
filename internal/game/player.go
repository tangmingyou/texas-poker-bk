package game

// Player 游戏玩家
type Player struct {
	Id       int64
	Username string
	Avatar   string
	Cards    [2]*Card // 手牌
	Chip     int      // 玩家筹码
	Status   int32    // 状态: 1待准备开始,2已准备开始,3等待其他玩家动作,4待大盲注,5待小盲注,6待跟注,7已弃
}

func NewPlayer() *Player {
	return &Player{}
}
