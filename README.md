# Rovy Family Monitor App Demo

Rovy の家族向け見守りアプリを、React + TypeScript + Tailwind CSS で実装したフロントエンドデモです。  
「監視」ではなく「やさしい見守り」のトーンで、今日の散歩、散歩詳細、履歴、通知の 4 画面を確認できます。

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで表示されるローカル URL を開くと確認できます。

## ビルド

```bash
npm run build
```

## 画面

- `/home`: 今日の活動の概要
- `/detail`: 今日の散歩詳細
- `/history`: 最近の散歩履歴と継続性
- `/notifications`: 通知一覧と設定

## 実装方針

- モックデータは `src/data` に分離
- 型定義は `src/types` に集約
- 共通 UI は `src/components` に分割
- 4 画面は `src/pages` で管理
- バックエンドや地図 API には接続しないデモ構成
