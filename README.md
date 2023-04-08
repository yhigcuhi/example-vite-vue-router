# example-vite-vue-router
vite + vue + vue routerでesm jsビルドしただけの資材でどうなるかの実験(SPAとして動くの)

# 作るもの(予定)
- 何ページかに渡る（URLが変わる） 入力フォームの画面をvue-routerで実現 (懸念点は画面が切り替わること)
- esm.jsの単品で配布できたら (最悪 nodejs上で動く リバースプロキシのサイト)
- 入力フォームの登録先APIへの通信
- FormKitでフォーム実現

# 構成
|使うもの|用途|
|:---|:---|
|vue|SPA|
|vue-router|画面切り替えは存在するので|
|FormKit vue|フォームのなんか|
|laravel|vueで実現した入力フォームの 登録通信先のAPI|
|nginx + 何か|esm.jsを配布した先で動くサイト|

## 一旦の資材構成
/vue-src (vite vueで作成した　実験する vueのプロジェクト)
    ┗━　src (vue ソース置き場)
    ┗━　vite (ビルドかようのvite)

# 環境構築: vue by vite
```bash
$ yarn create vite
```
でできたやつのプロジェクトの中身を vue-src直下に  

npm で追加するの下記  
- vite-plugin-css-injected-by-js
- @types/node  