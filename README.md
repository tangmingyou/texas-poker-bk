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


## game process
1. player join (检查筹码...)
2. player ready
3. table begin 发牌
4. 开始流程，大盲注 小盲注
