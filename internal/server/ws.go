package server

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/session"
	"time"
)

func Upgrade(ctx *gin.Context) {
	//token, exists := ctx.GetQuery("t")
	//if !exists {
	//	ctx.JSON(http.StatusUnauthorized, gin.H{"api": "unauth"})
	//	return
	//}
	//subject, err := service.DecodeSubject(token)
	//if err != nil {
	//	ctx.JSON(http.StatusUnauthorized, gin.H{"api": "token failed"})
	//	return
	//}

	conn, err := upgradeWs(ctx.Writer, ctx.Request)
	if err != nil {
		fmt.Println(err)
		http.Error(ctx.Writer, "Not a websocket handshake", 400)
		return
	}
	client := session.NewNetClient(conn)

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
func handleNetClient(client *session.NetClient) {
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

		wrap := &api.ProtoWrap{}
		err = proto.Unmarshal(bytes, wrap)
		if err != nil {
			client.Close("api unmarshal fail! " + err.Error())
			return
		}
		msg, err := api.NewProtoInstance(wrap.Op)
		if err != nil {
			client.Close(err.Error())
			return
		}
		err = proto.Unmarshal(wrap.Body, msg)
		if err != nil {
			client.Close("api body unmarshal fail! " + err.Error())
			return
		}
		log.Println(fmt.Sprintf("ws msg: %T{%v}", msg, msg))

		// TODO queue channel -> msg -> handler
		var called bool
		var res proto.Message
		var resErr error
		handleNetClient := NetClientHandlers[wrap.Op]
		if called = handleNetClient != nil; called {
			// 调用 netUser handler
			res, resErr = handleNetClient(client, msg)
		} else {
			// account process
			handlerNetAccount := NetAccountHandlers[wrap.Op]
			if called = handlerNetAccount != nil; called {
				// account 检查连接是否认证
				if client.Account == nil {
					res = &api.ResFail{Code: 401, Msg: "请登录后操作"}
				} else {
					// 调用 account handler
					res, resErr = handlerNetAccount(client.Account, msg)
				}
			} else {
				// player process
				handlerPlayer := PlayerHandlers[wrap.Op]
				if called = handlerPlayer != nil; called {
					// 检查 player 对象，是否加入牌桌
					if client.Account == nil || client.Account.Player == nil {
						res = &api.ResFail{Code: 402, Msg: "请加入牌桌后操作"}
					} else {
						// 调用 player handler
						res, resErr = handlerPlayer(client.Account.Player, msg)
					}
				}
			}
		}
		// 处理请求对应消息响应
		// fmt.Println(called, res, resErr)
		if resErr != nil {
			// 错误消息
			client.WriteSeq(false, wrap.Seq, &api.ResFail{Msg: resErr.Error()})
			return
		}
		if res != nil {
			// 响应消息
			client.WriteSeq(true, wrap.Seq, res)
		}
		if !called {
			// log not found handler wrap.Op
			fmt.Printf("not found handler for op %d, msg: %v", wrap.Op, msg)
		}
	}

}
