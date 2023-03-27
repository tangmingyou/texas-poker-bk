package server

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/conf"
	"texas-poker-bk/internal/service/event"
	"texas-poker-bk/internal/session"
	"texas-poker-bk/tool/ip"
	"time"
)

var (
	machineHost string
	serverAddr  string
)

func init() {
	machineHost = ip.InternalIP()
	if conf.Conf.Http.Host != "" {
		machineHost = conf.Conf.Http.Host
	}
	serverAddr = fmt.Sprintf("%s:%d", machineHost, conf.Conf.Http.Port)
}

// RouteWs 返回 websocket 路由地址
func RouteWs(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{"data": gin.H{
		"wsAddr": serverAddr,
	}})
}

func Upgrade(ctx *gin.Context) {
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

const (
	// Time allowed to write a message to the peer.
	writeWait = 10 * time.Second

	// Time allowed to read the next pong message from the peer.
	pongWait = 60 * time.Second

	// Send pings to peer with this period. Must be less than pongWait.
	pingPeriod = (pongWait * 9) / 10

	// Maximum message size allowed from peer.
	maxMessageSize = 512
)

// 处理新建的websocket
func handleNetClient(client *session.NetClient) {
	defer func() {
		// 捕获其他错误
		if r := recover(); r != nil {
			fmt.Println("recover error: ", r)
			client.Write(&api.ResFail{Code: 500, Msg: r.(error).Error()})
		}
	}()
	defer func() {
		if client.Account != nil {
			client.Online.Store(false)
			event.OfflineWatcher.Publish(client.Account.Id, true)
		}
	}()
	// https://github.com/gorilla/websocket/blob/a68708917c6a4f06314ab4e52493cc61359c9d42/examples/chat/conn.go#L50
	client.Conn.SetReadLimit(maxMessageSize)
	// TODO readDeadLine 读取超时后关闭连接
	// err := client.Conn.SetReadDeadline(time.Now().Delay(pongWait))
	//if err != nil {
	//	log.Printf("set deadline error: %v", err)
	//	return
	//}
	client.Conn.SetPongHandler(func(string) error {
		return client.Conn.SetReadDeadline(time.Now().Add(pongWait))
	})

	// TODO 未认证连接30s后过期
	for {
		// 阻塞读取消息
		_, bytes, err := client.Conn.ReadMessage()
		if err != nil {
			// websocket.IsCloseError(err, websocket.CloseGoingAway) TODO 连接关闭，进行中游戏处理等逻辑
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway) {
				log.Printf("error: %v", err)
			} else {
				// 读失败
				log.Printf("ReadMessage error: %T, %v", err, err)
			}
			client.Write(&api.ResFail{Msg: "消息读失败:" + err.Error()})
			client.Close("ws read err: " + err.Error())
			return
		}

		wrap := &api.ProtoWrap{}
		err = proto.Unmarshal(bytes, wrap)
		if err != nil {
			client.Write(&api.ResFail{Msg: "消息解析失败:" + err.Error()})
			client.Close("api unmarshal fail! " + err.Error())
			return
		}
		msg, err := api.NewProtoInstance(wrap.Op)
		if err != nil {
			client.WriteSeq(false, wrap.Seq, wrap.ReqMs, &api.ResFail{Msg: "消息体解析失败_1:" + err.Error()})
			client.Close(err.Error())
			return
		}
		err = proto.Unmarshal(wrap.Body, msg)
		if err != nil {
			client.WriteSeq(false, wrap.Seq, wrap.ReqMs, &api.ResFail{Msg: "消息体解析失败_2:" + err.Error()})
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
			client.WriteSeq(false, wrap.Seq, wrap.ReqMs, &api.ResFail{Msg: resErr.Error()})
			return
		}
		if res != nil {
			// 响应消息
			client.WriteSeq(true, wrap.Seq, wrap.ReqMs, res)
		}
		if !called {
			// log not found handler wrap.Op
			fmt.Printf("not found handler for op %d, msg: %v", wrap.Op, msg)
		}
	}

}
