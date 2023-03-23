package letter

import "github.com/golang/protobuf/proto"

type ProtoClient interface {
	IsOnline() bool
	Write(message proto.Message)
}
