package server

import (
	"github.com/golang/protobuf/proto"
	"reflect"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/service"
	"texas-poker-bk/internal/session"
)

var NetClientHandlers = make(map[int32]func(*session.NetClient, proto.Message) (proto.Message, error))
var NetAccountHandlers = make(map[int32]func(session.NetAccount, proto.Message) (proto.Message, error))
var PlayerHandlers = make(map[int32]func(*session.Player, proto.Message) (proto.Message, error))

func init() {
	// 连接token认证
	HandleNetClientMsg(&api.ReqIdentity{}, func(client *session.NetClient, msg *api.ReqIdentity) (proto.Message, error) {
		subject, err := service.DecodeSubject(msg.Token)
		if err != nil {
			// client.Close("authorize failed!")
			return nil, err
		}
		account := &session.NetAccount{Id: subject.Id, UserName: subject.Name, Avatar: subject.Avatar, Client: client}
		client.Account = account

		// response
		res := &api.ResIdentity{Status: 200, Msg: "ok"}
		// client.Write(res)
		return res, nil
	})
	// 创建桌面
	HandleNetAccountMsg(&api.ReqCreateTable{}, service.CreateNewTable)
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

func HandleNetAccountMsg[T proto.Message](msg T, f func(session.NetAccount, T) (proto.Message, error)) {
	op, err := api.GetProtoOp(msg)
	checkExistsTypeHandler(op, err)
	NetAccountHandlers[op] = func(account session.NetAccount, msg proto.Message) (proto.Message, error) {
		return f(account, msg.(T))
	}
}

func HandleNetPlayerMsg[T proto.Message](msg T, f func(*session.Player, T) (proto.Message, error)) {
	op, err := api.GetProtoOp(msg)
	checkExistsTypeHandler(op, err)
	PlayerHandlers[op] = func(player *session.Player, msg proto.Message) (proto.Message, error) {
		return f(player, msg.(T))
	}
}
