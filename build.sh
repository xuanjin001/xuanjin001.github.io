set -x

hugo version

curl -sSfL -o hugoArticleEncryptor-darwin-arm64 "https://github.com/hotjuicew/hugoArticleEncryptor/releases/download/stable/hugoArticleEncryptor-linux-amd64"

chmod 777 ./hugoArticleEncryptor-darwin-arm64

ls -lha

ls -lha themes 

./hugoArticleEncryptor-darwin-arm64

