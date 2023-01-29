package session

// Subject 认证对象
type Subject struct {
	Id     int64  `json:"id,omitempty"`     // 用户id
	Name   string `json:"name,omitempty"`   // 用户名
	Avatar string `json:"avatar,omitempty"` // 头像 TODO 缓存，不加到token
	Time   int64  `json:"time,omitempty"`   // 生成时间戳
}
