package model

type Message struct {
	T  string `json:"t"`  // action 时间主题
	Ms int64  `json:"ms"` // 毫秒时间戳
	D  []byte `json:"d"`  // 消息数据
}

// Identity 身份认证消息
type Identity struct {
	Token string `json:"t"`
}
