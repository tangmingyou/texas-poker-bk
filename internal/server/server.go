package server

import (
	"github.com/gin-gonic/gin"
	"texas-poker-bk/internal/service"
)

func NewServer() *gin.Engine {
	server := gin.Default()
	// token认证过滤器
	server.Use(service.SubjectAuthFilter)

	// session storage
	server.Use(SessionStore("golang-tech-stack"))

	// websocket
	server.GET("/ws", Upgrade)

	auth := server.Group("/auth")
	auth.GET("/captcha", service.Captcha)      // 验证码
	auth.POST("/authorize", service.Authorize) // 登录或注册认证

	user := server.Group("/user")
	user.GET("/findByName", service.FindUserByName)

	return server
}
