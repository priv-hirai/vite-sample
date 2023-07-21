import { defineConfig } from 'vite';

import { resolve } from 'path';

//import設定を追記
import handlebars from 'vite-plugin-handlebars';

// HTMLの複数出力を自動化する
//./src配下のファイル一式を取得
import fs from 'fs';
const fileNameList = fs.readdirSync(resolve(__dirname, './src/'));

//htmlファイルのみ抽出
const htmlFileList = fileNameList.filter(file => /.html$/.test(file));

//build.rollupOptions.inputに渡すオブジェクトを生成
const inputFiles = {};
for (let i = 0; i < htmlFileList.length; i++) {
  const file = htmlFileList[i];
  inputFiles[file.slice(0,-5)] = resolve(__dirname, './src/' + file );
  /*
    この形を自動的に作る
    input:{
      index: resolve(__dirname, './src/index.html'),
      list: resolve(__dirname, './src/list.html')
    }
  */
}
// マルチタイプページを作りたい場合は、下記に記述していく
// inputFiles["test"] = resolve(__dirname, './src/test/index.html');

export default defineConfig({
  base: './', //相対パスでビルドする
  root: './src', //開発ディレクトリ設定
  server: {//npm run dev 発行時に自動でブラウザに立ち上げる
    open: './',//URL指定
  },
  build: {
    outDir: '../dist', //出力場所の指定
    rollupOptions: { //ファイル出力設定
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          //Webフォントファイルの振り分け
          if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
            extType = 'fonts';
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          //ビルド時のCSS名を明記してコントロールする
          if(extType === 'css') {
            return `assets/css/style.css`;
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: 'assets/js/main.js',// main.jsに固定
        entryFileNames: 'assets/js/[name].js',
      },
      //生成オブジェクトを渡す
      input: inputFiles,
    },
    css: {
      devSourcemap: true,
    },
  },
  plugins: [
    handlebars({
      //コンポーネントの格納ディレクトリを指定
      partialDirectory: resolve(__dirname, './src/components'),
    }),
  ],
});
