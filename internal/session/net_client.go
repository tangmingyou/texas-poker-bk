package session

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"log"
	"sync"
	"sync/atomic"
	"texas-poker-bk/api"
	"time"
)

// NetClient 长连接客户端
type NetClient struct {
	// Id        int64
	Conn      *websocket.Conn
	Online    *atomic.Bool
	Account   *NetAccount
	WriteLock *sync.Mutex
}

func NewNetClient(conn *websocket.Conn) *NetClient {
	online := &atomic.Bool{}
	online.Store(true)

	return &NetClient{
		Conn:      conn,
		WriteLock: new(sync.Mutex),
		Online:    online,
	}
}

func (c *NetClient) Close(reason string) {
	log.Println("close NetClient reason: ", reason)
	c.Online.Store(false)
	err := c.Conn.Close()
	if err != nil {
		log.Println("Close Error", err)
	}
}

func (c *NetClient) IsOnline() bool {
	return c.Online.Load()
}

func (c *NetClient) Write(msg proto.Message) {
	c.WriteSeq(true, 0, 0, msg)
}

func (c *NetClient) WriteSeq(success bool, seq int32, reqMs int64, msg proto.Message) {
	// 序列化 protobuf 消息
	op, err := api.GetProtoOp(msg)
	if err != nil {
		fmt.Println("write msg match op err:", err, msg.String())
		return
	}
	bytes, err := proto.Marshal(msg)
	wrap := &api.ProtoWrap{Ver: 1, Op: op, Seq: seq, Success: success, ReqMs: reqMs, Body: bytes}
	wrapBytes, err := proto.Marshal(wrap)

	// 向ws客户端写
	c.WriteLock.Lock()
	defer c.WriteLock.Unlock()
	// TODO 看文档 SetWriteDeadline
	err = c.Conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
	if err != nil {
		fmt.Println("set dead line err:", err)
		return
	}
	err = c.Conn.WriteMessage(websocket.BinaryMessage, wrapBytes)
	if err != nil {
		fmt.Println("write msg err:", err)
	}
}
