# React用Docker環境

## Quick Start

```
docker-compose up -d
```

http://localhost:3000/

## Stop
```
docker-compose down
```

## プロジェクトの作成
```
docker-compose build
```

参考記事
https://blog.web.nifty.com/engineer/2714
## コンテナの中に入る
```
docker-compose exec web /bin/ash

docker-compose run --rm node sh -c "npm install -g create-react-app && npx create-react-app react-sample --template typescript"
```

## コンテナ内コマンド実行
runコマンド使用で外部から叩ける。コンテナの中に入っても同じように叩ける
```
docker-compose run web sh -c "ls /bin/"
```

## エイリアス
Makefileを作ったので、その中に記載してある

## 試してみたライブラリ
react-loader-spinner
https://www.npmjs.com/package/react-loader-spinner

