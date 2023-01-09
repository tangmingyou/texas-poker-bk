package security

import (
	"bytes"
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"reflect"
)

// 参考：https://www.yisu.com/zixun/696240.html

func TestAes() {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("recover...", r.(error).Error(), reflect.TypeOf(r))
		}
	}()

	// aesKeyStr := GetAesKey256()
	aesKeyStr := "YYNLVy4qZ+WwkyG7r4kUhMfZu6g9e+" // 0uiba5DAgINl8=

	fmt.Println(aesKeyStr)
	key, _ := base64.StdEncoding.DecodeString(aesKeyStr)
	fmt.Println(key)

	text := []byte("you are my sunshine!")
	encrypt := EncryptAesCBC(text, key)
	fmt.Println(encrypt)
	fmt.Println(base64.URLEncoding.EncodeToString(text))

	result := DecryptAesCBC(encrypt, key)
	fmt.Println(string(result))
}

func GetAesKey256() string {
	key := getAesKey(256)
	return base64.StdEncoding.EncodeToString(key)
}

func getAesKey(keySize int) []byte {
	var key = make([]byte, keySize/8)
	_, err := rand.Read(key)
	if err != nil {
		panic(err)
	}
	return key
}

// EncryptAesCBC
// src -> 要加密的原文
// key -> 秘钥, 和加密秘钥相同, 大小为: 8byte
func EncryptAesCBC(src, key []byte) []byte {
	block, err := aes.NewCipher(key)
	if err != nil {
		panic(err)
	}
	blockSize := block.BlockSize()
	// 对最后一个明文分组进行数据填充
	src = pkcs5Padding(src, blockSize)
	// 3.创建一个密码分组为链接模式的，底层使用 DES 加密的 BlockMode 接口
	//   参数 iv 的长度，必须等于 b 的块尺寸
	iv := make([]byte, blockSize, blockSize)
	copy(iv, key)
	blackMode := cipher.NewCBCEncrypter(block, iv)
	// 5.加密连续的数据块
	dst := make([]byte, len(src))
	blackMode.CryptBlocks(dst, src)
	return dst
}

// DecryptAesCBC
// src -> 要解密的密文
// key -> 秘钥, 和加密秘钥相同, 大小为: 8byte
func DecryptAesCBC(src, key []byte) []byte {
	// 1. 创建并返回一个使用DES算法的cipher.Block接口
	block, err := aes.NewCipher(key)
	blockSize := block.BlockSize()
	// 2. 判断是否创建成功
	if err != nil {
		panic(err)
	}
	// 3. 创建一个密码分组为链接模式的, 底层使用DES解密的BlockMode接口
	iv := make([]byte, blockSize, blockSize)
	copy(iv, key)
	blockMode := cipher.NewCBCDecrypter(block, iv)
	// 4. 解密数据
	dst := src
	blockMode.CryptBlocks(src, dst)
	// 5. 去掉最后一组填充的数据
	dst = pkcs5UnPadding(dst)
	// 6. 返回结果
	return dst
}

// PKCS5Padding 使用pks5的方式填充
func pkcs5Padding(ciphertext []byte, blockSize int) []byte {
	// 1. 计算最后一个分组缺多少个字节
	padding := blockSize - (len(ciphertext) % blockSize)
	// 2. 创建一个大小为padding的切片, 每个字节的值为padding
	padText := bytes.Repeat([]byte{byte(padding)}, padding)
	// 3. 将padText添加到原始数据的后边, 将最后一个分组缺少的字节数补齐
	newText := append(ciphertext, padText...)
	return newText
}

// PKCS5UnPadding 删除pks5填充的尾部数据
func pkcs5UnPadding(origData []byte) []byte {
	// 1. 计算数据的总长度
	length := len(origData)
	// 2. 根据填充的字节值得到填充的次数
	number := int(origData[length-1])
	// 3. 将尾部填充的number个字节去掉
	return origData[:(length - number)]
}
