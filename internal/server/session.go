package server

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

// SessionStore 中间件，处理 session
func SessionStore(keyPairs string) gin.HandlerFunc {
	store := sessionConfig()
	return sessions.Sessions(keyPairs, store)
}

func sessionConfig() sessions.Store {
	sessionMaxAge := 3600
	sessionSecret := "golang-tech-stack"
	store := cookie.NewStore([]byte(sessionSecret))
	store.Options(sessions.Options{
		MaxAge: sessionMaxAge,
		Path:   "/",
	})
	return store
}
