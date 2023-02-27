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
	//startServer()
	ms := time.Now().UnixMilli()
	now := time.Date(2020, 1, 1, 0, 0, 0, 0, time.UTC)

	fmt.Println(ms)
	fmt.Println(ms << 22)
	fmt.Println(ms - now.UnixMilli())
	key := (ms-now.UnixMilli())<<22 + 138
	fmt.Println(key >> 22)
	fmt.Println(key << 42 >> 42)

}
