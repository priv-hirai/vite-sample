# Vite 環境構築

## ■参考サイト
https://coding-memo.work/development/1274/

## コマンド
### npm run dev
「npm run dev」で開発サーバが起動するようになります。
### npm run build
「npm run build」でdist/ディレクトリに公開用のファイル一式が書き出されます。

## 想定しているディレクトリ構成
```
■プロジェクトディレクトリ
 ┣ dist （ビルドしたファイルが出力される場所）
 ┣ package.json （プロジェクトのjsonファイル）
 ┣ postcss.config.cjs （PostCSSの設定ファイル）
 ┣ vite.config.js （viteの設定ファイル）
 ┣ .jsbeautifyrc （任意：HTML整形プラグインjs-beautifyの設定ファイル）
 ┃
 ┣ node_modules （編集不要：自動生成されるコアファイル格納場所）
 ┣ package-lock.json （編集不要：インストールしたパッケージ情報などが記載されている）
 ┃
 ┗ src
    ┣ index.html
    ┣ xxx.html （複数ページを追加する場合）
    ┃
    ┣ components （HTMLのコンポーネントパーツを格納）
    ┃  ┗ header.html
    ┃    xxx.html ...
    ┃
    ┣ js （メインのモジュールJSファイルを格納）
    ┃  ┗ main.js
    ┃
    ┣ public （Viteの変換対象外のディレクトリ。distに中身がそのままコピーされます。）
    ┃  ┗ assets （そのまま移動させたいファイルを必要に応じて格納していく）
    ┃     ┣ fonts
    ┃     ┃  ┗ xxx.woff2 ...
    ┃     ┣ js
    ┃     ┃  ┗ xxx.js ...
    ┃     ┗ images
    ┃       ┗ xxx.jpg ...
    ┃
    ┗ scss
       ┣ style.scss
       ┗ （各記法に合わせたディレクトリ構成）
```
