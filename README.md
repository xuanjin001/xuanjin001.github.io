# Personal websiste

Xuan's personal website built with HUGO

## Log

10.26.24

Added encryption and decryption

```
./hugoArticleEncryptor-darwin-arm64
```

Github used, the following code:

https://github.com/hotjuicew/hugoArticleEncryptor/releases/tag/stable

https://github.com/hotjuicew/hugoArticleEncryptor

https://juicebar-demo.add1.dev/post/encrypted_article/

Note:

-   With how the binary file is built on the above, the password encode won't test correct in dev environment, but when you publish it to prod, it will work
-   the above binary file needs to be granted chmod access, currently using `chmod 777` which is everything
-   every time when running `./hugoArticleEncryptor-darwin-arm64`, it will reload the ./static/js/AESDecrypt.js
-   Add `localStorage.clear();` to `localStorage.getItem()` to clear cookies every time page reloads
-   10.26.24 manually changed in xuanjin.github.io after build
-   `python3 -m http.server -b 0.0.0.0 -d public 1313` build
-   need to leave the `<!--more-->` there

11.1.24

-   Added in google analytics, with help of https://gideonwolfe.com/posts/sysadmin/hugo/hugogoogleanalytics/#note
