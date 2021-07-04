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

{: .note .info }
導入済みプラグインの情報については[プラグイン一覧](/plugins)のページを参照ください

{: .note .info }
サーバが落ちた場合のトラブルシューティングは[サーバ稼働状況](/status)のページを参照ください

## サーバ参加方法
興味のある方は[サーバ参加ガイド](/introduction)を用意していますので参照してみてください。

### 接続情報
tskserver に接続するために必要になる情報です。

{: .note .warning }
初めてのログインの場合は事前に[サーバ参加ガイド](/introduction)をご確認ください

{% assign server = site.data.servers.tskserver %}

| アドレス             | {{ server.host }} |
| Minecraft バージョン | {{ server.version }} |
| Dynmap | <{{ server.dynmap_url }}> |

### サーバに接続できない場合
[サーバ稼働状況](/status)のページをご確認ください。


{% comment %}
### Minecraft Unusual Skyblock サーバ

Minecraft 1.9.4 と 1.9.2 のプロトコルは互換性ないので注意。

|アドレス        |Minecraft バージョン|
|:--------------:|:------------------:|
|mc.ksswre.net   |Minecraft 1.9.4     |


|The Unusual Skyblock バージョン|
|:-----------------------------:|
|ver11.0.1                      |

## tskserver のワールドについて
tskserver では、クリエイティブモードや他の便利プラグインを使って、建築に集中できるようにしています。
一方で、サバイバルの要素のゲームバランスを崩さないようにするため、ワールドごとに一定の制限もかけています。
{% include multiworld.md %}

{% endcomment %}

## ワールドリセット情報
最新のワールドリセットは {{ site.data.servers.tskserver.last_updated_at }} で、バージョンは {{ site.data.servers.tskserver.version }} です。

{: .note .info }
過去のリセット前のワールド情報については[ギャラリー](/galleries)を参照ください

![](/img/2021-06-29_00.28.46.png)

