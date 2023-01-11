package server

import (
	"github.com/golang/protobuf/proto"
	"texas-poker-bk/message"

	"texas-poker-bk/internal/session"
)

func HandleNetClientMsg[T proto.Message](msg T, f func(session.NetClient, T)) {

}

func HandleNetAccountMsg[T proto.Message](msg T, f func(session.NetAccount, T)) {

}

func HandleNetPlayerMsg[T proto.Message](msg T, f func(session.Player, T)) {

}

func init() {
	HandleNetClientMsg(&message.ReqIdentity{}, func(client session.NetClient, msg *message.ReqIdentity) {

	})
}
