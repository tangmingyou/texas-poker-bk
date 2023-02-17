FROM ubuntu:22.10

ENV GO111MODULE=on
ENV GOPROXY=https://goproxy.cn

RUN mkdir -p /var/texas/data/

WORKDIR /var/texas

COPY target/texas /var/texas/
COPY target/data/config.toml /var/texas/data/
COPY target/data/localtime /etc/localtime

CMD ["./texas"]
