package main

import (
	"fmt"
	"math/rand"
	"texas-poker-bk/internal/conf"
	"texas-poker-bk/internal/server"
	"time"
)

func startServer() {
	// TODO 真随机数 crypto/rand
	rand.Seed(time.Now().UnixNano())

	httpServer := server.NewServer()
	err := httpServer.Run(fmt.Sprintf(":%d", conf.Conf.Http.Port))
	if err != nil {
		panic(err)
	}
}

func main() {
	startServer()

	//m := treemap.NewWithIntComparator()
	//k, v := m.Min()
	//fmt.Println(k, v)

	//wait := &sync.WaitGroup{}
	//wait.Add(1)
	//
	//times := 100
	//counter := atomic.Int32{}
	//counter.Store(int32(times))
	//
	//q := collect.NewDelayQueue(func(data func(time.Time), now time.Time) {
	//	// fmt.Println(data, now)
	//	data(now)
	//	counter.Add(-1)
	//	if int(counter.Load()) <= 0 {
	//		wait.Done()
	//	}
	//
	//	if counter.Load() == 62 {
	//		panic("test error!!!")
	//	}
	//})
	//for i := 0; i < times; i++ {
	//	key := q.Add(time.Second*time.Duration(i), func(idx int) func(t time.Time) {
	//		return func(t time.Time) {
	//			fmt.Println("handler:", idx, t)
	//		}
	//	}(i))
	//	if i%5 == 0 {
	//		go func(k int64, idx int) {
	//			<-time.After(time.Second * 3)
	//			q.Cancel(k)
	//			fmt.Println("cancel", idx, k)
	//
	//			counter.Add(-1)
	//			if int(counter.Load()) <= 0 {
	//				wait.Done()
	//			}
	//		}(key, i)
	//	}
	//}
	//
	//wait.Wait()
}
