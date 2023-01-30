package service

import (
	"github.com/gin-gonic/gin"
	"github.com/golang/protobuf/proto"
	"net/http"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/service/store"
	"texas-poker-bk/internal/session"
	"texas-poker-bk/tool/collect"
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

func GetLobbyView(ctx *gin.Context) {
	lobby := store.GetLobbyTablesView()
	ctx.JSON(http.StatusOK, gin.H{"data": lobby})
}

// GetLobbyView2 返回当前所有桌面和玩家数量
func GetLobbyView2(account session.NetAccount, msg *api.ReqLobbyView) (proto.Message, error) {
	res := &api.ResLobbyView{}
	if store.LobbyTables == nil || len(store.LobbyTables) == 0 {
		return res, nil
	}
	tables := make([]*api.LobbyTable, len(store.LobbyTables))
	res.Tables = tables

	// 遍历 store tables 转换为视图层结构体
	idx := 0
	for _, t := range store.LobbyTables {
		table := &api.LobbyTable{TableNo: t.TableNo, PlayerNum: t.PlayerNum, RobotNum: t.RobotNum}
		table.Players = make([]*api.LobbyPlayer, t.PlayerNum+t.RobotNum)

		playerIdx := 0
		if collect.IsNotEmptySlice(t.Players) {
			for _, p := range t.Players {
				if p == nil {
					playerIdx++
					continue
				}
				player := &api.LobbyPlayer{Robot: false, Id: p.Id, Username: p.Username, Avatar: p.Avatar}
				table.Players[playerIdx] = player
				playerIdx++
			}
		}
		if collect.IsNotEmptySlice(t.Robots) {
			for _, _ = range t.Robots {
				table.Players[playerIdx] = &api.LobbyPlayer{Robot: true}
				playerIdx++
			}
		}

		tables[idx] = table
		idx++
	}
	return res, nil
}

// JoinTable 加入牌桌
func JoinTable(ctx *gin.Context) {

}
