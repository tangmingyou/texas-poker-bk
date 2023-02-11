package service

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"sort"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/game"
	"texas-poker-bk/internal/service/store"
	"texas-poker-bk/internal/session"
	"texas-poker-bk/tool/collect"
)

// HandleReqCreateTable 创建桌面
func HandleReqCreateTable(account *session.NetAccount, msg *api.ReqCreateTable) (proto.Message, error) {
	account.Lock.Lock()
	defer account.Lock.Unlock()

	if account.Player != nil {
		return &api.ResFail{Msg: fmt.Sprintf("您当前在#%d牌桌中", account.Player.GameTable.TableNo)}, nil
	}
	// 人数，机器人数
	playerNum := msg.Players
	robotNum := msg.Robots
	if playerNum+robotNum <= 0 {
		return &api.ResFail{Msg: "至少添加一个玩家或机器人"}, nil
	}
	if !collect.In(msg.TexasType, 1, 2, 3) {
		return &api.ResFail{Msg: fmt.Sprintf("未知游戏类型%d", msg.TexasType)}, nil
	}
	if msg.BigBlind < 2 || msg.BigBlind > 200 || msg.BigBlind%2 == 1 {
		return &api.ResFail{Msg: "大盲注金额需在2-200之间,且为偶数"}, nil
	}
	if account.GetBalance() < msg.BigBlind*100 {
		return &api.ResFail{Msg: fmt.Sprintf("余额小于入场金额[%d]", msg.BigBlind*100)}, nil
	}
	// 初始化一个牌桌
	table := &game.Table{
		TableNo:  store.TableNo.Add(1),
		MasterId: account.Id,

		PlayerNum:      playerNum + 1,
		RobotNum:       robotNum,
		Players:        make([]*game.Player, playerNum+1),
		Robots:         make([]*game.Robot, robotNum),
		BigBlindChip:   msg.BigBlind,
		SmallBlindChip: msg.BigBlind / 2,
		LimitInAmount:  msg.BigBlind * 100,
		TexasType:      msg.TexasType,
	}
	table.Init()

	// 房主 [0]
	// 扣除DB账户余额
	account.DecrementBalance(table.LimitInAmount)
	owner := &game.Player{
		Id:          account.Id,
		Username:    account.UserName,
		Avatar:      account.Avatar,
		Status:      1,
		LastStatus:  0,
		Chip:        table.LimitInAmount,
		Cards:       [2]*game.Card{},
		GameTable:   table,
		ProtoWriter: account.Client,
	}
	owner.Init()
	// 挂载 player 到 account 上
	account.Player = owner
	table.Players[0] = owner
	owner.PosIndex = 0

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

	table := store.LobbyTables[msg.TableNo]
	table.ChipLock.Lock()
	defer table.ChipLock.Unlock()
	if table == nil {
		return &api.ResFail{Msg: "牌桌不存在"}, nil
	}
	if table.Stage != 1 {
		return &api.ResFail{Msg: "牌桌正在进行中"}, nil
	}
	// 账户余额限制
	if account.GetBalance() < table.LimitInAmount {
		return &api.ResFail{Msg: fmt.Sprintf("余额小于入场金额[%d]", table.LimitInAmount)}, nil
	}

	player := &game.Player{
		Id:          account.Id,
		Username:    account.UserName,
		Avatar:      account.Avatar,
		Status:      1,
		LastStatus:  0,
		Chip:        0,
		Cards:       [2]*game.Card{nil, nil},
		GameTable:   table,
		ProtoWriter: account.Client,
	}
	player.Init()
	index, err := table.JoinPlayer(player)
	if err != nil {
		return nil, err
	}
	player.PosIndex = index

	// 从账户扣除进入牌桌的金额
	account.DecrementBalance(table.LimitInAmount)
	player.Chip = table.LimitInAmount
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

// HandleReqDismissGameTable 解散牌桌
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

// HandleReqGameStart 游戏开始,初始化,扣除大小盲注,每个玩家发2张牌
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
	// 小盲注位
	if table.RoundTimes == 0 {
		// 第一轮由庄家左手边第一个作为小盲注
		table.SmallBlindPos = table.NextPlayerPos(0)
	} else {
		table.SmallBlindPos = table.NextPlayerPos(table.SmallBlindPos)
	}
	// 大盲注位
	table.BigBlindPos = table.NextPlayerPos(table.SmallBlindPos)
	// 回合数+1
	table.RoundTimes++

	// 扣除大小盲注金额
	table.Players[table.SmallBlindPos].Chip -= table.SmallBlindChip
	table.Players[table.BigBlindPos].Chip -= table.BigBlindChip
	table.Chip += table.BigBlindChip + table.SmallBlindChip
	// 回合下注次数
	table.Players[table.BigBlindPos].RoundBetTimes++
	// table.Players[table.SmallBlindPos].RoundBetTimes++

	// 初始上次下注金额为大盲注
	table.LastPosBetChip = table.BigBlindChip

	msgSmallBlind := &api.ResNoticePlayerLine{
		PlayerId: table.Players[table.SmallBlindPos].Id,
		Line1:    fmt.Sprintf("+%d", table.SmallBlindChip),
		Line2:    "小盲注",
	}
	msgBigBlind := &api.ResNoticePlayerLine{
		PlayerId: table.Players[table.BigBlindPos].Id,
		Line1:    fmt.Sprintf("+%d", table.BigBlindChip),
		Line2:    "大盲注",
	}
	table.NoticeAllPlayer(msgSmallBlind)
	table.NoticeAllPlayer(msgBigBlind)
	//table.Players[table.BigBlindPos].ProtoWriter.Write(&api.ResBigBlindChip{Chip: game.BigBlindChip})
	//table.Players[table.SmallBlindPos].ProtoWriter.Write(&api.ResSmallBlindChip{Chip: game.SmallBlinds})

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

	// 待大盲注位下一位玩家下注
	optPos := table.NextPlayerPos(table.BigBlindPos)
	optPlayer := table.Players[optPos]
	optPlayer.SetStatus(4)
	optPlayer.BetOpts = []int32{1, 2, 4}
	optPlayer.BetMax = table.BigBlindChip
	// 游戏类型处理最大下注额
	switch table.TexasType {
	case 2: // 底池限注
		optPlayer.BetMax = table.Chip + table.LastPosBetChip*2
	case 3: // 无限注
		optPlayer.BetOpts = append(optPlayer.BetOpts, 3) // 可 all in
		optPlayer.BetMax = -1
	case 1: // 限注
		fallthrough
	default:
		// 第1,2回合跟注加注需和大盲注相同, 3,4回合两倍
		optPlayer.BetMax = table.BigBlindChip * 2
	}
	// 根据玩家类型计算最小下注额，最大下注额
	switch optPos {
	case table.SmallBlindPos:
		optPlayer.BetMin = table.BigBlindChip - table.SmallBlindChip
		if table.TexasType != 3 {
			optPlayer.BetMax = optPlayer.BetMax - optPlayer.BetMin
		}
	case table.BigBlindPos:
		optPlayer.BetMin = 0
		optPlayer.BetOpts = append(optPlayer.BetOpts, 5)
		if table.TexasType != 3 {
			optPlayer.BetMax = optPlayer.BetMax - table.BigBlindChip
		}
	default:
		optPlayer.BetMin = table.BigBlindChip
	}
	// 其他玩家暂不可操作
	for pos, p := range table.Players {
		if p != nil && pos != optPos {
			p.Status = 3
			p.BetOpts = make([]int32, 0)
			p.BetMin = 0
			p.BetMax = 0
		}
	}

	// 广播牌桌状态
	table.NoticeGameFullStatus()
	return &api.ResSuccess{}, nil
}

// HandleReqPlaceBet 下注
// 网易德州扑克：http://sports.163.com/special/poker_rule/?ivk_sa=1025883k
// 天天德州: http://game.people.com.cn/n/2014/0220/c40130-24413078.html
// wiki: https://zh.wikipedia.org/wiki/%E5%BE%B7%E5%B7%9E%E6%92%B2%E5%85%8B
// 加注:增加下注额。 2、一人结束行动后按顺时针方向下一玩家获得行动权,直到不再有人弃牌,且每人已向奖池投入相同注额。
// 德州扑克多名玩家ALL IN之后的筹码 如何分配？https://www.zhihu.com/question/32187371
// All-in技巧：https://bac88.net/%E5%BE%B7%E5%B7%9E%E6%92%B2%E5%85%8B%E6%8A%80%E5%B7%A7-all-in%E7%9A%84%E6%8A%80%E5%B7%A7/
// 起手牌组合概率：https://www.moshike.com/a/1011.html
// 各圈喊注将持续直至每个牌手都已为以下三种状态之一：
// 盖牌（fold），即舍弃并覆盖手中的牌，放弃已投入底池的筹码退出该局。
// 跟注（call）投入了与所有其他未盖牌的牌手等量的筹码。
// 全下（all-in），投入了尚余的全部筹码。
func HandleReqPlaceBet(player *game.Player, msg *api.ReqPlaceBet) (proto.Message, error) {
	player.Lock.Lock()
	defer player.Lock.Unlock()
	player.GameTable.ChipLock.Lock()
	defer player.GameTable.ChipLock.Unlock()

	if !collect.In(player.Status, 4, 6) {
		return &api.ResFail{Msg: "当前未轮到您下注"}, nil
	}
	if !collect.In(msg.BetType, player.BetOpts...) {
		return &api.ResFail{Msg: fmt.Sprintf("当前不可执行该操作#%d", msg.BetType)}, nil
	}

	table := player.GameTable
	var line1 string
	var line2 string
	var raise bool // 是否加注
	switch msg.BetType {
	case 1: // 跟注
		if msg.BetChip != player.BetMin {
			return &api.ResFail{Msg: fmt.Sprintf("投注大于应跟注金额#%d", player.BetMin)}, nil
		}
		fallthrough
	case 2: // 加注
		if table.LastPosBetChip < 0 {
			return &api.ResFail{Msg: "您当前只能All-In或弃牌"}, nil
		}
		if msg.BetChip < player.BetMin {
			return &api.ResFail{Msg: fmt.Sprintf("小于当前最低投注额#%d", player.BetMin)}, nil
		}
		if player.BetMax > 0 && msg.BetChip > player.BetMax {
			return &api.ResFail{Msg: fmt.Sprintf("大于当前最大投注额#%d", player.BetMax)}, nil
		}
		// 限注式加注3次判断
		if table.TexasType == 1 && msg.BetChip > player.BetMin && table.RoundRaiseTimes >= 3 {
			return &api.ResFail{Msg: "该轮不可再加注"}, nil
		}
		// TODO 加注判断
		if msg.BetChip > table.LastPosBetChip {
			table.RoundRaiseTimes++
		}
		player.RoundBetTimes++
		raise = msg.BetChip > player.BetMin
		table.LastPosBetChip = msg.BetChip
		table.Chip += msg.BetChip
		player.Chip -= msg.BetChip

	case 3: // All-In TODO 边池
		player.RoundBetTimes++
		table.LastPosBetChip = player.Chip
		table.Chip += player.Chip
		player.Chip = 0

		table.LastPosBetChip = msg.BetChip

	case 4: // 弃牌
		player.SetStatus(7)
		line1 = "弃牌"
		// 剩余牌手数为1则结束
		leftPlayers := collect.Filter(player.GameTable.Players, func(i int, p *game.Player) bool {
			return p != nil && p.Status != 7
		})
		if len(leftPlayers) == 1 {
			playerWin(leftPlayers[0])
			return &api.ResSuccess{}, nil
		}
	case 5: // 过牌
		player.RoundBetTimes++
		line1 = "过牌"

	default:
		return &api.ResFail{Msg: fmt.Sprintf("未知操作#%d", msg.BetType)}, nil
	}

	// 通知下注结果
	if line1 != "" {
		notice := &api.ResNoticePlayerLine{PlayerId: player.Id, Line1: line1, Line2: line2}
		player.GameTable.NoticeAllPlayer(notice)
	}

	player.SetStatus(3)

	// 下注完成：若还有玩家未下注、加注，下一玩家继续下注；若该轮下注完成，发牌开启下一轮下注
	// 下一位玩家：跟注
	var nextPlayer *game.Player = player
	for {
		nextPlayerPos := table.NextPlayerPos(nextPlayer.PosIndex)
		nextPlayer = table.Players[nextPlayerPos]
		if nextPlayer.Id == player.Id {
			// TODO 开启下一轮
			break
		}
		if nextPlayer.Status == 7 { // 已弃牌..
			continue
		}
		if !raise {
			// 当前玩家未加注, 判断是否结束本轮下注
			if nextPlayer.RoundBetTimes > 0 {
				// TODO 开启下一轮
			}
		}
		// 判断下一玩家是否需要再下注: 下一玩家是否已下注,当前玩家是否跟注,
		nextPlayer.SetStatus(6)
		nextPlayer.BetMin = msg.BetChip
		nextPlayer.BetOpts = []int32{1, 4}

		// 下一玩家需跟注
		// 如果当前玩家是小盲注第一次下注
		if player.RoundBetTimes == 1 && table.SmallBlindPos == player.PosIndex {
			nextPlayer.BetMin += table.SmallBlindChip
		}
		// 如果下一玩家是大盲注第一次下注
		if nextPlayer.RoundBetTimes == 0 && table.BigBlindPos == nextPlayerPos {
			nextPlayer.BetMin -= table.BigBlindChip
		}
		// 游戏类型处理最大下注额
		switch table.TexasType {
		case 2: // 底池限注
			nextPlayer.BetOpts = append(nextPlayer.BetOpts, 3)
			nextPlayer.BetMax = table.Chip + table.LastPosBetChip*2
		case 3: // 无限注
			nextPlayer.BetOpts = append(nextPlayer.BetOpts, 2, 3) // 可 all in
			nextPlayer.BetMax = -1
		case 1: // 限注
			fallthrough
		default:
			// 限注比赛只允许一次下注与三次加注
			if table.RoundRaiseTimes < 3 {
				nextPlayer.BetOpts = append(nextPlayer.BetOpts, 3)
				// 第1,2回合跟注加注需和大盲注相同, 3,4回合两倍
				nextPlayer.BetMax = table.BigBlindChip * ((table.RoundTimes+1)/2 + 1)
			} else {
				// 只能跟注
				nextPlayer.BetMax = msg.BetChip
			}
		}
	}

	// 依赌场规则而异，
	// 若所余筹码All-in后仍低于最低加注金额，则此注仅视为跟注（call）而不能被当成加注（raise），亦及该圈若未有其他人再加注，则原加注者（此例中的第一位牌手）仅可跟注补齐或盖牌，于此圈不可再行加注
	// 亦有少部分赌场规定All-in后大于最低加注额的一半以上，原加注者即可重新加注。

	return &api.ResSuccess{}, nil
}

// playerWin 玩家获胜，结算牌局
func playerWin(player *game.Player) {

}
