---
title: TrainCarts で看板を設置してトロッコを制御する方法
noToc: true
---

[TrainCarts](/plugins/traincarts) では、看板を設置することでトロッコの制御を行います。
看板は行単位で書く内容が決まっています。ここではそのルールを解説します。

## 1 行目
1 行目は `[train]` と書きます。これによってその看板が TrainCarts 用の看板であることを TrainCarts に教えます。
ちゃんと TrainCarts がその看板を認識できていれば、設置し終わったときに TrainCarts が何かしらのメッセージを表示してくるはずです。

一般に、TrainCarts の看板による制御はレッドストーンの動力を入力している間だけ有効化されます。
常に有効化していたいし、なによりも動力を入力するのが面倒という場合もあるでしょう。
この看板は動力なしで常に有効にすることもできて、そうしたい場合は `[+train]` にします。

## 2 行目
制御する種類を書きます。例えば駅として停止や発進を制御する `station`、その上を通過したトロッコを削除する `destroy` のような具合です。

利用可能なやつ。

{% include signs.md %}

## 3, 4 行目
3, 4 行目は 2 行目で選んだ種類によって書く内容が指定されている場合もあるし、何も書かなくて良い場合もあります。
詳しくは以下を参照してください。
また、[Wiki](https://minecraft.gamepedia.com/Custom_servers/Bukkit/TrainCarts/Signs#Types) に全部の機能が載っているのでこちらを参照してください。


## TrainCarts 関連記事

### [TrainCarts トップページ](/plugins/traincarts)

### [使い方・コマンド](/plugins/traincarts/howtouse)
* トロッコを連結する
* トロッコのパラメータを変更する
* 看板と連携して看板に行き先を表示する

### [トロッコを制御する](/plugins/traincarts/signs)
* トロッコを制御する
* トロッコの行き先を変更する
* トロッコを一時停止させる
* ... など
