package message

type Message struct {
	T  string `json:"t"`  // action 时间主题
	Ms int64  `json:"ms"` // 毫秒时间戳
	D  []byte `json:"d"`  // 消息数据
}

type Res struct {
	Code int32  `json:"code"`
	Msg  string `json:"msg"`
	Data any    `json:"data"`
}

func NewRes(code int32, msg string, data any) *Res {
	return &Res{Code: code, Msg: msg, Data: data}
}

func NewResSuccess(data any) *Res {
	return &Res{Code: 0, Data: data}
}

func NewResFail(msg string) *Res {
	return &Res{Code: 0, Msg: msg}
}
