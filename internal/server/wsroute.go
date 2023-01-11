package server

import (
	"github.com/golang/protobuf/proto"
	"reflect"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/service"

	"texas-poker-bk/internal/session"
)

var NetClientHandlers = make(map[int32]func(*session.NetClient, proto.Message))
var NetAccountHandlers = make(map[int32]func(*session.NetAccount, proto.Message))
var PlayerHandlers = make(map[int32]func(*session.Player, proto.Message))

func checkExistsTypeHandler(op int32, err error) {
	if err != nil {
		panic(err)
	}
	if NetClientHandlers[op] != nil || NetAccountHandlers[op] != nil || PlayerHandlers[op] != nil {
		ins, _ := api.NewProtoInstance(op)
		panic("duplicate type handler! " + reflect.TypeOf(ins).String())
	}
}

func HandleNetClientMsg[T proto.Message](msg T, f func(*session.NetClient, T)) {
	op, err := api.GetProtoOp(msg)
	checkExistsTypeHandler(op, err)
	NetClientHandlers[op] = func(client *session.NetClient, msg proto.Message) {
		f(client, msg.(T))
	}
}

func HandleNetAccountMsg[T proto.Message](msg T, f func(*session.NetAccount, T)) {
	op, err := api.GetProtoOp(msg)
	checkExistsTypeHandler(op, err)
	NetAccountHandlers[op] = func(account *session.NetAccount, msg proto.Message) {
		f(account, msg.(T))
	}
}

func HandleNetPlayerMsg[T proto.Message](msg T, f func(*session.Player, T)) {
	op, err := api.GetProtoOp(msg)
	checkExistsTypeHandler(op, err)
	PlayerHandlers[op] = func(player *session.Player, msg proto.Message) {
		f(player, msg.(T))
	}
}

func init() {
	HandleNetClientMsg(&api.ReqIdentity{}, func(client *session.NetClient, msg *api.ReqIdentity) {
		subject, err := service.DecodeSubject(msg.Token)
		if err != nil {
			client.Close("authorize failed!")
			return
		}
		account := &session.NetAccount{Id: subject.Id, UserName: subject.Name}
		client.Account = account

		// response
		res := &api.ResIdentity{Status: 200, Msg: "ok"}
		client.Write(res)
	})
}
