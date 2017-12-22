---
title: station を定義する
description: TrainCarts で station を定義する方法について解説します．
noToc: true
---

**station** は**駅**です．
TrainCarts では，駅は看板を使って定義します．
これを使うと，そこを通過しようとするトロッコは一度停車してから，再度発進します．

## 看板の書き方
TrainCarts の看板の書き方についてのルールは[このページ](/plugins/traincarts/signs)を参照してください．

|2行目|station|
|3行目|トロッコが停止する秒数を数字で|
|4行目|トロッコが出発する方向|

出発する方向は，`left`, `right`, `continue`, `reverse` が使えます．それぞれ，(看板に向かって) 左方向，右，元々のトロッコの進行方向，その逆です．

## 外部ソース
* [https://minecraft.gamepedia.com/Custom_servers/Bukkit/TrainCarts/Signs/Station](https://minecraft.gamepedia.com/Custom_servers/Bukkit/TrainCarts/Signs/Station)

{% include related/TrainCarts.md %}
