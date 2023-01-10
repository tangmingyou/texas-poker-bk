package session

// Subject 认证对象
type Subject struct {
	Id   int64  `json:"id,omitempty"`   // 用户id
	Name string `json:"name,omitempty"` // 用户名
	Time int64  `json:"time,omitempty"` // 生成时间戳
}
