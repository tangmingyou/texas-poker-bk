package session

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"log"
	"texas-poker-bk/api"
	"time"
)

// NetClient 长连接客户端
type NetClient struct {
	Id      int64
	Conn    *websocket.Conn
	Account *NetAccount
}

func (c *NetClient) Close(reason string) {
	err := c.Conn.Close()
	if err != nil {
		log.Println("Close Error", err)
	}
}

func (c *NetClient) Write(msg proto.Message) {
	c.WriteSeq(true, 0, msg)
}

func (c *NetClient) WriteSeq(success bool, seq int32, msg proto.Message) {
	op, err := api.GetProtoOp(msg)
	if err != nil {
		fmt.Println("write msg match op err:", err)
		return
	}
	bytes, err := proto.Marshal(msg)
	wrap := &api.ProtoWrap{Ver: 1, Op: op, Seq: seq, Success: success, Body: bytes}
	wrapBytes, err := proto.Marshal(wrap)
	// TODO 看文档 SetWriteDeadline
	err = c.Conn.SetWriteDeadline(time.Now().Add(time.Millisecond * 100))
	if err != nil {
		fmt.Println("set dead line err:", err)
		return
	}
	err = c.Conn.WriteMessage(websocket.BinaryMessage, wrapBytes)
	if err != nil {
		fmt.Println("write msg err:", err)
	}
}

func NewNetClient(conn *websocket.Conn) *NetClient {
	return &NetClient{
		Conn: conn,
	}
}
