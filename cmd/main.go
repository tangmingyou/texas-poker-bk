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
	//wait.Wait()

	//wait := make(chan bool, 1)
	//times := 100
	//counter := atomic.Int32{}
	//counter.Store(int32(times))
	////var canceler *async.Canceler[int32]
	//var counters [10]*atomic.Int32
	//
	//delayer := async.NewScheduleQueue(time.Second, 32, func(index int32, now time.Time) int32 {
	//	counters[index%100].Add(1)
	//	fmt.Println(now.Format("2006-01-02 15:04:05.9999"), index, index%100, counters[index%100].Load())
	//	if index == 10000 && counters[index%100].Load() == 1000 {
	//		wait <- true
	//	}
	//	return index
	//})
	//for i := 0; i < 10; i++ {
	//	counter := &atomic.Int32{}
	//	counters[i] = counter
	//	for j := 1; j <= 100; j++ {
	//		delayer.Schedule(time.Duration(i+1)*time.Second, int32(i+j*100))
	//	}
	//}
	//
	//<-wait
}
