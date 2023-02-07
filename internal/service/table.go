package service

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"sort"
	"sync"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/service/store"
	"texas-poker-bk/internal/session"
	"texas-poker-bk/tool/collect"
)

// HandleReqCreateTable 创建桌面 TODO 当前在房间则不可创建房间了
func HandleReqCreateTable(account *session.NetAccount, msg *api.ReqCreateTable) (proto.Message, error) {
	// 人数，机器人数
	playerNum := msg.Players
	robotNum := msg.Robots
	if playerNum+robotNum <= 0 {
		return &api.ResFail{Msg: "至少添加一个玩家或机器人"}, nil
	}
	// 初始化一个牌桌
	table := &game.Table{
		TableNo:    store.TableNo.Add(1),
		MasterId:   account.Id,
		RoundTimes: 0,
		Stage:      1,

		Dealer:      game.NewDealer(),
		PublicCards: [5]*game.Card{nil, nil, nil, nil, nil}, //&game.Card{Dot: 0, Suit: 3}, &game.Card{Dot: 1, Suit: 3}

		PlayerNum:     playerNum + 1,
		RobotNum:      robotNum,
		Players:       make([]*game.Player, playerNum+1),
		Robots:        make([]*game.Robot, robotNum),
		BigBlindPos:   0,
		SmallBlindPos: 0,
		PlayersLock:   &sync.Mutex{},
		ChipLock:      &sync.Mutex{},
	}

	// 房主 [0]
	owner := &game.Player{
		Id:          account.Id,
		Username:    account.UserName,
		Avatar:      account.Avatar,
		Status:      1,
		LastStatus:  0,
		Chip:        500,
		Cards:       [2]*game.Card{},
		GameTable:   table,
		ProtoWriter: account.Client,
	}
	owner.Init()
	// 扣除DB账户余额 TODO 账户金额限制
	account.DecrementBalance(500)
	account.Player = owner // 挂载 player 到 account 上
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

// HandleReqLobbyView 返回当前所有桌面和玩家数量
func HandleReqLobbyView(account *session.NetAccount, msg *api.ReqLobbyView) (proto.Message, error) {
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
	// 牌桌号降序
	sort.Slice(tables, func(i, j int) bool {
		return tables[i].TableNo > tables[j].TableNo
	})
	return res, nil
}

// HandleReqJoinTable 加入牌桌
func HandleReqJoinTable(account *session.NetAccount, msg *api.ReqJoinTable) (proto.Message, error) {
	account.Lock.Lock()
	defer account.Lock.Unlock()

	if account.Player != nil {
		return &api.ResFail{Msg: fmt.Sprintf("当前已加入#%d牌桌", account.Player.GameTable.TableNo)}, nil
	}
	// account -> player
	// TODO 账户余额限制

	table := store.LobbyTables[msg.TableNo]
	table.ChipLock.Lock()
	defer table.ChipLock.Unlock()
	if table == nil {
		return &api.ResFail{Msg: "牌桌不存在"}, nil
	}
	if table.Stage != 1 {
		return &api.ResFail{Msg: "牌桌正在进行中"}, nil
	}
	player := &game.Player{
		Id:          account.Id,
		Username:    account.UserName,
		Avatar:      account.Avatar,
		Status:      1,
		LastStatus:  0,
		Chip:        500,
		Cards:       [2]*game.Card{nil, nil},
		GameTable:   table,
		ProtoWriter: account.Client,
	}
	player.Init()
	err := table.JoinPlayer(player)
	if err != nil {
		return nil, err
	}
	// 从账户扣除进入牌桌的金额
	account.DecrementBalance(500)
	account.Player = player

	// 通知其他玩家
	player.GameTable.NoticeGameFullStatus()

	return &api.ResSuccess{}, nil
}

// HandleReqKickOutTable 踢人
func HandleReqKickOutTable(player *game.Player, msg *api.ReqKickOutTable) (proto.Message, error) {
	player.GameTable.PlayersLock.Lock()
	defer player.GameTable.PlayersLock.Unlock()

	if player.GameTable.MasterId != player.Id {
		return &api.ResFail{Msg: "不是房主不能踢人"}, nil
	}
	if player.Id == msg.PlayerId {
		return &api.ResFail{Msg: "不能踢自己"}, nil
	}
	if player.GameTable.Stage != 1 {
		return &api.ResFail{Msg: "牌局进行中不能踢人"}, nil
	}
	for i, p := range player.GameTable.Players {
		if p != nil && p.Id == msg.PlayerId {
			// 从牌桌移除该玩家
			player.GameTable.Players[i] = nil
			// 被对踢出人发送消息
			account := store.NetAccounts[p.Id]
			account.Player = nil                        // 解除账户绑定
			account.IncrementBalance(player.Chip)       // 筹码返还账户
			p.ProtoWriter.Write(&api.ResKickOutTable{}) // 被踢玩家消息
			break
		}
	}
	// 通知牌桌所有玩家
	player.GameTable.NoticeGameFullStatus()
	return &api.ResSuccess{}, nil
}

// HandleReqLeaveTable 离开桌面
func HandleReqLeaveTable(player *game.Player, msg *api.ReqLeaveTable) (proto.Message, error) {
	player.GameTable.PlayersLock.Lock()
	defer player.GameTable.PlayersLock.Unlock()

	if player.GameTable.Stage != 1 {
		return &api.ResFail{Msg: "牌局进行中不能退出"}, nil
	}
	if player.Status != 1 {
		return &api.ResFail{Msg: "您已准备不能退出"}, nil
	}
	if player.GameTable.MasterId == player.Id {
		return &api.ResFail{Msg: "房主不能退出,请解散房间"}, nil
	}
	// 从牌桌移除
	for i, p := range player.GameTable.Players {
		if p.Id == player.Id {
			player.GameTable.Players[i] = nil
			break
		}
	}
	account := store.NetAccounts[player.Id]
	account.Player = nil                  // 解除账户绑定
	account.IncrementBalance(player.Chip) // 筹码返还账户

	// 通知牌桌其他玩家
	player.GameTable.NoticeGameFullStatus()

	return &api.ResSuccess{}, nil
}

// HandleReqGameFullStatus 获取牌桌当前所有状态
func HandleReqGameFullStatus(player *game.Player, msg *api.ReqGameFullStatus) (proto.Message, error) {
	if player.GameTable == nil {
		return &api.ResFail{Msg: "当前未加入牌桌"}, nil
	}
	resGame := player.GameTable.BuildResGameFullStatus()
	resGame.PlayerId = player.Id
	// 其他玩家手牌不返回，TODO 计算自己的5张推荐牌
	for _, p := range resGame.Players {
		if p != nil && p.Id != player.Id {
			p.HandCard[0] = nil
			p.HandCard[1] = nil
		}
	}
	return resGame, nil
}

// HandleReqReadyStart 准备开始游戏
func HandleReqReadyStart(player *game.Player, msg *api.ReqReadyStart) (proto.Message, error) {
	player.Lock.Lock()
	defer player.Lock.Unlock()
	if player.Id == player.GameTable.MasterId {
		return &api.ResFail{Msg: "房主不用准备"}, nil
	}
	if player.Status != 1 {
		msg := ""
		switch player.Status {
		case 2:
			msg = "已准备"
		default:
			msg = fmt.Sprintf("异常状态#%d", player.Status)
		}
		return &api.ResFail{Msg: msg}, nil
	}

	player.SetStatus(2)
	player.GameTable.NoticeGameFullStatus()

	return &api.ResSuccess{}, nil
}

func HandleReqCancelReady(player *game.Player, msg *api.ReqCancelReady) (proto.Message, error) {
	player.Lock.Lock()
	defer player.Lock.Unlock()
	if player.Id == player.GameTable.MasterId {
		return &api.ResFail{Msg: "房主不用准备"}, nil
	}
	if player.Status != 2 {
		return &api.ResFail{Msg: "当前未准备"}, nil
	}
	player.SetStatus(1)
	player.GameTable.NoticeGameFullStatus()
	return &api.ResSuccess{}, nil
}

func HandleReqDismissGameTable(player *game.Player, msg *api.ReqDismissGameTable) (proto.Message, error) {
	player.GameTable.ChipLock.Lock()
	defer player.GameTable.ChipLock.Unlock()
	if player.GameTable.Stage != 1 {
		return &api.ResFail{Msg: fmt.Sprintf("#%d,牌局进行中", player.GameTable.Stage)}, nil
	}
	player.GameTable.Stage = 9
	delete(store.LobbyTables, player.GameTable.TableNo)
	// 通知所有玩家，解除账号绑定，结算玩家金额
	for i, p := range player.GameTable.Players {
		if p == nil {
			continue
		}
		account := store.NetAccounts[p.Id]
		account.IncrementBalance(p.Chip)
		account.Player = nil
		player.GameTable.Players[i] = nil
		if p.Id != player.Id {
			p.ProtoWriter.Write(&api.ResDismissGameTable{})
		}
	}
	return &api.ResDismissGameTable{}, nil
}

func HandleReqGameStart(player *game.Player, msg *api.ReqGameStart) (proto.Message, error) {
	player.GameTable.ChipLock.Lock()
	defer player.GameTable.ChipLock.Unlock()
	// 锁定牌桌所有玩家
	for _, p := range player.GameTable.Players {
		if p != nil {
			p.Lock.Lock()
			defer p.Lock.Unlock()
		}
	}

	table := player.GameTable
	if player.Id != table.MasterId {
		return &api.ResFail{Msg: "你不是房主"}, nil
	}
	if table.Stage != 1 {
		return &api.ResFail{Msg: fmt.Sprintf("牌局状态有误%d", table.Stage)}, nil
	}
	// 检查所有玩家准备状态
	for _, p := range table.Players {
		if p != nil && p.Id != table.MasterId && p.Status != 2 {
			return &api.ResFail{Msg: "有玩家未准备"}, nil
		}
	}

	// 游戏状态开始
	table.Stage = 2
	// 大盲注位
	if table.RoundTimes == 0 {
		table.BigBlindPos = 0
	} else {
		table.BigBlindPos = table.NextPosPlayer(table.BigBlindPos)
	}
	// 小盲注位
	table.SmallBlindPos = table.NextPosPlayer(table.BigBlindPos)
	// 回合数+1
	table.RoundTimes++

	// 扣除大小盲注金额
	table.Players[table.BigBlindPos].Chip -= game.BigBlindChip
	table.Players[table.SmallBlindPos].Chip -= game.SmallBlinds
	table.Chip += game.BigBlindChip + game.SmallBlinds

	table.Players[table.BigBlindPos].ProtoWriter.Write(&api.ResBigBlindChip{Chip: game.BigBlindChip})
	table.Players[table.SmallBlindPos].ProtoWriter.Write(&api.ResSmallBlindChip{Chip: game.SmallBlinds})

	// 开始发牌(手牌，公共牌)
	table.Dealer.Init() // 初始化发牌员
	for _, p := range table.Players {
		if p == nil {
			continue
		}
		for i := range p.Cards {
			p.Cards[i] = table.Dealer.Deal()
		}
		// 玩家状态置为等待
		p.SetStatus(3)
	}
	// 发3张公共牌
	for i := 0; i < 5; i++ {
		if i < 3 {
			table.PublicCards[i] = table.Dealer.Deal()
			continue
		}
		// 第4,5张牌置空
		table.PublicCards[i] = nil
	}
	// 待小盲注位玩家下注
	table.Players[table.SmallBlindPos].SetStatus(4)

	// 广播牌桌状态
	table.NoticeGameFullStatus()
	return &api.ResSuccess{}, nil
}

// HandleReqPlaceBetChip 下注
// 网易德州扑克：http://sports.163.com/special/poker_rule/?ivk_sa=1025883k
// 天天德州: http://game.people.com.cn/n/2014/0220/c40130-24413078.html
// wiki: https://zh.wikipedia.org/wiki/%E5%BE%B7%E5%B7%9E%E6%92%B2%E5%85%8B
// 加注:增加下注额。 2、一人结束行动后按顺时针方向下一玩家获得行动权,直到不再有人弃牌,且每人已向奖池投入相同注额。
// 德州扑克多名玩家ALL IN之后的筹码 如何分配？https://www.zhihu.com/question/32187371
// All-in技巧：https://bac88.net/%E5%BE%B7%E5%B7%9E%E6%92%B2%E5%85%8B%E6%8A%80%E5%B7%A7-all-in%E7%9A%84%E6%8A%80%E5%B7%A7/
// 起手牌组合概率：https://www.moshike.com/a/1011.html
func HandleReqPlaceBetChip(player *game.Player, msg *api.ReqPlaceBetChip) (proto.Message, error) {
	player.Lock.Lock()
	defer player.Lock.Unlock()
	player.GameTable.ChipLock.Lock()
	defer player.GameTable.ChipLock.Unlock()

	if !collect.In(player.Status, 4, 6) {
		return &api.ResFail{Msg: "当前未轮到您下注"}, nil
	}
	switch player.Status {
	case 4: // 小盲注下注,下注金额最小大盲注1半,
		if msg.Chip < player.GameTable.BigBlindChip/2 {
			return &api.ResFail{Msg: fmt.Sprintf("您当前最小下注金额%d", player.GameTable.BigBlindChip/2)}, nil
		}
	case 6: // 轮流下注,下注金额最小大盲注
		if msg.Chip < player.GameTable.BigBlindChip {
			return &api.ResFail{Msg: fmt.Sprintf("您当前最小下注金额%d", player.GameTable.BigBlindChip)}, nil
		}
	default:
		return &api.ResFail{Msg: "当前未轮到您下注"}, nil
	}
	// 检查最大下注金额
	var maxBetChip int32 = 0
	// 依赌场规则而异，
	// 若所余筹码All-in后仍低于最低加注金额，则此注仅视为跟注（call）而不能被当成加注（raise），亦及该圈若未有其他人再加注，则原加注者（此例中的第一位牌手）仅可跟注补齐或盖牌，于此圈不可再行加注
	// 亦有少部分赌场规定All-in后大于最低加注额的一半以上，原加注者即可重新加注。

	allIn := false
	fmt.Println(allIn)
	switch player.GameTable.TexasType {
	case 1: // 大盲注
		maxBetChip = player.GameTable.BigBlindChip
	case 2: // 台面最大额
		maxBetChip = player.GameTable.Chip
	case 3: // 最大All In
		maxBetChip = player.Chip
	default:
		return &api.ResFail{Msg: "牌桌"}, nil
	}

	if player.GameTable.TexasType == 3 {
		// 无限制可All In
		allIn = msg.Chip == maxBetChip

	} else if player.Status == 4 {
		// 最大金额减去小盲注金额
		maxBetChip -= player.GameTable.BigBlindChip / 2
	}
	if msg.Chip > maxBetChip {
		return &api.ResFail{Msg: fmt.Sprintf("您当前最大下注金额%d", maxBetChip)}, nil
	}

	player.Chip -= msg.Chip

	return nil, nil
}

// HandleReqBetWeakHand 让牌
func HandleReqBetWeakHand(player *game.Player, msg *api.ReqBetWeakHand) (proto.Message, error) {

	return nil, nil
}

// HandleReqBetDiscard 弃牌
func HandleReqBetDiscard(player *game.Player, msg *api.ReqBetDiscard) (proto.Message, error) {

	return nil, nil
}
