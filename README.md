## 環境構築手順

pullした状態で`docker-compose up`しても正常に立ち上がらない

Nextjs Django それぞれ別でプロジェクトを立ち上げる必要がある

フロントエンド、バックエンドそれぞれでコンテナを作成後、そのコンテナ内に入り、プロジェクト作成コマンドを実行する必要がある。

参考記事 : https://qiita.com/sinnlosses/items/1e60f89dc3b347a2f3c0

## 各種version

- Docker Compose version v2.12.2
- Django==3.2
- djangorestframework==3.14.0
- Python 3.11.3
- node v19.9.0
- next 13.3.0
