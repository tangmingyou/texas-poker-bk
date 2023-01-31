package game

import (
	"errors"
	"sync"
	"texas-poker-bk/api"
)

type Table struct {
	TableNo    int32 // 牌桌编号
	RoundTimes int32 // 回合次数
	Stage      int32 // 游戏阶段: 1等待玩家准备;2下大盲注;3下小盲注;4发公共牌;5发第四张公共牌,轮流下注;6发第五张公共牌,轮流下注

	chip        int32      // 牌桌当前筹码
	robotChip   int32      // 牌桌当前机器人下注筹码
	dealer      *Dealer    // 发牌员
	publicCards [5]*Dealer // 公共牌

	PlayerNum    int32     // 玩家数
	RobotNum     int32     // 机器人数
	Players      []*Player // 玩家
	Robots       []*Robot
	BigBlindsPos int32 // 大盲注位

	PlayerJoinLock *sync.Mutex
	ChipLock       *sync.Mutex // 桌面筹码更新锁
	// TODO game logs7
}

func (t *Table) JoinPlayer(player *Player) error {
	t.PlayerJoinLock.Lock()
	defer t.PlayerJoinLock.Unlock()
	for i := range t.Players {
		// 找个空位坐下
		if t.Players[i] == nil {
			t.Players[i] = player
			return nil
		}
	}
	return errors.New("牌桌玩家已满")
}

func (t *Table) NoticeGameStatus() {
	gameStatus := &api.ResGameStatus{}
	gameStatus.TableNo = t.TableNo

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
