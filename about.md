---
title: サーバ情報
date: 2021-06-20
permalink: /about/
noToc: true
description: Minecraft サーバ、tskserver のサーバ情報。サーバマシンのスペックや接続するための情報、ワールド構成についてまとめています。
image: /img/2021-06-29_00.28.46.png
---

## tskserver について
tskserver は Minecraft Java Edition のパブリックサーバです。特徴は以下のような感じです

- なるべく最新の Minecraft バージョンに追従する
- 効率強化系プラグインの導入 (木こり MOD やテレポートなど、それなりに入っている)
- メジャーバージョンアップではメインワールドまるごとリセットする
- ゆるめの運営 (落ちるときもある、不調なときもある、なるべく頑張る)

## サーバ参加方法
興味のある方は[サーバ参加ガイド](/introduction)を用意していますので参照してみてください。

## 接続情報
tskserver に接続するために必要になる情報です。

{: .note .info }
初めてのログインの場合は事前に[サーバ参加ガイド](/introduction)をご確認ください

{: .note .info }
サーバに接続できないときは[サーバ稼働状況](/status)のページを確認すると解決するかもです

{% assign server = site.data.servers.tskserver %}

| アドレス             | {{ server.host }} |
| Minecraft バージョン | {{ server.version }} |
| Dynmap | <{{ server.dynmap_url }}> |


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
最新のワールドリセットは 2021 年 6 月 18 日で、バージョンは {% include latest_version.md %} です。
![](/img/2021-06-29_00.28.46.png)

