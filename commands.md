---
title: 開放コマンド一覧
date: 2021-06-20
permalink: /commands/
description: 現在の tskserver で通常ユーザが利用可能な Minecraft コマンド一覧。用法・用量を守って楽しく遊びましょう。コマンドを途中で忘れた場合は、Tab キーを押すと補完候補を出してくれることがあります。
---

現在の tskserver で通常ユーザが利用可能なコマンド一覧。

用法・用量を守って楽しく遊びましょう。

コマンドを途中で忘れた場合は、`<tab>`キーを押すと補完候補を出してくれることがあります。


## Dynmap

### Marker

* 公式ドキュメント(英語) [https://github.com/webbukkit/dynmap/wiki/Using-markers](https://github.com/webbukkit/dynmap/wiki/Using-markers)

* `/dmarker list` - 現在設定されているマーカの一覧を表示します。
* `/dmarker add <marker-label> icon:<icon-id> set:<markerset-id>` <br /> Dynmap のマーカを現在の場所に追加します。利用できるアイコンは[こちら](/img/dynmap-markers.png)を参照。`icon:` を省略すると、house アイコンになります。`set:` を省略するとデフォルトマーカセットの *Markers* になります。
* `/dmarker movehere <marker-label> set:<markerset-id>` <br /> `<marker-label>` で指定したマーカを現在の場所に移動します。`set:` はデフォルトマーカセットでないマーカを指定するときは省略できません。
* `/dmarker update <marker-label> set:<markerset-id> icon:<icon-id> newlabel:<new-label>` <br /> `<marker-label>` で指定したマーカの情報を更新します。ただし、マーカセットは変更できません。
* `/dmarker delete id:<marker-id> set:<markerset-id>` <br /> `<marker-label>` で指定したマーカを削除します。


## WorldEdit

&lt;block&gt; はブロック名かブロック ID (非推奨) を使用します。<br />
**Minecraft ID List**<br />
[http://minecraft-ids.grahamedgecombe.com](http://minecraft-ids.grahamedgecombe.com)

[direction] は u d e w s n (上、下、東、西、南、北) で指定可能。

* コマンド一覧(英語) - [http://wiki.sk89q.com/wiki/WorldEdit/Reference](http://wiki.sk89q.com/wiki/WorldEdit/Reference)
* [コマンド一覧](http://lilly-wizard.tumblr.com/post/8467284834/worldedit-%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E4%B8%80%E8%A6%A7%E6%97%A5%E6%9C%AC%E8%AA%9E%E7%89%88-ver2)

`//set <block>` | 選択範囲を &lt;block&gt; に置き換える
`//replace <block1> <block2>` | 選択範囲の &lt;block1&gt; を &lt;block2&gt; に置き換える
`//fill` | 埋める
`//drain` | 水や溶岩を連鎖的に消す(吸い込む)
`//move <distance> [direction]` | [direction] 方向に &lt;distance&gt; ブロック分移動する
`//stack <count> [direction]` | [direction] 方向に &lt;count&gt; 回繰り返しコピーする

