
## Google Form / SpreadSheetの準備

1. Google Formの回答タブで、回答をスプレッドシートにリンクする
![Google Formの回答をスプレッドシートにリンクする](./img/google-form.png)

2. SpreadSheetのメニューから「拡張機能」 > 「App Script」と選択する
![拡張機能からAppScriptを作成](./img/spread-sheet.png)

3. App Scriptのプロジェクト名を変更する
(初期状態では「無題のプロジェクト」となっているので、適当な名前にする)
![プロジェクト名を変更する](./img/app-script.png)


## Scriptの準備

### claspをインストール
```
yarn global add @google/clasp
```

### claspでGoogleログイン
```
clasp login
```

### .clasp.jsonを作成
`template.clasp.json` をコピーして　`.clasp.json` にリネームし、
`scriptId` を書き換える

`scriptId` はApp Scriptの左側画面の

![スクリプトID](./img/script-id.png)


### `mailTemplate.js` を編集

件名、本文を編集する
デフォルトで、フォーム投稿者が入力した `お名前` が入るようになっている。


### デプロイ

変更したコードをApp Scriptに反映する
```
clasp push
```

### トリガーの設定

App Scriptの左側メニューから「トリガー」を選択し、
下記の設定でトリガーを作成する

![トリガーの設定](./img/trigger.png)


