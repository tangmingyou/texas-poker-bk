package entity

type User struct {
	Model
	Id       int64  `gorm:"column:id;primaryKey;autoIncrement:true" json:"id"`
	Username string `gorm:"column:username" json:"username"` // comment:用户名
	Password string `gorm:"column:password" json:"password"` // comment:密码
	Nickname string `gorm:"column:nickname" json:"nickname"` // comment:昵称
	Version  int64  `gorm:"column:version" json:"version"`   // comment:更新版本锁
}

func (u *User) TableName() string {
	return "t_user"
}
