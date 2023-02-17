package server

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/dao"
	"texas-poker-bk/internal/service"
)

func NewServer() *gin.Engine {
	server := gin.Default()
	// token认证过滤器
	server.Use(service.SubjectAuthFilter)

	// session storage
	server.Use(SessionStore("golang-tech-stack"))

	base := server.Group("/api")
	conn := base.Group("/conn")
	// 消息映射关系 TODO 生成 json 放在前端
	conn.GET("/opMap", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{"data": api.GetOpNameMap()})
	})
	// websocket
	conn.GET("/ws", Upgrade)
	conn.GET("/route_ws", RouteWs)

	auth := base.Group("/auth")
	auth.GET("/captcha", service.Captcha)      // 验证码
	auth.POST("/authorize", service.Authorize) // 登录或注册认证

	user := base.Group("/user")
	user.GET("/findByName", dao.FindUserByName)

	gm := base.Group("/gm")
	gm.GET("/avatar/:avatar", service.Avatar)
	return server
}
