proto 编译 golang
```shell
go install github.com/golang/protobuf/protoc-gen-go 
cmd/protoc-3.19.4/bin/protoc.exe --go_out=./ api/game.api
```

proto 编译 js
```shell
npm install -g protobufjs-cli
# js
pbjs -t static-module -w api/jsproto -o proto.js api/*.proto
# json
pbjs -t json api/*.proto > jsproto.json
```


[网易德州扑克规则](http://sports.163.com/special/poker_rule/?ivk_sa=1025883k)

cd target
nohup ./texas -conf=config.toml -region=sh -zone=sh001 -deploy.env=dev -weight=10 2>&1 > texas.log &
pkill -f ./texas


TODO List
### 离线后
- 牌局结束后，清理离线玩家
- 下注页面倒计时、超时自动操作
- 前端lobby页面显示内容优化
- lobby界面用户创建新桌面时通知消息，前端拉取新大厅界面，
- header头部编辑、退出、账户金额，流水， 
- 日志
- 验证码
- 性能测试、系统调优
  - 大厅桌面变化日志版本记录?
  - 注册同时生成大厅tiny头像
