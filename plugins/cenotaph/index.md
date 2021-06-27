---
title: Cenotaph
noToc: true
---

**Cenotaph** はプレイヤーがデスしたときにデスチェストを作成するサーバプラグインです。デスチェストにはインベントリ内の全アイテムの格納を試みます。

cenotaph は慰霊碑という意味のとおり、デスチェストには **RIP {プレイヤー名}** と看板が建ちます。

## 配布元
- <https://www.spigotmc.org/resources/cenotaph.2180/>
- <https://github.com/cindyker/Cenotaph>

## 使い方
### デスチェストの作成
プレイヤーがインベントリにチェストを持った状態で倒されると、Cenotaph はデスチェスト (シングルチェスト) をプレイヤーの足元に自動生成します。
デスチェストにはインベントリの内容物が自動的に格納されますが、チェストから溢れた場合はその場に散らばります。

このデスチェストは時限式で、**60 分で自動消滅** (Remove / Removal) します。

Cenotaph のデスチェストはデフォルト設定で TNT の爆破耐性を持ちます (`tntProtection: true`)。クリーパーはだめです (`creeperProtection: false`)。
火炎耐性あたりは・・どうだったかな。

デスチェストを他のプレイヤーが破壊することもできません (`noDestroy: true`)。

### デスチェストの回収
デスチェストを右クリックすると、デスチェストの内容物が自動回収されます (`destroyQuickLoot: true`, `cenotaph.quickloot` 権限の付与)。

## コマンド
デフォルトで OP 以外のプレイヤーは以下のコマンドを使用できます。
- `/cenlist` ... デスチェストの一覧と座標を表示します。
- `/ceninfo X` ... デスチェストの情報を表示します。表示されるのは消滅までの残り時間など。`X` は数値かプレイヤー名です。数値は `/cenlist` で調べます。
- `/cenfind` ... デスチェストの方角と距離を表示します。プレイヤーに具体的な座標を教えたくない場合はこのコマンドだけを解禁するといいかも。

OP は以下のコマンドを使用できます。
- `/cenadmin list`
- `/cenadmin list <player>`
- `/cenadmin find <player> <#>`
- `/cenadmin remove <player> <#>`

詳しくはソースを見ると良いです: <https://github.com/cindyker/Cenotaph/blob/master/src/main/resources/plugin.yml>

## tskserver での追加設定

### ラージチェストのサポート
デスチェストをラージチェストで生成可能にしています (`cenotaph.large` 権限の付与)。
Cenotaph のデフォルト構成はシングルチェストが上限です。

### Dynmap 連携
Cenotaph がデスチェストを生成したとき、同時に [Dynmap](https://dynmap.mc.ksswre.net/) にマーカーを登録します (`dynmapEnable: true`)。マーカーの座標はデスチェストの生成位置です。

## 他の機能
Cenotaph ではその他に以下の設定が利用可能ですが、tskserver では使っていないか無効化されています。

- インベントリ内にチェストが無い場合のデスチェスト生成 (`cenotaph.freechest` 権限の付与)
- プレイヤーレベルに応じて消滅時間を変更する (`levelBasedRemoval: false`)
- チェストロックプラグインとの連携 (`LocketteEnable: true`, `lwcEnable: false`)
- 経済プラグインとの連携 (`moneyTake: 0`)
- WorldGuard との連携 (`worldguardSupport: false`)
