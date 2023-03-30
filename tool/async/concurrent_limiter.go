package async

import (
	"fmt"
	"runtime/debug"
)

type ConcurrentLimiter struct {
	concurrent int
	buffer     chan func()
	stop       chan bool
}

func NewConcurrentLimiter(concurrent int, buffer int) *ConcurrentLimiter {
	limiter := &ConcurrentLimiter{
		concurrent: concurrent,
		buffer:     make(chan func(), buffer),
		stop:       make(chan bool, concurrent),
	}
	limiter.init()
	return limiter
}

func (c *ConcurrentLimiter) init() {
	// 起 n 个 goroutine 循环监测 task chan
	for i := 0; i < c.concurrent; i++ {
		go func() {
			for {
				select {
				case task := <-c.buffer:
					func() {
						defer func() {
							if err := recover(); err != nil {
								fmt.Printf("consumer handler error: %v \n", err)
								// 输出堆栈信息
								fmt.Println(string(debug.Stack()))
							}
						}()
						// 执行任务
						task()
					}()
				// 停止执行
				case <-c.stop:
					return
				}
			}
		}()
	}
}

func (c *ConcurrentLimiter) Run(f func()) {
	c.buffer <- f
}

func (c *ConcurrentLimiter) StopAll() chan func() {
	for i := 0; i < c.concurrent; i++ {
		c.stop <- true
	}
	return c.buffer
}
