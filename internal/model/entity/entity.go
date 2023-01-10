package entity

import (
	"time"
)

// Id        int64     `gorm:"column:id;primaryKey;autoIncrement:true" json:"id"`
type Model struct {
	CreatedAt time.Time `gorm:"column:created_at" json:"created_at"`
	UpdatedAt time.Time `gorm:"column:updated_at" json:"updated_at"`
}
