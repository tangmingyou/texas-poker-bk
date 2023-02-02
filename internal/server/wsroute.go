package server

import (
	"github.com/golang/protobuf/proto"
	"reflect"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/service"
	"texas-poker-bk/internal/session"
)

var NetClientHandlers = make(map[int32]func(*session.NetClient, proto.Message) (proto.Message, error))
var NetAccountHandlers = make(map[int32]func(*session.NetAccount, proto.Message) (proto.Message, error))
var PlayerHandlers = make(map[int32]func(*game.Player, proto.Message) (proto.Message, error))

func init() {
	// 连接token认证
	HandleNetClientMsg(&api.ReqIdentity{}, service.HandleReqIdentity)
	// 创建桌面
	HandleNetAccountMsg(&api.ReqCreateTable{}, service.HandleReqCreateTable)
	// 查询所有游戏桌面
	HandleNetAccountMsg(&api.ReqLobbyView{}, service.HandleReqLobbyView)
	// 获取牌桌当前所有状态
	HandleNetPlayerMsg(&api.ReqGameFullStatus{}, service.HandleReqGameFullStatus)
	// 加入桌面
	HandleNetAccountMsg(&api.ReqJoinTable{}, service.HandleJoinTable)

	// 踢人
	HandleNetPlayerMsg(&api.ReqKickOutTable{}, service.HandleReqKickOutTable)
	// 离开房间
	HandleNetPlayerMsg(&api.ReqLeaveTable{}, service.HandleReqLeaveTable)

}

func checkExistsTypeHandler(op int32, err error) {
	if err != nil {
		panic(err)
	}
	if NetClientHandlers[op] != nil || NetAccountHandlers[op] != nil || PlayerHandlers[op] != nil {
		ins, _ := api.NewProtoInstance(op)
		panic("duplicate type handler! " + reflect.TypeOf(ins).String())
	}
}

func HandleNetClientMsg[T proto.Message](msg T, f func(*session.NetClient, T) (proto.Message, error)) {
	op, err := api.GetProtoOp(msg)
	checkExistsTypeHandler(op, err)
	NetClientHandlers[op] = func(client *session.NetClient, msg proto.Message) (proto.Message, error) {
		return f(client, msg.(T))
	}
}

func HandleNetAccountMsg[T proto.Message](msg T, f func(*session.NetAccount, T) (proto.Message, error)) {
	op, err := api.GetProtoOp(msg)
	checkExistsTypeHandler(op, err)
	NetAccountHandlers[op] = func(account *session.NetAccount, msg proto.Message) (proto.Message, error) {
		return f(account, msg.(T))
	}
}

func HandleNetPlayerMsg[T proto.Message](msg T, f func(*game.Player, T) (proto.Message, error)) {
	op, err := api.GetProtoOp(msg)
	checkExistsTypeHandler(op, err)
	PlayerHandlers[op] = func(player *game.Player, msg proto.Message) (proto.Message, error) {
		return f(player, msg.(T))
	}
}
