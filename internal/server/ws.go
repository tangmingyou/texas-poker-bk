package server

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"texas-poker-bk/internal/service"
	"texas-poker-bk/internal/session"
	"texas-poker-bk/message"
	"time"
)

func Upgrade(ctx *gin.Context) {
	token, exists := ctx.GetQuery("t")
	if !exists {
		ctx.JSON(http.StatusUnauthorized, gin.H{"message": "unauth"})
		return
	}
	subject, err := service.DecodeSubject(token)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"message": "token failed"})
		return
	}

	conn, err := upgradeWs(ctx.Writer, ctx.Request)
	if err != nil {
		fmt.Println(err)
		http.Error(ctx.Writer, "Not a websocket handshake", 400)
		return
	}
	client := session.NewNetClient(conn)

	go handleNetClient(client, subject)
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
func handleNetClient(client *session.NetClient, subject *session.Subject) {
	//defer (func() {
	//	client.Close("conn finish")
	//})()

	//var account *session.NetAccount
	//var player *session.Player

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

		p := &message.Proto{}
		err = proto.Unmarshal(bytes, p)
		if err != nil {
			client.Close("message unmarshal fail! " + err.Error())
			return
		}
		instance, err := message.NewProtoInstance(p.Op)
		if err != nil {
			client.Close(err.Error())
			return
		}
		err = proto.Unmarshal(p.Body, instance)
		if err != nil {
			client.Close("message body unmarshal fail! " + err.Error())
		}
		// TODO msg -> handler

	}

}

// handleIdentity TODO 通过 token 认证连接的身份
//func handleIdentity(identity *message2.ReqIdentity, client *session.NetClient) {
//
//}
