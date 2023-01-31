package letter

import "github.com/golang/protobuf/proto"

type ProtoWriter interface {
	Write(message proto.Message)
}
