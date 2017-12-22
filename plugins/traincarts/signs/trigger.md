---
title: trigger を使って線路上のトロッコを検出する
description: TrainCarts の trigger の使い方を解説します．
noToc: true
---

**Trigger** は，その上を走るトロッコを検出して変数に代入します．
この変数の内容は看板で表示することができます．

## 看板の書き方
TrainCarts の看板の書き方についてのルールは[このページ](/plugins/traincarts/signs)を参照してください．

|2行目|trigger|
|3行目|トリガの名前 (ユニーク)|
|4行目|カウントダウンの時間 mm:ss|

### トリガの名前
トリガの名前はユニークである必要があります．また文字数制限の関係からこの名前はできるだけ短い方が良いと思います．

### カウントダウン
このトリガの上をトロッコが通過したときからカウントダウンタイマをスタートできるのですが，その時間を mm:ss の形式で指定します．
例えば 1 分 30 秒なら 1:30 です．
これを利用することで，駅で後どのくらい待てばトロッコがやってくるか表示できます．

この欄を省略すると，TrainCarts が自動的に時間を測定します．トロッコが通過してから最初に停車するまでの時間が計測され，自動で看板に追記されます．

## 定義される変数
このトリガの上をトロッコが通過すると，TrainCarts は看板から参照可能な変数を定義します．

例えば，トリガの名前が `hoge` (3 行目が hoge) だった場合は以下のようになります．

|`%hoge%`|トロッコのカウントダウンの残り時間|
|`%hogeT%`|トロッコのカウントダウンの残り時間 (上と同じ)|
|`%hogeD%`|トロッコの目的地 (destination)|
|`%hogeN%`|トロッコの表示名|

## トロッコを看板で表示する例
<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">TrainCarts <a href="https://t.co/7Hw5Ccv3JR">pic.twitter.com/7Hw5Ccv3JR</a></p>&mdash; k5342 (@k5342) <a href="https://twitter.com/k5342/status/944191138466074625?ref_src=twsrc%5Etfw">December 22, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## 外部ソース
* [https://minecraft.gamepedia.com/Custom_servers/Bukkit/TrainCarts/Signs/Trigger](https://minecraft.gamepedia.com/Custom_servers/Bukkit/TrainCarts/Signs/Trigger)

{% include related/TrainCarts.md %}
