---
title: tskserver で遊ぶ準備
date: 2017-11-29
noToc: true
description: このページでは tskserver で遊ぶための設定方法を解説します
weight: 100
---

このページでは tskserver で遊ぶための設定方法を解説します。大雑把に、以下のような手順になります。

1. Minecraft Launcher でゲームクライアントのバージョンを設定する
1. サーバを追加する
1. サーバに接続する

## Minecraft のバージョン確認＆起動
サーバへ接続するには、Minecraft バージョンを tskserver のバージョンと揃える必要があります。
Minecraft Launcher を起動したら、バージョンが **{{<var servers.tskserver.version_short >}}** に設定されているかどうかを確認してください。

Minecraft **Bedrock Edition** や Minecraft **Windows 10 Edition** では接続できません  
お持ちの Minecraft が Minecraft **Java Edition** であるかどうかをよく確認してください！
{ .note .warning }

tskserver のバージョン情報はこのサイト上部の[サーバ情報](/about)のページでも確認できます。
{ .note .info }

バージョンは赤枠の部分に表示されます (この画像では **1.17** が起動する設定であることが分かります)。
![Minecraft のバージョン確認方法](/introduction/img/launcher1.png)

バージョンが違う場合は設定変更が必要ですので、[Minecraft バージョン変更方法](/introduction/change-version)のページを参照してください。

Minecraft Launcher に表示されるバージョンが正しいことを確認 ({{<var servers.tskserver.version >}} です！) したら、Minecraft を起動します。

## サーバを追加する
接続先は以下になっていますので設定してください。  

サーバ追加方法の手順をスクリーンショット付きで確認したい方は[Minecraft サーバの追加方法](/introduction/add-server)のページを参照してください
{ .note .info }

| サーバアドレス |
|:------:|
| {{<var servers.tskserver.host >}} |

## サーバに接続する
サーバ設定が終わると、サーバ情報が表示されますので接続します。接続したいサーバを選択してから「サーバに接続」ボタンをクリックします。

![サーバに接続する](/introduction/img/connect-server.png)

以下のような画面になればサーバ接続完了です。
![サーバに接続した後の画面](/introduction/img/logined.png)

これでサーバ設定とサーバ接続が完了しました。[次のページ](/introduction/day1)ではサーバに接続した後の操作について紹介します。

## サーバに接続できない場合
サーバに接続できないときは、エラーを一度確認してください。小さくかかれた文字にヒントが書いてあることがあります。
多くの場合は一時的なものなので 5 分程度待つか、Minecraft を再起動すれば治るものだと思います。

一方で、本当にサーバが落ちていることも有りえます。
そのときは [Minecraft 外の便利ツール](/introduction/tools)を使って情報収集してサーバが落ちているかどうか確認してください。

