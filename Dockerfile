# alpine need CGO_ENABLED=0, sqlite need CGO_ENABLED=1 ...
FROM ubuntu:22.10

ENV GO111MODULE=on
ENV GOPROXY=https://goproxy.cn
ENV LANG C.UTF-8

RUN mkdir -p /var/texas/data/ \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo 'Asia/Shanghai' > /etc/timezone

WORKDIR /var/texas

COPY target/texas /var/texas/
COPY target/data/config.toml /var/texas/data/

CMD ["./texas"]
