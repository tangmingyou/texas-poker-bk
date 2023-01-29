package game

// Player 游戏玩家
type Player struct {
	Id       int64
	Username string
	Avatar   string
	cards    [2]*Card // 手牌
	chip     int      // 玩家筹码

}

func NewPlayer() *Player {
	return &Player{}
}
