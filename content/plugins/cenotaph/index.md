---
title: Cenotaph
noToc: true
---

**Cenotaph** はプレイヤーがデスしたときにデスチェストを作成するサーバプラグインです。デスチェストにはインベントリ内の全アイテムの格納を試みます。

cenotaph は慰霊碑という意味のとおり、デスチェストには **RIP {プレイヤー名}** と看板が建ちます。

## 配布元
- <https://www.spigotmc.org/resources/cenotaph.2180/>
- <https://github.com/cindyker/Cenotaph>

## 機能
### デスチェストの自動生成
プレイヤーが死亡すると足元にデスチェストを自動生成してインベントリの内容を格納します。チェストから溢れた場合はその場に散らばります。

デスチェストはインベントリ内にチェストが無い場合には生成されません
{ .note .warning }

![Cenotaph によるデスチェスト自動生成](./cenotaph-create.gif)


#### デスチェストの仕様
デスチェストの仕様は以下のようになっています。細かくサーバ設定で変更できる内容なのでサーバによって差がありますが、tskserver では以下の設定にしています。

- **時限式 (60 分で自動消滅)**
- TNT の爆破耐性あり (`tntProtection: true`)
- クリーパーの爆風で破壊される (`creeperProtection: false`)
- 他のプレイヤーは破壊できない (`noDestroy: true`)
- チェストの最大サイズはラージチェスト一個分 (`cenotaph.large` 権限の付与。デフォルト設定はシングルチェスト一個分です)
- デスチェストの座標が [Dynmap](https://dynmap.mc.ksswre.net/) のマーカとして自動登録される (`dynmapEnable: true`)
- 火炎耐性あり

### デスチェストからの回収
デスチェストを右クリックすると、デスチェストの内容物が自動回収されます。

![右クリックでデスチェストを自動回収する](./cenotaph-pickup.gif)

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

詳しくはソースコードを見ると良いです: <https://github.com/cindyker/Cenotaph/blob/master/src/main/resources/plugin.yml>

## 他の機能
Cenotaph ではその他に以下の設定が利用可能ですが、tskserver では使っていないか無効化されています。

- インベントリ内にチェストが無い場合のデスチェスト生成 (`cenotaph.freechest` 権限の付与)
- プレイヤーレベルに応じて消滅時間を変更する (`levelBasedRemoval: false`)
- チェストロックプラグインとの連携 (`LocketteEnable: true`, `lwcEnable: false`)
- 経済プラグインとの連携 (`moneyTake: 0`)
- WorldGuard との連携 (`worldguardSupport: false`)
