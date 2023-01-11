package main

import (
	"texas-poker-bk/internal/conf"
	"texas-poker-bk/internal/server"
)

func startServer() {
	httpServer := server.NewServer()
	err := httpServer.Run(conf.Conf.Http.Addr)
	if err != nil {
		panic(err)
	}
}

func main() {
	startServer()

}
