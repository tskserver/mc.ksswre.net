---
title: サーバ稼働状況
noToc: true
description: tskserver の稼働状況や直近のログイン人数についての情報を案内しています。
---

このページは、サーバへ接続できない場合のトラブルシューティングを提案するとともに、
tskserver の現在の接続状態や、過去 1 週間以内の接続数をまとめて確認できるページです。

## 接続ユーザ数の推移
直近一週間のサーバ接続人数の推移です。

![tskserver online users count by week](https://graph.ksswre.net/tskserver)

## サーバへ接続できないとき
このページ右にある Server Status 画面で、**Running?** と **Status** の表示を確認してください。

- **Running?** が <span class="green bold"><i class="fa fa-check" />Yes</span> の場合 → サーバは起動しています。以下の「サーバが起動しているのに接続できない場合」を参照ください
- **Running?** が <span class="red bold"><i class="fa fa-close" />No</span> の場合 → サーバは落ちています。以下の「サーバが落ちている場合」を参照ください
- なにも表示されない場合 → サーバ側が壊れています。「サーバが落ちている場合」を参照ください

### サーバが起動しているのに接続できない場合
Running? で <span class="green bold"><i class="fa fa-check" />Yes</span> と表示されているにもかかわらず、接続できない場合は [Dynmap]({{ site.data.servers.tskserver.dynmap_url }}) でログイン中のユーザがいるかどうかを確認してみてください。誰かがログインできている場合はサーバ以外の不調が考えられます。  
誰もログインしていない場合は切り分けのために [Twitter](https://twitter.com/intent/tweet?text=@k5342%20tskserver%20%E7%B9%8B%E3%81%92%E3%81%AA%E3%81%84%E3%82%93%E3%81%A0%E3%81%91%E3%81%A9%EF%BC%9F) でお知らせください。

### サーバが落ちている場合
<span class="red bold"><i class="fa fa-close" />No</span> の場合は意図せずサーバが落ちた場合とサーバを畳んでいる場合があります。お問い合わせください

## 資料たち
この Web サイトである程度まとめているので参照ください。

### サーバ接続ガイド
初めて tskserver へ接続する人向けの解説記事。前半は Minecraft バージョンの合わせ方や接続設定を詳しく書いています。

* [サーバ接続ガイド](/introduction)

### メンテナンス情報やお知らせ
お知らせはこの Web サイトでまとめて参照可能です。たまに Twitter のハッシュタグで雑なお知らせを流すことがあります。

* [mc.ksswre.net - アップデート・メンテナンス情報](https://mc.ksswre.net/tag/update)
* [mc.ksswre.net](https://mc.ksswre.net/)
* Twitter [#tskserver](https://twitter.com/search?f=tweets&vertical=default&q=%23tskserver)

