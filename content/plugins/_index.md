---
title: プラグイン紹介
date: 2021-06-20 0:48
noToc: true
description: プラグインの紹介ページです。
---

プラグインの紹介ページです。

## 現在導入中のプラグイン
現在 tskserver に導入済みのプラグインです。詳しい使い方はリンクを貼っているので確認してみてください。

### [Cenotaph](/plugins/cenotaph)
デスチェストを作成するプラグインです。チェストがインベントリにある状態で自分が倒されたとき、その場に遺品を詰めたチェストを作ります。
1 時間経っても回収されない場合は消滅します。

<https://www.spigotmc.org/resources/cenotaph.2180/>

### LuckPerms
管理用プラグイン。通常ユーザが操作できるコマンドや動作に制限をかけたり、緩くしたりします。

<https://www.spigotmc.org/resources/luckperms.28140/>

### TreeAssist
いわゆる木こり MOD です。斧で原木ブロックを破壊すると連続する原木ブロックを連鎖的にアイテム化します。

素手で原木ブロックを破壊した場合は発動しません。また WorldEdit が有効の場合、木の斧では発動しません
{ .note .warning }

<https://www.spigotmc.org/resources/treeassist.67436/>

### WireRod
WireRod という立体機動な釣り竿を追加します。パスファインダーのグラップリングフックのような挙動をします。この釣り竿は先端を引っ掛けることで空高くジャンプできます。  

WireRod の使用中は落下ダメージを受けません
{ .note .info }

WireRod はクラフトで作製します。レシピは以下参照。

```
◯◯鉄
◯鉄糸
鉄◯糸

◯: 空欄
鉄: 鉄インゴット
糸: クモ糸
```

<https://github.com/ucchyocean/WireRod>

### dynmap
開拓済みの地形を [Web ブラウザで表示](https://dynmap.mc.ksswre.net)できるようにします。

Dynmap では地図上にマーカを配置できるように設定しています。詳しくは[コマンド集](/commands)を参照ください
{ .note .info }


<https://www.spigotmc.org/resources/dynmap.274/>

### WorldEdit
コマンドを用いた地形操作をできるようにします。

現在の Minecraft バージョンでは一般開放していません。しばらくおまちください
{ .note .info }

<https://dev.bukkit.org/projects/worldedit>

### WorldGuard
地形保護を追加します。プレイヤーごとの領域保護や、ワールド全体のクリーパー爆破保護など。

<https://dev.bukkit.org/projects/worldguard>

### [mcMMO](/mcMMO)
Minecraft に MMO 要素を追加します。スキル経験値という新しい概念を追加します。スキル経験値が貯まるといいことがたくさん起こるようになります。

<https://github.com/mcMMO-Dev/mcMMO>

### Mob Catcher
友好Mobに対して、shift+右クリックでMobを手に抱えることができます。
村人は役職なしでないと抱えられません。

<https://www.spigotmc.org/resources/mob-catcher.96642/>

## 過去に導入していたプラグイン
以下のプラグインは現在の tskserver では導入されていません。

### [TrainCarts](/plugins/traincarts)
トロッコを連結したり目的地を指定した自動運転の機能を追加したりできるプラグインです。パワードレールなしでの運行や速度制御もできます。

<https://www.spigotmc.org/resources/traincarts.39592/>
