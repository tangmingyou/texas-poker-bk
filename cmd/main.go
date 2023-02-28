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
	//
	//q := collect.NewDelayQueue(func(data int, now time.Time) {
	//	fmt.Println(data, now)
	//	if data == times-1 {
	//		wait.Done()
	//	}
	//})
	//for i := 0; i < times; i++ {
	//	key := q.Add(time.Second*time.Duration(i), i)
	//	if i%5 == 0 {
	//		go func(k int64, idx int) {
	//			<-time.After(time.Second * 3)
	//			q.Cancel(k)
	//			fmt.Println("cancel", idx, k)
	//		}(key, i)
	//	}
	//}
	//
	//wait.Wait()
}
