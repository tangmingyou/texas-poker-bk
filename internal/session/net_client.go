package session

import (
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"log"
	"texas-poker-bk/api"
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
		return
	}
	bytes, err := proto.Marshal(msg)
	wrap := &api.ProtoWrap{Ver: 1, Op: op, Seq: seq, Success: success, Body: bytes}
	wrapBytes, err := proto.Marshal(wrap)
	err = c.Conn.WriteMessage(websocket.BinaryMessage, wrapBytes)
}

func NewNetClient(conn *websocket.Conn) *NetClient {
	return &NetClient{
		Conn: conn,
	}
}
