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
	&ResSuccess{},
	&ResFail{},

	&Ping{},
	&Pong{},

	&ReqIdentity{},
	&ResIdentity{},

	&ReqLobbyView{},
	&ResLobbyView{},

	&ReqCreateTable{},
	&ResCreateTable{},

	&ReqJoinTable{},
	&ReqLeaveTable{},

	&ReqGameAction{},
	&ResGameAction{},

	&ReqGameFullStatus{},
	&ResGameFullStatus{},

	&ReqReadyStart{},
	&ReqKickOutTable{},
}

var (
	prototypeOpMap = make(map[reflect.Type]int32)
	opPrototypeMap = make(map[int32]reflect.Type) // TODO array
	opProtoNameMap = make(map[int32][2]string)
	protoNameOpMap = make(map[string]int32)
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
		protoNameOpMap[pkg+"."+name] = op + OpOffset
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
func GetOpNameMap() map[string]any {
	opSuccess, _ := GetProtoOp(&ResSuccess{})
	oPFail, _ := GetProtoOp(&ResFail{})
	front := make(map[string]any, 4)

	front["offset"] = OpOffset
	front["opSuccess"] = opSuccess
	front["opFail"] = oPFail
	front["opPathMap"] = opProtoNameMap
	front["nameOpMap"] = protoNameOpMap
	return front
}
