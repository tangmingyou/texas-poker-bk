package delayer

import (
	"fmt"
	"runtime/debug"
	"texas-poker-bk/tool/async"
	"time"
)

var (
	GameDelayer *async.DelayQueue[func()]
)

func init() {
	GameDelayer = async.NewDelayQueue(time.Second, 128, handleDelayTask)
}

func handleDelayTask(task func(), _ time.Time) {
	if task == nil {
		return
	}
	defer func() {
		if err := recover(); err != nil {
			fmt.Printf("consumer handler error: %v \n", err)
			// 输出堆栈信息
			fmt.Println(string(debug.Stack()))
		}
	}()
	task()
}
