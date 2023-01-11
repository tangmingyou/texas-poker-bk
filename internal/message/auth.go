package message

// ReqIdentity 身份认证消息
type ReqIdentity struct {
	Token string `json:"t"`
}

type ResIdentity struct {
}
