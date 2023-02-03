package service

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang/protobuf/proto"
	"net/http"
	"sync"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/conf"
	"texas-poker-bk/internal/dao"
	"texas-poker-bk/internal/model/entity"
	"texas-poker-bk/internal/service/store"
	"texas-poker-bk/internal/session"
	"texas-poker-bk/tool/collect"
	"texas-poker-bk/tool/security"
	"time"
)

// http: 登录注册、创建房间
// ws: 大厅、房间、房间状态

var (
	SubjectKey       = "auth:session"
	aesTokenKeyBytes []byte // token aes 加密 key
)

func init() {
	keyBytes, err := base64.StdEncoding.DecodeString(conf.Conf.Auth.AesTokenKey)
	if err != nil {
		panic(err)
	}
	aesTokenKeyBytes = keyBytes
}

// Authorize 登录或注册
func Authorize(ctx *gin.Context) {
	username := ctx.PostForm("username")
	password := ctx.PostForm("password")

	//username := ctx.Param("username")
	//password := ctx.Param("password")
	if username == "" || password == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"msg": "用户名或密码不能为空"})
		return
	}
	user := dao.UserDao.FindUserByName(username)
	if user == nil {
		// 注册
		user = registerUser(username, password)
	} else {
		// 校验密码
		if user.Password != password {
			ctx.JSON(http.StatusUnauthorized, gin.H{"msg": "用户名或密码有误"})
			return
		}
	}

	sub := &session.Subject{Id: user.Id, Name: user.Username, Time: time.Now().UnixMilli()}
	token, err := EncodeSubject(sub)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"msg": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": gin.H{"token": token}})
}

// 注册用户到DB
func registerUser(username string, password string) *entity.User {
	user := &entity.User{
		Username: username,
		Password: password,
		Nickname: username,
		Balance:  conf.Conf.Game.GiftChip,
	}
	// TODO error
	dao.UserDao.DB.Save(user)
	return user
}

// SubjectAuthFilter 认证过滤器
func SubjectAuthFilter(ctx *gin.Context) {

	// 检查是不需要登录的 url
	// ignore auth urls
	if collect.IsNotEmptySlice(conf.Conf.Auth.IgnoreUrl) {
		for _, ignoreUrl := range conf.Conf.Auth.IgnoreUrl {
			if ignoreUrl == ctx.Request.URL.Path {
				return
			}
		}
	}

	auth := ctx.GetHeader("Authorization")
	if auth == "" {
		ctx.JSON(http.StatusUnauthorized, gin.H{"msg": "请登录后进行操作"})
		ctx.Abort()
		return
	}

	defer func() {
		// 捕获aes解析错误
		if r := recover(); r != nil {
			fmt.Println("request error:", r)
			ctx.JSON(http.StatusUnauthorized, gin.H{"msg": "认证失败，请重新登录"})
			ctx.Abort()
		}
	}()

	// 这里返回 error，不然后捕获后续执行 handler 的 panic
	subject, err := DecodeSubject(auth)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"msg": "认证失败，请重新登录"})
		ctx.Abort()
	} else {
		// 设置token用户到请求上下文
		ctx.Set(SubjectKey, subject)
	}
}

// EncodeSubject 对subject对象aesCBC加密并返回base64Std编码的 token
// session 客户端对象
func EncodeSubject(subject *session.Subject) (string, error) {
	bytes, err := json.Marshal(subject)
	if err != nil {
		return "", err
	}
	encode, err := security.EncryptAesCBC(bytes, aesTokenKeyBytes)
	if err != nil {
		return "", err
	}
	return base64.URLEncoding.EncodeToString(encode), nil
}

// DecodeSubject 解码并解密token返回subject对象
// auth base64Std 编码的 token
func DecodeSubject(auth string) (*session.Subject, error) {
	bytes, err := base64.URLEncoding.DecodeString(auth)
	if err != nil {
		return nil, err
	}
	decode, err := security.DecryptAesCBC(bytes, aesTokenKeyBytes)
	if err != nil {
		return nil, err
	}
	subject := &session.Subject{}
	err = json.Unmarshal(decode, subject)
	if err != nil {
		return nil, err
	}
	return subject, nil
}

// GetSubject 从请求上下文中获取客户端对象, 请求经过了认证过滤器
func GetSubject(ctx *gin.Context) *session.Subject {
	subject, exists := ctx.Get(SubjectKey)
	if !exists {
		panic("request subject not exists!")
	}
	return subject.(*session.Subject)
}

func HandleReqIdentity(client *session.NetClient, msg *api.ReqIdentity) (proto.Message, error) {
	subject, err := DecodeSubject(msg.Token)
	if err != nil {
		// client.Close("authorize failed!")
		return nil, err
	}

	account := &session.NetAccount{
		Id:          subject.Id,
		UserName:    subject.Name,
		Avatar:      subject.Avatar,
		Client:      client,
		Balance:     0,
		BalanceLock: &sync.RWMutex{},
		Lock:        &sync.Mutex{},
	}
	// TODO 查询 DB 账户余额
	account = store.SaveAndTryRecoverNetAccounts(account)
	client.Account = account

	// response
	res := &api.ResIdentity{Id: subject.Id, Username: subject.Name, Avatar: subject.Avatar}
	return res, nil
}
