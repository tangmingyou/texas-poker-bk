package api

////go:generate protoc -I. -I$GOPATH/src --go_out=plugins=grpc:. --go_opt=paths=source_relative protocol/protocol.proto
//go:generate protoc --go_out=./ --go_opt=paths=source_relative *.proto

//go:generate pbjs -t static-module -w es6 -o proto.js *.proto
