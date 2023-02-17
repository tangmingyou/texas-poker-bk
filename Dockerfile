FROM golang:1.19-alpine

ENV GO111MODULE=on
ENV GOPROXY=https://goproxy.cn

RUN mkdir -p /var/texas/data/

WORKDIR /var/texas

COPY target/texas /var/texas/
COPY target/config.toml /var/texas/data/
COPY /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

CMD ["/var/texas/texas"]
