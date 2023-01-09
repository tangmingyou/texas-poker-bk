package server

import (
	"github.com/gin-gonic/gin"
	"texas-poker-bk/internal/service"
)

func Start() *gin.Engine {
	server := gin.Default()

	// websocket
	server.GET("/ws", Upgrade)

	auth := server.Group("/auth")
	auth.GET("/captcha", service.Captcha) // 验证码

	// session storage
	server.Use(SessionStore("golang-tech-stack"))

	return server
}
