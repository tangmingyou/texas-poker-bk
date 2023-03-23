package service

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang/protobuf/proto"
	"github.com/o1egl/govatar"
	"math/rand"
	"net/http"
	"os"
	"strings"
	"sync"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/conf"
	"texas-poker-bk/internal/dao"
	"texas-poker-bk/internal/model/entity"
	"texas-poker-bk/internal/service/event"
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

	// 头像文件夹
	_ = os.MkdirAll(conf.Conf.Game.AvatarPath, os.ModePerm)
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
	unregister := user == nil
	if unregister {
		var err error = nil
		// 注册
		user, err = registerUser(username, password)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"msg": err.Error()})
			return
		}
	} else {
		// 校验密码
		if user.Password != password {
			ctx.JSON(http.StatusUnauthorized, gin.H{"msg": "用户名或密码有误"})
			return
		}
	}

	sub := &session.Subject{
		Id:           user.Id,
		Name:         user.Username,
		Time:         time.Now().UnixMilli(),
		Avatar:       user.Avatar,
		TokenVersion: user.TokenVersion + 1,
	}
	// dao.UserDao.UpdateTokenVersion(user.Id, sub.TokenVersion, user.TokenVersion)
	tVersion, err := dao.UserDao.IncrementTokenVersion(user.Id)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"msg": err.Error()})
		return
	}
	store.TokenVersions.SetDefault(user.Id, tVersion)

	token, err := EncodeSubject(sub)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"msg": err.Error()})
		return
	}

	msg := "登录成功"
	if unregister {
		msg = "注册成功"
	}
	ctx.JSON(http.StatusOK, gin.H{"msg": msg, "data": gin.H{
		"token": token,
		"user": gin.H{
			"id":       user.Id,
			"username": user.Username,
			"avatar":   user.Avatar,
		},
	}})
}

// 注册用户到DB
func registerUser(username string, password string) (*entity.User, error) {
	// 生成头像
	avatar := fmt.Sprintf("%d%d%s", time.Now().UnixMilli(), rand.Intn(90)+10, ".jpg")
	err := govatar.GenerateFile(govatar.MALE, conf.Conf.Game.AvatarPath+avatar)
	// 保存用户信息到db
	if err != nil {
		return nil, err
	}
	user := &entity.User{
		Username:     username,
		Password:     password,
		Balance:      conf.Conf.Game.GiftChip,
		Avatar:       avatar,
		Version:      0,
		TokenVersion: 0,
	}
	tx := dao.UserDao.DB.Save(user)
	if tx.Error != nil {
		return nil, tx.Error
	}
	return user, nil
}

// SubjectAuthFilter 认证过滤器
func SubjectAuthFilter(ctx *gin.Context) {

	// 检查是不需要登录的 url
	// ignore auth urls
	if collect.IsNotEmptySlice(conf.Conf.Auth.IgnoreUrl) {
		for _, ignoreUrl := range conf.Conf.Auth.IgnoreUrl {
			if strings.HasPrefix(ctx.Request.URL.Path, ignoreUrl) {
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
		return
	}
	if subject.TokenVersion != store.TokenVersions.Get(subject.Id) {
		ctx.JSON(http.StatusUnauthorized, gin.H{"msg": "登录已过期"})
		ctx.Abort()
		return
	}
	// 设置token用户到请求上下文
	ctx.Set(SubjectKey, subject)
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
		return &api.ResFail{Code: 401, Msg: err.Error()}, nil
	}
	if subject.TokenVersion != store.TokenVersions.Get(subject.Id) {
		return &api.ResFail{Code: 401, Msg: "登录已过期"}, nil
	}

	account := &session.NetAccount{
		Id:          subject.Id,
		UserName:    subject.Name,
		Avatar:      subject.Avatar,
		Client:      client,
		Balance:     1000,
		BalanceLock: &sync.RWMutex{},
		Lock:        &sync.Mutex{},
	}
	// TODO 查询 DB 账户余额，处理断线、重连问题
	current := store.NetAccounts.Get(account.Id)
	if current == nil {
		store.NetAccounts.SetDefault(account.Id, account)
	} else {
		// 掉线重连的用户, TODO 重复登录的用户
		current.Client.Write(&api.ResFail{Code: 403, Msg: "该账号在其他地方登录，您已下线"})
		current.Client = account.Client
		if current.Player != nil {
			current.Player.Client = account.Client
		}
		account = current
	}
	client.Account = account

	// 在线通知消息
	event.OnlineWatcher.Add(account.Id, true)

	// response
	res := &api.ResIdentity{Id: subject.Id, Username: subject.Name, Avatar: subject.Avatar}
	return res, nil
}
