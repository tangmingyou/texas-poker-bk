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
}
