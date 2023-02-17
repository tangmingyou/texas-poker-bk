# Go parameters
GOCMD=GO111MODULE=on go
GOBUILD=$(GOCMD) build
GOTEST=$(GOCMD) test


all: build
build:
	rm -rf target/texas target/data/config.toml
	mkdir -p target/data/
	cp data/config.toml target/data/config.toml
	$(GOBUILD) -o target/texas cmd/main.go

clean:
	rm -rf target/

run:
	nohup target/texas -conf=target/data/config.toml -region=sh -zone=sh001 -deploy.env=dev -weight=10 2>&1 > target/data/texas.log &

stop:
	pkill -f target/texas

