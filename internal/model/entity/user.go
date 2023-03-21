package entity

type User struct {
	Model
	Id           int64  `gorm:"column:id;primaryKey;autoIncrement:true" json:"id"`
	Username     string `gorm:"column:username" json:"username"`                    // comment:用户名
	Password     string `gorm:"column:password" json:"password"`                    // comment:密码
	Balance      int32  `gorm:"column:balance;default:0" json:"balance"`            // comment:余额
	Avatar       string `gorm:"column:avatar" json:"avatar"`                        // comment:头像
	Version      int32  `gorm:"column:version;default:0" json:"version"`            // comment:更新版本锁
	TokenVersion int32  `gorm:"column:token_version;default:0" json:"tokenVersion"` // comment:token版本,重新登录后之前的token失效,登录丢到缓存中和token过期时间相同
}

func (u *User) TableName() string {
	return "t_user"
}
