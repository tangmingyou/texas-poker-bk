package session

import (
	"github.com/gorilla/websocket"
	"log"
)

// NetClient 长连接客户端
type NetClient struct {
	Id   int64
	Conn *websocket.Conn
}

func (c *NetClient) Close(reason string) {
	err := c.Conn.Close()
	if err != nil {
		log.Println("Close Error", err)
	}
}

func NewNetClient(conn *websocket.Conn) *NetClient {
	return &NetClient{
		Conn: conn,
	}
}
