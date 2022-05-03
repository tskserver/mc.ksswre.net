---
title: サーバ情報
date: 2021-06-20
permalink: /about/
noToc: true
description: Minecraft サーバ、tskserver のサーバ情報。サーバマシンのスペックや接続するための情報、ワールド構成についてまとめています。
image: /img/2021-06-29_00.28.46.png
---

## tskserver について
tskserver は Minecraft Java Edition のパブリックサーバです。つくさーばと読みます。特徴は以下のような感じです

- 効率強化系プラグインの導入 (木こり MOD やテレポートなど、バニラの範囲でそれなりに)
- なるべく最新の Minecraft バージョンに追従する (なるべくプラグインの更新は待たない)
- メジャーバージョンアップではメインワールドまるごとリセットする
- ゆるめの運営 (落ちるときもある、不調なときもある、なるべく頑張る)

導入済みプラグインの情報については[プラグイン紹介](/plugins)のページを参照ください
{ .note .info }

初めてのログインの場合は事前に[サーバ参加ガイド](/introduction)をご確認ください
{ .note .warning }

## 接続情報
tskserver に接続するために必要になる情報です。

サーバに接続できない場合は[サーバ稼働状況](/status)のページを参照ください
{ .note .info }

|||
|:---|:---|
| アドレス               | {{<var servers.tskserver.host>}} |
| Minecraft バージョン   | {{<var servers.tskserver.version>}} |
| Dynmap                 | {{<var servers.tskserver.dynmap_url >}} |
| ワールドリセット実施日 | {{<var servers.tskserver.last_reset_at >}} |
| メンテナンス実施日     | {{<var servers.tskserver.last_maintenance_date >}} |


## ワールドリセット情報
最新のワールドリセットは {{<var servers.tskserver.last_reset_at >}} で、バージョンは {{<var servers.tskserver.version >}} です。

過去のリセット前のワールド情報については[ワールド紹介](/worlds)を参照ください
{ .note .info }
