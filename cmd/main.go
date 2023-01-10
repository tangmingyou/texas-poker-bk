package main

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"encoding/json"
	"fmt"
	"texas-poker-bk/internal/conf"
	"texas-poker-bk/internal/model/message"
	"texas-poker-bk/internal/server"
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
	startServer()

	// testRsa()
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
	identity := &message.ReqIdentity{Token: "12312312asahjasd"}
	bytes, _ := json.Marshal(identity)

	// message: int32:route:message
	msg := &message.Message{T: "identity", Ms: time.Now().UnixMilli(), D: bytes}
	b, _ := json.Marshal(msg)

	fmt.Println(msg)
	fmt.Println(b)
}

func codecMsg(t string, msg any) []byte {
	return nil
}
