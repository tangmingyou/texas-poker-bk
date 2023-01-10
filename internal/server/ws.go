package server

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"texas-poker-bk/internal/model/message"
	"texas-poker-bk/internal/service"
	"texas-poker-bk/internal/session"
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
		msg := &message.Message{}

		err = json.Unmarshal(bytes, msg)
		if err != nil {
			log.Println("反序列化json消息失败", err)
			continue
		}

		// 认证消息(return -> account message route)
		switch msg.T {
		case "identify":
			param := &message.ReqIdentity{}
			_ = json.Unmarshal(msg.D, param)
			subject, err := service.DecodeSubject(param.Token)
			if err != nil {
				res := message.NewResFail(err.Error())
				resBytes, _ := json.Marshal(res)
				_ = client.Conn.WriteMessage(websocket.TextMessage, resBytes)
				// 认证失败关闭连接
				client.Close("authorization fail!")
				return
			}

			fmt.Printf("subject: %v", subject)

		default:
			client.Close("wrong message")
		}
		// TODO other,timeout -> close

	}

}

// handleIdentity TODO 通过 token 认证连接的身份
func handleIdentity(identity *message.ReqIdentity, client *session.NetClient) {

}
