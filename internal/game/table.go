package game

type Table struct {
	TableNo    int32 // 牌桌编号
	roundTimes int   // 回合次数
	stage      Stage // 游戏阶段

	chip        int        // 牌桌当前筹码
	robotChip   int        // 牌桌当前机器人下注筹码
	dealer      *Dealer    // 发牌员
	publicCards [5]*Dealer // 公共牌

	PlayerNum    int32     // 玩家数
	RobotNum     int32     // 机器人数
	Players      []*Player // 玩家
	Robots       []*Robot
	bigBlindsPos int // 大盲注位

	// TODO game logs
}

type Stage int

func (s *Stage) String() string {
	return stageNames[*s]
}

// 游戏阶段名称
var stageNames = []string{"Stage00WaitBegin", "Stage10Perflop", "Stage20Flop", "Stage30Turn", "Stage40River"}

// 游戏阶段
const (
	Stage00WaitBegin Stage = iota // 等待游戏开始
	Stage10Perflop   Stage = iota // 下大小盲注，然后没人发2张底牌，大盲注后面第一个玩家跟注、加注或放弃，依次顺时针表态
	Stage20Flop      Stage = iota // 发三张公牌，由小盲注开始顺时针表态
	Stage30Turn      Stage = iota // 发第四张公共牌，由小盲注开始顺时针表态
	Stage40River     Stage = iota // 发第五张牌，由小盲注开始顺时针表态，然后亮牌比大小
)
