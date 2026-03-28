# SDD + Harness Spec
## Project
Rovy Family Monitor App Demo

## 0. Purpose
このドキュメントは、Rovyプロジェクトにおける「家族向け見守りアプリ」のデモ実装用 SDD である。
加えて、AIコーディングを安定させるための Harness を含む。
この文書は Codex に直接渡すことを前提とする。

---

## 1. One-line Summary
高齢者向け散歩型ペットロボット Rovy の家族向け見守りアプリを、提案書掲載用の高忠実度デモとして実装する。

---

## 2. Problem
Rovy の価値は「高齢者本人が、命令ではなく関係性によって外出したくなること」にある。
家族向けアプリは、その主価値を邪魔せず、散歩の実施状況や最近の活動量をやさしく確認できる補助体験として必要である。
今回必要なのは本番運用アプリではなく、未踏ジュニア提案書に載せられる現実的な実装イメージを持ったデモである。

---

## 3. Success Definition
以下を満たせば成功とする。

- 単一リポジトリ内でフロントエンドデモが起動できる
- 4画面が実装されている
  - ホーム
  - 散歩詳細
  - 履歴
  - 通知
- 画面遷移が成立している
- ダミーデータで UI が自然に表示される
- 日本語UIで統一されている
- デザインの一貫性がある
- 「監視アプリ」ではなく「やさしい見守り」に見える
- 実装は将来拡張しやすい構成になっている
- コードは過剰に複雑でない
- README に起動方法がある

---

## 4. Non-goals
今回は以下をやらない。

- 認証機能
- バックエンド接続
- DB
- 実際の地図API接続
- 実際の通知配信
- 実機GPS連携
- WebSocket
- 権限管理
- 本番品質のセキュリティ実装
- 完全なレスポンシブ最適化
- ダークモード
- 多言語対応
- テスト駆動での全面設計
- UI以外のRovyロボット制御機能

---

## 5. Product Positioning
このアプリは介護監視ツールではない。
主役はあくまで「高齢者本人」と「Rovy」の関係性である。
家族アプリは、その結果として生まれた散歩記録や安心材料を確認する補助体験である。
したがって、危険を煽る文言、医療機器的な表現、管理・強制のトーンは避けること。

---

## 6. Target User
- 主ユーザー: 離れて暮らす親を気にかける40〜60代の家族
- 関心:
  - 今日は散歩に行けたか
  - 最近どのくらい歩けているか
  - 無理なく元気に過ごせているか
  - 異常がないか
- 不快要因:
  - 監視感
  - アラート過多
  - 数字だらけで冷たい体験
  - 高齢者本人の尊厳を下げるUI

---

## 7. Screens
### 7.1 Home
表示内容:
- 「お母さんの今日の活動」などのタイトル
- 今日の散歩ステータス
- 散歩時間
- 距離
- 活動量
- Rovyのメッセージ
- 見守りステータス
- 過去7日間グラフ

期待体験:
- 一目で安心できる
- 今日歩けたかがすぐ分かる
- かわいすぎず信頼できる

### 7.2 Walk Detail
表示内容:
- 当日の散歩日付
- ルート表示用マップ風エリア
- 開始時刻 / 終了時刻
- 所要時間
- 距離
- 平均ペース
- 活動量
- Rovyの気分メモ
- 家族向け要約コメント

期待体験:
- 行動の解像度が上がる
- でもガチ運動アプリには見えない

### 7.3 History
表示内容:
- 週間サマリー
- 散歩日数
- 総距離
- 平均散歩時間
- カレンダー or リスト
- 最近の散歩一覧
- 軽いインサイト文

期待体験:
- 最近歩けているかが一目で分かる
- 継続性が感じられる

### 7.4 Notifications
表示内容:
- 散歩開始
- 帰宅
- 今日は短め
- まだ散歩未確認
- 通知設定
- 共有設定

期待体験:
- 落ち着いて見られる
- 不安を煽らない

---

## 8. Information Architecture
- App Shell
  - Top App Bar
  - Main Content
  - Bottom Navigation
- Routes
  - /home
  - /detail
  - /history
  - /notifications
- Shared UI
  - StatusCard
  - MetricCard
  - InsightBanner
  - SectionHeader
  - BottomNav
  - AvatarHeader
  - NotificationItem
  - WalkListItem

---

## 9. Technical Scope
推奨実装:
- React
- TypeScript
- Tailwind CSS
- Vite

理由:
- Codex が安定して生成しやすい
- 画面デモに十分
- 構成が軽い
- 提案書用スクショ取得に向いている

必須:
- コンポーネント分割
- 型定義
- ダミーデータ分離
- 画面ごとのファイル分割
- 単純明快なディレクトリ構成

---

## 10. Directory Structure
推奨構成:

src/
  app/
    App.tsx
    routes.tsx
  components/
    layout/
      TopBar.tsx
      BottomNav.tsx
      ScreenContainer.tsx
    cards/
      StatusCard.tsx
      MetricCard.tsx
      InsightBanner.tsx
      SafetyCard.tsx
    list/
      WalkListItem.tsx
      NotificationItem.tsx
    charts/
      WeeklyBarChart.tsx
    map/
      RouteMapMock.tsx
  pages/
    HomePage.tsx
    DetailPage.tsx
    HistoryPage.tsx
    NotificationsPage.tsx
  data/
    mockUser.ts
    mockWalks.ts
    mockNotifications.ts
  types/
    user.ts
    walk.ts
    notification.ts
  styles/
    theme.ts
    globals.css

---

## 11. Domain Model
### User
- id
- displayName
- relationLabel
- avatarUrl

### WalkRecord
- id
- date
- startTime
- endTime
- durationMinutes
- distanceKm
- avgPaceText
- activityLevel
- routeName
- rovyMoodMemo
- summaryComment
- status

### Notification
- id
- type
- title
- body
- timestamp
- level
- read

### WeeklySummary
- walkDays
- totalDistanceKm
- averageMinutes
- dailyBars[]

---

## 12. UI Style Rules
- 白ベース
- 暖色を少し含んだ自然な配色
- 緑とオレンジをアクセントに使う
- 角丸カード
- 余白多め
- 情報密度は中程度
- 医療アプリ風にしすぎない
- 子供っぽくしない
- スタートアップの実在UIに見える現実感を重視
- アイコンは Material Symbols 系で統一可
- 日本語の自然なコピーを使う

---

## 13. Copy Guidelines
使ってよい方向:
- 今日も元気に過ごされています
- 今日の公園ルートは楽しかったようです
- 無理のない範囲でしっかり歩けています
- 先週より少し多く歩けています

避ける方向:
- 危険です
- 要注意
- 管理対象
- 指示
- ノルマ
- 達成率
- 異常値を過剰に煽る表現

---

## 14. Harness Definition
### 14.1 What is Harness
ハーネスとは、AIエージェントを賢くするためにモデル自体を変えるのではなく、モデルの外側にある環境・制約・情報・検証・修正の仕組みを設計すること。
この案件では、Codex が UI デモを安定して実装できるようにするための実行枠組みを指す。

### 14.2 Four Roles of Harness
- Constrain: 何をしてよくて、何をしてはいけないかを固定する
- Inform: 何を作るべきか、どういう意図かを十分に渡す
- Verify: できたものが要件を満たしているかを機械的に確認する
- Correct: 不一致があれば次の修正ループを回す

---

## 15. Harness for This Project
### 15.1 Constrain
Codex は以下を守ること。

- 実装対象はフロントエンドデモのみ
- React + TypeScript + Tailwind を使う
- バックエンドを作らない
- 余計な依存を増やさない
- 4画面以外を広げない
- デザインの全面変更をしない
- UI案を勝手に医療アプリや管理アプリに寄せない
- ファイル数をむやみに増やさない
- 画像生成や外部API取得を前提にしない
- 既存モックデータで成立させる
- ダミーデータは日本語の自然な内容にする

### 15.2 Inform
Codex に渡すべき文脈。

- Rovy は高齢者の歩行習慣を、管理ではなく関係性で支えるプロダクト
- 家族アプリは補助機能であり、主役ではない
- 今回は提案書掲載用デモ
- 重要なのは「今日は散歩に行けたか」「最近歩けているか」「安心できるか」
- Stitchで作成した高忠実度UIの方向性を踏襲する
- 実装はスクショ映えよりも、現実的な画面構造を優先する
- 保守しやすい構成にする

### 15.3 Verify
Codex 実装後に以下を確認すること。

- npm install / npm run dev で起動する
- TypeScript エラーがない
- 4画面すべてに遷移できる
- Bottom Navigation が機能する
- 主要指標が各画面に表示される
- 文言トーンが統一されている
- 監視アプリ感が強くない
- コンポーネント分割が妥当
- mock データが pages に直書きされていない
- README がある

### 15.4 Correct
不一致があれば以下の優先順位で修正する。

優先度A:
- 起動しない
- 型エラー
- 画面遷移不能
- 主要情報欠落

優先度B:
- UIトーン不一致
- コンポーネント責務が崩れている
- コードの重複が多い

優先度C:
- 微細な文言
- 余白や見た目の調整

---

## 16. Implementation Plan
### Phase 1
- Vite + React + TypeScript 初期化
- Tailwind 設定
- ルーティング設定
- テーマトークン定義

### Phase 2
- 共通レイアウト
- Bottom Navigation
- Top Bar
- カードUI実装

### Phase 3
- Home 画面
- Detail 画面
- History 画面
- Notifications 画面

### Phase 4
- ダミーデータ整備
- 文言調整
- README 整備
- 軽い最終整理

---

## 17. Acceptance Checklist
- [ ] React + TypeScript + Tailwind で実装されている
- [ ] Home / Detail / History / Notifications がある
- [ ] Bottom Navigation で遷移できる
- [ ] モックデータで破綻なく表示される
- [ ] 日本語文言が自然
- [ ] UIトーンがやさしい見守りになっている
- [ ] README がある
- [ ] npm run dev で起動
- [ ] npm run build が通る
- [ ] 過剰実装していない

---

## 18. Codex Execution Instruction
この SDD と Harness に従って、Rovy Family Monitor App のフロントエンドデモを実装してください。

要件:
- React + TypeScript + Tailwind
- 4画面
- ルーティングあり
- モックデータ利用
- 実装しすぎない
- UIの雰囲気はやさしい見守り
- コードは読みやすく保守しやすくする
- README を含める

作業方針:
1. まずディレクトリ構成を作る
2. 型定義とモックデータを先に置く
3. 共通UIを作る
4. 4画面を実装する
5. 最後にビルドが通るように調整する


出力:
- 必要ファイル一式
- 実装後の簡単な構成説明
- 起動方法


参考として、既存のStitch UI HTMLの雰囲気は踏襲してよいが、そのままベタ移植するのではなく、Reactコンポーネントとして再構成し、保守しやすい設計にしてください。