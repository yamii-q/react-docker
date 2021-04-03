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

## コンテナの中に入る
```
docker-compose exec web /bin/ash
```

## コンテナ内コマンド実行
runコマンド使用で外部から叩ける。コンテナの中に入っても同じように叩ける
```
docker-compose run web sh -c "ls /bin/"
```

## 試してみたライブラリ
react-loader-spinner
https://www.npmjs.com/package/react-loader-spinner

