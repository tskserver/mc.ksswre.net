---
title: 開放コマンド一覧
date: 2021-06-20
permalink: /commands/
description: 現在の tskserver で通常ユーザが利用可能な Minecraft コマンド一覧。用法・用量を守って楽しく遊びましょう。コマンドを途中で忘れた場合は、Tab キーを押すと補完候補を出してくれることがあります。
---

現在の tskserver で通常ユーザが利用可能なコマンド一覧。

用法・用量を守って楽しく遊びましょう。

コマンドは `/` (スラッシュ) で始まる文字列です。コマンドは <kbd>T</kbd> を入力してチャット入力画面を出してから入力します。
コマンドを途中で忘れた場合は、`<tab>`キーを押すと補完候補を出してくれることがあります。



## Dynmap
Dynmap はリアルタイムマップのプラグインです。マップにマーカーを追加できる設定にしています。  
表示はこちらから： <https://dynmap.mc.ksswre.net/>

### マーカを設定する
Dynmap にマーカを表示します。ランドマークや道案内に便利です。

公式ドキュメント(英語) [https://github.com/webbukkit/dynmap/wiki/Using-markers](https://github.com/webbukkit/dynmap/wiki/Using-markers)

#### マーカの一覧を表示 (dmarker list)
現在設定されているマーカの一覧を表示します。
```
/dmarker list
```

#### マーカを追加 (dmarker add)
Dynmap にマーカを追加します。コマンドが成功すると `マーカの表示名` のラベルが付いた Dynmap に追加されます。
```
/dmarker add マーカの表示名 icon:アイコン名 set:マーカセット名
```

- **マーカの表示名**: マーカの表示名を指定します。ここで指定した文字列がそのまま表示されます。日本語でも大丈夫です
- **icon:アイコン名**: (省略可能) `アイコン名` でマーカの表示アイコンを指定します。利用できるアイコンは[こちら](/img/dynmap-markers.png)を参照。省略した場合は house アイコンになります
- **set:マーカセット名**: (省略可能) マーカセット名。省略するとデフォルトマーカセットになります。

#### マーカを現在位置に移動 (dmarker movehere)
指定したマーカを現在の場所に移動します。マーカの位置を修正できます
```
/dmarker movehere マーカの表示名 set:マーカセット名
```

- **set:マーカセット名**: (省略可能) マーカセット名。省略するとデフォルトマーカセットになります。

#### マーカの表示名変更・アイコン変更 (dmarker update)
指定したマーカの表示名やアイコンを変更します。

```
/dmarker update マーカの表示名 set:マーカセット名 icon:アイコン名 newlabel:新しい表示名
```

- **icon:アイコン名**: (省略可能) `アイコン名` でマーカの表示アイコンを指定します。利用できるアイコンは[こちら](/img/dynmap-markers.png)を参照。省略した場合は house アイコンになります
- **newlabel:新しい表示名**: (省略可能) 新しい表示名
- **set:マーカセット名**: (省略可能) マーカセット名。省略するとデフォルトマーカセットになります。

#### マーカの削除 (dmarker delete)
指定したマーカを削除します。

```
/dmarker delete マーカの表示名 set:マーカセット名
```

- **set:マーカセット名**: (省略可能) マーカセット名。省略するとデフォルトマーカセットになります。

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

