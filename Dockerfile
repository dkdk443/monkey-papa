FROM alpine:3.16
ENV NODE_VERSION 18.12.1
WORKDIR /var/www/html/monkey-papa
RUN apk update && \
  apk add git npm build-base autoconf automake libtool pkgconfig nasm && \
  npm install -g gatsby-cli && \
  gatsby options set package-manager npm
EXPOSE 8000 9000