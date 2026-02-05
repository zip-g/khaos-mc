# Sophisticated Storage：使い方ガイド（クライアント向け）

このページでは、**Sophisticated Storage** の基本的な使い方と、
本サーバー環境（Fabric 1.20.1）で知っておくべきポイントをまとめています。

Sophisticated Storage は  
**高機能チェスト＋拡張モジュール**を組み合わせて使う収納MODです。

## Sophisticated Storageとは

- 通常チェストの上位互換
- GUIが高機能（検索・ソート・自動化）
- モジュールによって挙動を細かく制御可能

Create・Farmers Delight・各種自動化MODと非常に相性が良いです。

## 追加される主なストレージ

### バレル / チェスト系

- Sophisticated Barrel
- Sophisticated Chest

特徴：
- 容量が大きい
- モジュールスロットを持つ
- ホッパー・Create搬送と連携可能

### ストレージのアップグレード

- Iron / Gold / Diamond / Netherite
- 容量が段階的に増加
- 後から差し替え可能

## 基本操作（GUI）

### インベントリ操作

- 🔍 検索バー：アイテム名で即検索
- ⇅ ソートボタン：種類・名前順など
- 🔒 ロック：スロットを固定

### フィルター設定

- 特定アイテムのみ受け入れ
- 逆に特定アイテムを拒否
- 自動仕分けに必須

## モジュールの使い方

Sophisticated Storage の要となる要素です。

### 主なモジュール例

#### Pickup Upgrade
- 拾ったアイテムを自動収納
- 探索・採掘向け

#### Filter Upgrade
- 受け入れるアイテムを制限
- Create搬送の終点におすすめ

#### Void Upgrade
- 指定アイテムを破棄
- 丸石・土などの処理用

#### Stack Upgrade
- 1スロットあたりの最大量を増加
- 大量生産ライン向け

#### Redstone Upgrade
- レッドストーン信号で動作制御
- ON/OFF管理が可能

## Createとの連携ポイント

本サーバーでは Create と併用するケースが多いため、以下が重要です。

- ベルト・シュートで直接搬入可能
- フィルター必須（詰まり防止）
- Void Upgradeで副産物処理

**Createの出口＝Sophisticated Storage**  
という構成が非常に安定します。

## 推奨構成例

### 自動農場

- Storage：Barrel
- Filter Upgrade：作物のみ
- Void Upgrade：種・不要物
- Stack Upgrade：生産量対策

### 採掘拠点

- Pickup Upgrade
- Void Upgrade（丸石）
- 検索バー活用

## サーバー利用時の注意

- 無制限収納構成は非推奨
- Void Upgradeの設定ミスに注意
- 常時稼働Createラインと組み合わせる場合は負荷確認

特に以下は注意してください。

- 大量アイテムが詰まり続ける構成
- フィルターなしの全受け入れ

## よくあるトラブル

- アイテムが入らない  
→ フィルター設定を確認

- 勝手に消える  
→ Void Upgradeの誤設定

- Createが止まる  
→ ストレージ満杯 or 搬送詰まり

## まとめ

- 高性能だが設定が重要
- フィルターとモジュールが命
- Createと組み合わせると真価を発揮

Sophisticated Storage を正しく使うことで、  
**拠点の整理・自動化が一気に快適**になります。
