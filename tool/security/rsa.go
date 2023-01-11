package security

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"fmt"
)

// https://mp.weixin.qq.com/s/njYAfq0yaCFD2NB6kzmveg

func aa() {

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
		[]byte("super secret api"),
		nil,
	)
	fmt.Println(publicKey)
	fmt.Println(encryptBytes)
}
