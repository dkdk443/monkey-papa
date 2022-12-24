# WEBページ

## 導入手順

- envファイルをコピーする
```
cp .env.development-template .env.development
```

- FacebookAPIのGATSBY_ACCSESS_TOKEN等を入力する
```
GATSBY_ACCSESS_TOKEN={YOUR_FACEBOOK_ACCSESS_TOKEN}
GATSBY_BUSINESS_ID={YOUR_FACEBOOK_BUSINESS_ID}
```

- Dockerを立ち上げる ※Docker Desctopを立ち上げてください
```
docker-compose up -d --build
```

### 利用技術
- HTML/CSS(SCSS)
- JavaScript
- React
- Gatsby
- Docker
- Graphgl
