package api

import (
	"errors"
	"fmt"
	"github.com/golang/protobuf/proto"
	"reflect"
	"strings"
)

const OpOffset int32 = 13578

// 注册消息类型
var protoInstances = []proto.Message{
	&ProtoWrap{},
	&Ping{},
	&Pong{},
	&ReqIdentity{},
	&ResIdentity{},
}

var (
	prototypeOpMap = make(map[reflect.Type]int32)
	opPrototypeMap = make(map[int32]reflect.Type) // TODO array
	opProtoNameMap = make(map[int32][2]string)
	// opInstanceMap  = make(map[int]any)
)

func init() {
	for i, defaultInstance := range protoInstances {
		op := int32(i)
		t := reflect.TypeOf(defaultInstance)
		prototypeOpMap[t] = op + OpOffset
		opPrototypeMap[op] = t
		// opInstanceMap[i] = defaultInstance

		pkg := t.Elem().PkgPath()
		idx := strings.LastIndex(pkg, "/")
		if idx != -1 {
			pkg = pkg[idx+1:]
		}
		name := t.Elem().Name()
		opProtoNameMap[op+OpOffset] = [2]string{pkg, name}
	}
}

func GetProtoOp(msg any) (int32, error) {
	t := reflect.TypeOf(msg)
	op := prototypeOpMap[t]
	if op == 0 {
		return 0, errors.New("not register type " + t.String())
	}
	return op, nil
}

func NewProtoInstance(op int32) (proto.Message, error) {
	prototype := opPrototypeMap[op-OpOffset]
	if prototype == nil {
		return nil, errors.New(fmt.Sprintf("op :%d not registry!", op))
	}
	val := reflect.New(prototype.Elem())
	return val.Interface().(proto.Message), nil
}

// GetOpNameMap 获取编号和消息
func GetOpNameMap() map[int32][2]string {
	return opProtoNameMap
}
