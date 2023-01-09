package server

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"texas-poker-bk/internal/model"
	"texas-poker-bk/internal/subject"
	"time"
)

func Upgrade(ctx *gin.Context) {
	conn, err := upgradeWs(ctx.Writer, ctx.Request)
	if err != nil {
		fmt.Println(err)
		http.Error(ctx.Writer, "Not a websocket handshake", 400)
		return
	}
	client := subject.NewNetClient(conn)

	go handleNetClient(client)
}

func upgradeWs(resWriter http.ResponseWriter, req *http.Request) (*websocket.Conn, error) {
	upgrader := websocket.Upgrader{
		ReadBufferSize:   1024,
		WriteBufferSize:  1024,
		HandshakeTimeout: 3 * time.Second,
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}
	return upgrader.Upgrade(resWriter, req, nil)
}

// 处理新建的websocket
func handleNetClient(client *subject.NetClient) {
	//defer (func() {
	//	client.Close("conn finish")
	//})()

	// TODO 1分钟后过期
	for {
		// 阻塞读取消息
		_, bytes, err := client.Conn.ReadMessage()
		if err != nil {
			// 读失败
			log.Println("ReadMessage", err)
			client.Close("read conn err:" + err.Error())
			return
		}
		msg := &model.Message{}

		err = json.Unmarshal(bytes, msg)
		if err != nil {
			log.Println("反序列化json消息失败", err)
			continue
		}

		// TODO 认证消息(return -> account msg route)
		switch msg.T {
		case "identify":
			param := &model.Identity{}
			_ = json.Unmarshal(msg.D, param)
		default:
			client.Close("wrong message")
		}
		// TODO other,timeout -> close

	}

}

// handleIdentity TODO 通过 token 认证连接的身份
func handleIdentity(identity *model.Identity, client *subject.NetClient) {

}
