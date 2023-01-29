package vo

import "texas-poker-bk/internal/game"

type TableVO struct {
	TableNo    int32       // 牌桌编号
	RoundTimes int32       // 回合次数
	Stage      game.Stage  // 游戏阶段
	Players    []*PlayerVO // 玩家
	Robots     []*RobotVO  // 机器人
}
