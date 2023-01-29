package service

import (
	"github.com/gin-gonic/gin"
	"github.com/golang/protobuf/proto"
	"net/http"
	"strconv"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/service/store"
	"texas-poker-bk/internal/session"
)

// CreateNewTable 创建桌面 TODO 当前在房间则不可创建房间了
func CreateNewTable(account session.NetAccount, msg *api.ReqCreateTable) (proto.Message, error) {
	// 人数，机器人数
	playerNum := msg.Players
	robotNum := msg.Robots
	if playerNum+robotNum <= 0 {
		return &api.ResFail{Msg: "至少添加一个玩家或机器人"}, nil
	}
	// 初始化一个牌桌
	table := &game.Table{}
	table.TableNo = store.TableNo.Add(1)
	table.PlayerNum = int32(playerNum) + 1
	table.RobotNum = int32(playerNum)
	table.Players = make([]*game.Player, playerNum)
	table.Robots = make([]*game.Robot, robotNum)
	// 房主 [0]
	owner := &game.Player{
		Id:       account.Id,
		Username: account.UserName,
		Avatar:   account.Avatar,
	}
	table.Players[0] = owner
	for i := 0; i < int(robotNum); i++ {
		table.Robots[i] = &game.Robot{}
	}
	err := store.SaveNewTable(table)
	if err != nil {
		return &api.ResFail{Msg: err.Error()}, nil
	}
	return &api.ResCreateTable{TableNo: table.TableNo}, nil
}

// CreateTable 创建新桌面
func CreateTable(ctx *gin.Context) {
	user := GetSubject(ctx)

	// 人数，机器人数
	players := ctx.PostForm("players")
	robots := ctx.PostForm("robots")
	playerNum, err := strconv.Atoi(players)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"msg": "人数格式有误"})
		return
	}
	robotNum, err := strconv.Atoi(robots)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"msg": "机器人数格式有误"})
		return
	}
	if playerNum+robotNum <= 0 {
		ctx.JSON(http.StatusBadRequest, gin.H{"msg": "至少添加一个玩家或机器人"})
		return
	}
	// 初始化一个牌桌
	table := &game.Table{}
	table.TableNo = store.TableNo.Add(1)
	table.PlayerNum = int32(playerNum) + 1
	table.RobotNum = int32(playerNum)
	table.Players = make([]*game.Player, playerNum)
	table.Robots = make([]*game.Robot, robotNum)
	// 房主 [0]
	owner := &game.Player{
		Id:       user.Id,
		Username: user.Name,
		Avatar:   user.Avatar,
	}
	table.Players[0] = owner
	for i := 0; i < robotNum; i++ {
		table.Robots[i] = &game.Robot{}
	}
	err = store.SaveNewTable(table)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"msg": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": gin.H{"tableNo": table.TableNo}})
}

func GetLobbyView(ctx *gin.Context) {
	lobby := store.GetLobbyTablesView()
	ctx.JSON(http.StatusOK, gin.H{"data": lobby})
}

// JoinTable 加入牌桌
func JoinTable(ctx *gin.Context) {

}
