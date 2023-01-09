package subject

// NetAccount 已认证的长连接用户
type NetAccount struct {
	Id       int64
	UserName string
	Client   *NetClient
}

func NewNetAccount() {

}
