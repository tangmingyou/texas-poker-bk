package logic

import (
	"github.com/golang/protobuf/proto"
	"texas-poker-bk/api"
	"texas-poker-bk/internal/session"
)

// HandleReqAccountBalance 返回账户余额
func HandleReqAccountBalance(account *session.NetAccount, msg *api.ReqAccountBalance) (proto.Message, error) {
	return &api.ResAccountBalance{Balance: account.Balance}, nil
}
