---
title: Minecraft バージョンの変更方法
date: 2021-06-29
noToc: true
---

この記事では Minecraft バージョンの設定方法をスクリーンショット付きで解説します。
この記事では 2021/06/29 現在の Minecraft Launcher のスクリーンショットをベースに解説していますが、おおよその操作方法はバージョン間で共通のはずです。

Minecraft サーバの接続設定の全容については [tskserver で遊ぶ準備](/introduction/prepare) を参照してください。

## Minecraft Launcher の起動
Minecraft Java Edition の Minecraft Launcher を起動します。Minecraft Launcher を起動すると以下のような画面になるはずです。

![Minecraft Launcher 起動画面](/introduction/img/launcher0.png)

## Minecraft バージョンの確認
Minecraft Launcher では起動する Minecraft のバージョンが表示されます。赤枠の部分を見るといいです。
この画像の場合では **Minecraft Java Edition** の **1.17** が起動することが分かります。

ここに表示されるバージョンがサーバの Minecraft バージョンと違う場合は、下記の「Minecraft バージョンの変更」に従って起動構成を変更する必要があります。

![Minecraft Launcher での Minecraft バージョン情報の確認](/introduction/img/launcher1.png)

## Minecraft バージョンの変更
今回は Minecraft Launcher の設定を変更して **Minecraft Java Edition 1.16.5** を起動してみます。
Minecraft Launcher では「起動構成」という単位でゲームを管理しています。今回は新しく Minecraft 1.16.5 用に起動構成を作成・追加してみます。

このページでは Minecraft Java Edition **1.16.5** に変更する例を紹介しています。現在稼働中のサーバは **{{ site.data.servers.tskserver.version }}** なので、ご注意ください！
{ .note .warning }

### 起動構成を開く
画面上部にある「起動構成」をクリックしてから「New Installation」ボタンをクリックします。
![起動構成の画面](/introduction/img/launcher2.png)

### 起動構成の作成
バージョンをお好みのバージョンにします。今回は Minecraft Java Edition の **1.16.5** に変更する例ですので **release 1.16.5** を選択します。

現在稼働中のサーバの対応バージョンは **{{ site.data.servers.tskserver.version }}** です。tskserver に接続される方は適宜読み替えてください！
{ .note .info }

選択したら「作成」ボタンをクリックします。
![起動構成の作成画面](/introduction/img/launcher3.png)

### 作成した起動構成で Minecraft を起動する
うまく設定できていれば、バージョン名が書かれた項目が起動構成に追加されているはずです！起動は「プレイ」ボタンを押します
![起動構成追加後の画面](/introduction/img/launcher4.png)

必要に応じて Minecraft Launcher が起動に必要なファイルをダウンロードします。このダウンロードは自動で始まるはずです。しばらく待つと Minecraft が指定バージョンで起動するはずです。
![Minecraft 起動中の画面](/introduction/img/launcher5.png)

Minecraft が起動すれば、設定は完了です！次はサーバに接続してみましょう。続きは [tskserver で遊ぶ準備](/introduction/prepare) で解説しています。
