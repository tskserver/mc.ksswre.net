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
Dynmap はリアルタイムマップのプラグインです。

マップの表示はこちらから → <https://dynmap.mc.ksswre.net/>
{ .note .info }

### マーカを設定する
tskserver では一般権限で Dynmap にマーカーを追加できるような設定にしています。  

マーカセット、アイコン名などは省略可能。
マーカセットはマーカの数が多くなったときに整理するための機能です。省略するとデフォルトのマーカセットになります。
アイコンは省略すると default (家のマーク) になります。利用できるアイコンは[こちら](/img/dynmap-markers.png)を参照。

コマンド | 説明
:-----|:-----
`/dmarker list` | 現在設定されているマーカの一覧を表示します。
`/dmarker add マーカの表示名 icon:アイコン名 set:マーカセット名` | Dynmap にマーカを追加する。コマンドが成功すると `マーカの表示名` のラベルが付いたマーカが Dynmap に追加されます。
`/dmarker movehere マーカの表示名 set:マーカセット名` | 指定したマーカを現在の場所に移動する
`/dmarker update マーカの表示名 set:マーカセット名 icon:アイコン名 newlabel:新しい表示名` | 指定したマーカの表示名やアイコンを変更します。
`/dmarker delete マーカの表示名 set:マーカセット名` | 指定したマーカを削除する

### 関連ページ
- 公式ドキュメント(英語) ... <https://github.com/webbukkit/dynmap/wiki/Using-markers>


## WorldEdit
コマンドを用いた地形操作をできるようにします。

現在の Minecraft バージョンでは一般開放していません。しばらくおまちください
{ .note .info }


### コマンド

コマンド | 説明
:-----|:-----
`//set <block>` | 選択範囲を `block` に置き換える
`//replace <block1> <block2>` | 選択範囲の `block1` を `block2` に置き換える
`//fill <block> <radius> [depth]` | 自分の周り半径 `radius` を深さ `depth` のブロック `block` で埋める
`//drain <radius>` | 自分の周り半径 `radius` 内にある水や溶岩を連鎖的に消す (吸い込む)
`//move <distance> [direction]` | `direction` 方向に `distance` ブロック分移動する
`//stack <count> [direction]` | `direction` 方向に `count` 回繰り返しコピーする
`//undo` | もとにもどす
`//redo` | (もとにもどしたものを) すすめる


### 各種パラメータ

ブロック名とブロック ID は以下のサイトを参考  
**Minecraft ID List** - [http://minecraft-ids.grahamedgecombe.com](http://minecraft-ids.grahamedgecombe.com)
{ .note .info }

- `block` ... ブロック名。ブロック名かブロック ID (非推奨) で指定する
- `direction` ... `u`, `d`, `e`, `w`, `s`, `n` (上、下、東、西、南、北) で指定可能。

### 範囲選択

#### 木の斧を使った範囲選択

1. 木の斧を使って右クリックすると座標 1 (pos1) が記録される
1. 木の斧を使って右クリックすると座標 2 (pos2) が記録される
1. 座標 1 と座標 2 の二点が対角線となる直方体が選択範囲として定義される

#### コマンドによる範囲選択
- `//chunk` ... 現在のチャンクをすべて選択

### 関連ページ
- <https://worldedit.enginehub.org/en/latest/commands/>
- <https://lilly-wizard.tumblr.com/post/8467284834>
