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

