package event

type EventType int32

const (
	UNKNOW       EventType = iota
	USER_ONLINE  EventType = iota // 用户已连接已认证
	USER_OFFLINE EventType = iota // 用户断开
)
