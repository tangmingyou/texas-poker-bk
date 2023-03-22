package dao

import (
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"net/http"
	"texas-poker-bk/internal/model/entity"
)

var UserDao *User

func initUserDao() {
	UserDao = &User{DB: Dao.Sqlite}
	err := Dao.Sqlite.AutoMigrate(&entity.User{})
	if err != nil {
		fmt.Println("user table", err)
	}
}

type User struct {
	DB *gorm.DB
}

func FindUserByName(ctx *gin.Context) {
	username := ctx.Param("username")
	user := UserDao.FindUserByName(username)
	if user == nil {
		ctx.JSON(http.StatusOK, gin.H{
			"msg": "not found",
		})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{
		"msg":  "ok",
		"data": user,
	})
}

func (u *User) FindUserByName(username string) *entity.User {
	user := &entity.User{}
	tx := u.DB.Model(user).Where("username=?", username).Limit(1).Scan(user)
	// 查询出结果时 tx.RowsAffected 固定=1
	if tx.RowsAffected == 0 {
		return nil
	}
	return user
}

func (u *User) IncrementTokenVersion(userId int64) (int32, error) {
	u1 := &entity.User{}
	tx := u.DB.Select("token_version").First(u1, userId)
	// fmt.Printf("current user: %v, %d\n", u1, tx.RowsAffected)
	if tx.Error != nil {
		return 0, tx.Error
	}
	newTokenVersion := u1.TokenVersion + 1
	tx.Model(&entity.User{}).
		Where("id", userId).
		Where("token_version", u1.TokenVersion).
		Update("token_version", newTokenVersion)
	// fmt.Printf("RowsAffected: %d\n\n", tx.RowsAffected)
	if tx.Error != nil {
		return 0, tx.Error
	}
	if tx.RowsAffected != 1 {
		return 0, errors.New("登录异常")
	}
	return newTokenVersion, nil
}
