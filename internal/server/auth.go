package server

import (
	"encoding/base64"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"net/http"
	"texas-poker-bk/tool/security"
)

var (
	SubjectKey = "auth:subject"
	sc         = &scEtc{} // 加密配置
)

// Subject 认证对象
type Subject struct {
	Id   int64  `json:"id,omitempty"`   // 用户id
	Name string `json:"name,omitempty"` // 用户名
	Time int64  `json:"time,omitempty"` // 生成时间戳
}

type scEtc struct {
	securityKey string
	keyBytes    []byte
}

func init() {
	sc.securityKey = "9Nz3Y6DES3msAFndz4QsJAECUIFkf+KKaRa+jRnNALk="
	keyBytes, err := base64.URLEncoding.DecodeString(sc.securityKey)
	if err != nil {
		panic(err)
	}
	sc.keyBytes = keyBytes
}

// SubjectAuthFilter 认证过滤器
func SubjectAuthFilter(ctx *gin.Context) {
	auth := ctx.GetHeader("Authorization")
	if auth == "" {
		// TODO config ignore urls
		//if isIgnoreUrl(ctx.Request.URL.Path) {
		//	return
		//}
		ctx.JSON(http.StatusUnauthorized, gin.H{"msg": "请登录后进行操作"})
		ctx.Abort()
		return
	}

	defer func() {
		// 捕获aes解析错误
		if r := recover(); r != nil {
			ctx.JSON(http.StatusUnauthorized, gin.H{"msg": "认证失败，请重新登录"})
			ctx.Abort()
		}
	}()
	// TODO 这里返回 error，不然后捕获后续执行 handler 的 panic
	subject := DecodeSubject(auth)
	ctx.Set(SubjectKey, subject)
}

// EncodeSubject 对subject对象aesCBC加密并返回base64Std编码的 token
// subject 客户端对象
func EncodeSubject(subject *Subject) string {
	bytes, err := json.Marshal(subject)
	if err != nil {
		panic(err)
	}
	encode := security.EncryptAesCBC(bytes, sc.keyBytes)
	return base64.URLEncoding.EncodeToString(encode)
}

// DecodeSubject 解码并解密token返回subject对象
// auth base64Std 编码的 token
func DecodeSubject(auth string) *Subject {
	bytes, err := base64.URLEncoding.DecodeString(auth)
	if err != nil {
		panic(err)
	}
	decode := security.DecryptAesCBC(bytes, sc.keyBytes)
	subject := &Subject{}
	err = json.Unmarshal(decode, subject)
	if err != nil {
		panic(err)
	}
	return subject
}

// GetSubject 从请求上下文中获取客户端对象, 请求经过了认证过滤器
func GetSubject(ctx *gin.Context) *Subject {
	subject, exists := ctx.Get(SubjectKey)
	if !exists {
		return nil
	}
	return subject.(*Subject)
}
