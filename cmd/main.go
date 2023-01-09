package main

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"encoding/json"
	"flag"
	"fmt"
	"texas-poker-bk/internal/model"
	"time"
)

var confPath string

func init() {
	flag.StringVar(&confPath, "conf", "comet-example.toml", "default config path.")
}

func main() {
	// testRsa()

}

func testToml() {

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
	identity := &model.Identity{Token: "12312312asahjasd"}
	bytes, _ := json.Marshal(identity)

	// msg: int32:route:msg
	msg := &model.Message{T: "identity", Ms: time.Now().UnixMilli(), D: bytes}
	b, _ := json.Marshal(msg)

	fmt.Println(msg)
	fmt.Println(b)
}

func codecMsg(t string, msg any) []byte {
	return nil
}
