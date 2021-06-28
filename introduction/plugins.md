---
title: 少し違う遊び方
noToc: true
---

tskserver はバニラの Minecraft で遊ぶことが出来ますが、
バニラの範囲内で、少し派手なプラグインを幾つか追加しているので紹介します。
ここに書いてないプラグインもあるので、詳細は[プラグイン一覧](/plugins)を参照してください。

## 死んだときに自動でインベントリを退避する
Cenotaph という、デスチェストを設置してくれるプラグインを導入しています。
インベントリにチェストがあれば、ダメージを受けて死亡したときにその場にチェストを設置し、インベントリを保存してくれます。

あと tskserver はやさしいので、[Dynmap](https://dynmap.mc.ksswre.net) でデスチェストの位置が表示されるようにしています。
Dynmap の左上のレイヤーアイコンにマウスを重ねて、Cenotaphs チェックボックスをオンにしてください。

## 木の伐採の効率化
木こり MOD として TreeAssist を導入しています。
石以上の材質のオノを使って木を切ると、連鎖的に原木ブロックがアイテム化されます。

## スキルシステム
[mcMMO](/mcMMO) というプラグインが、レベルの概念や[スキル](/mcMMO)を追加してくれます。
あと [Party](/mcMMO/party) の概念もあって、近くに居れば経験値をシェアできます。

[スキル](/mcMMO)は例えば、落下ダメージを受けたときに貰える、[Acrobatics スキル](https://mc.ksswre.net/mcMMO/skills/acrobatics)があります。
Acrobatics スキルのレベルが上がると、落下ダメージを軽減する (Roll) 確率が上がったり、
敵 MOB と戦うときのダメージが軽減されたりと、いろいろ良いことがあります。

他には、[Excavation (発掘) スキル](https://mc.ksswre.net/mcMMO/skills/excavation)はショベルで土を掘ると経験値が貰えます。
このスキルはアクティブ能力として Giga Drill Breaker を持っていて、
ショベルを右クリックしてから土を掘ると発動し、ある時間だけメッチャ速くブロックを掘れます。
効果時間はレベルに依存していて、レベルが高いほど長くなります。

詳しくは[mcMMO](/mcMMO)ページにまとめています。

## MOB を捕まえる
MobCatcher というプラグインがあって、MOB にタマゴを投げるとスポーンエッグ化できます。
MOB の移動に便利。

[2017-11-24] 現在バグっていて、MobCatcher で獲得したスポーンエッグを使うと MOB が消えます。

## 立体機動装置で移動する
[WireRod](http://forum.minecraftuser.jp/viewtopic.php?f=38&t=21210&p=188854#p188854) というフックショットなプラグインがあります。
木の棒の代わりに鉄インゴットを使って釣り竿を作ると作製できます。
楽しい。


## [サーバ参加ガイド目次](/introduction)
* [tskserver について](/introduction/about)
* [tskserver で遊ぶ準備](/introduction/prepare)
* [Minecraft 外の便利ツールについて](/introduction/tools)
* **[少し違う遊び方](/introduction/plugins)**
* [コマンドを使った効率化](/introduction/commands)
* [高度な遊び方](/introduction/advanced)
