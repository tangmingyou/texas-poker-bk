package dao

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"texas-poker-bk/internal/conf"
)

var Dao *Persistent

type Persistent struct {
	Sqlite *gorm.DB
}

func init() {
	Dao = &Persistent{
		Sqlite: newSqlite(),
	}
}

func newSqlite() (db *gorm.DB) {
	db, err := gorm.Open(sqlite.Open(conf.Conf.Sqlite.DbPath), &gorm.Config{
		QueryFields: true,
	})
	if err != nil {
		panic(err)
	}
	return db
}
