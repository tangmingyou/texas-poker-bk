package conf

import (
	"flag"
	"github.com/BurntSushi/toml"
)

var (
	confPath string
	Conf     *Config
)

func init() {
	// go run xx -conf=xx.toml
	flag.StringVar(&confPath, "conf", "etc/config.toml", "default config path.")

	Conf = Default()
	_, err := toml.DecodeFile("etc/config.toml", Conf)
	if err != nil {
		panic(err)
	}
	// fmt.Printf("%v", Conf)
}

func Default() *Config {
	return &Config{
		Auth: &Auth{
			IgnoreUrl: []string{},
		},
	}
}

type Config struct {
	Auth   *Auth
	Http   *Http
	Sqlite *Sqlite
}

type Auth struct {
	AesTokenKey string
	IgnoreUrl   []string
}

type Http struct {
	Addr string
}

type Sqlite struct {
	DbPath string
}
