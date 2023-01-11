proto 编译 golang
```shell
go install github.com/golang/protobuf/protoc-gen-go 
cmd/protoc-3.19.4/bin/protoc.exe --go_out=./ message/game.message
```

proto 编译 js
```shell
npm install -g protobufjs-cli
# js
pbjs -t static-module -w message/jsproto -o compiled.js message/*.proto
# json
pbjs -t json message/*.proto > jsproto.json
```
