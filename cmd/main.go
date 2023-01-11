package main

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"encoding/json"
	"fmt"
	"github.com/golang/protobuf/proto"
	"reflect"
	"texas-poker-bk/internal/conf"
	message2 "texas-poker-bk/internal/message"
	"texas-poker-bk/internal/server"
	"texas-poker-bk/message"
	"time"
)

func startServer() {
	httpServer := server.NewServer()
	err := httpServer.Run(conf.Conf.Http.Addr)
	if err != nil {
		panic(err)
	}
}

func main() {
	// startServer()

	// testRsa()

	// testProto()

	testProtoReflect()
}

func handleProto(msg proto.GeneratedMessage) {
	proto := msg.(message.Proto)
	fmt.Println(proto.GetOp())
}

func handle[T proto.Message](msg T, f func(T)) {
	// TODO registry handler
	f(msg)
}

func testProtoReflect() {
	msg := &message.Proto{Ver: 1, Op: 1, Seq: 1, Body: []byte("sunshine")}
	bytes, _ := proto.Marshal(msg)

	// TODO 通过 msgType 定位 handler
	handle(msg, func(msg *message.Proto) {
		fmt.Println("call:" + msg.String())
	})

	op, _ := message.GetProtoOp(msg)
	fmt.Println(op)

	instance, _ := message.NewProtoInstance(op)
	err := proto.Unmarshal(bytes, instance)
	fmt.Println(err)
	fmt.Println(instance)
	fmt.Println(reflect.TypeOf(instance))
}

// op(int) -> decode(proto)
func testProto() {
	msg1 := &message.Proto{Ver: 1, Op: 1, Seq: 1, Body: []byte("sunshine")}
	handleProto(msg1)

	bytes, _ := proto.Marshal(msg1)

	type1 := reflect.TypeOf(msg1)

	msg2 := &message.Proto{Ver: 1, Op: 1, Seq: 1, Body: bytes}
	bytes, _ = proto.Marshal(msg2)
	fmt.Println(type1, type1 == reflect.TypeOf(msg2))

	fmt.Println(bytes)
	fmt.Println(msg2.String())

	decode := &message.Proto{}
	_ = proto.Unmarshal(bytes, decode)
	fmt.Println(decode)
	_ = proto.Unmarshal(decode.Body, decode)
	fmt.Println(decode)
}

func testRsa() {
	privateKey, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		panic(err)
	}
	publicKey := privateKey.PublicKey
	encryptBytes, err := rsa.EncryptOAEP(
		sha256.New(),
		rand.Reader,
		&publicKey,
		[]byte("super secret message"),
		nil,
	)
	fmt.Println(publicKey)
	fmt.Println(encryptBytes)
}

func testMsgCodec() {
	identity := &message2.ReqIdentity{Token: "12312312asahjasd"}
	bytes, _ := json.Marshal(identity)

	// message: int32:route:message
	msg := &message2.Message{T: "identity", Ms: time.Now().UnixMilli(), D: bytes}
	b, _ := json.Marshal(msg)

	fmt.Println(msg)
	fmt.Println(b)
}

func codecMsg(t string, msg any) []byte {
	return nil
}
