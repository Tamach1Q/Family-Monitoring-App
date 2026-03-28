# Family Monitoring App

Rovy の家族向け見守りアプリをイメージした、フロントエンドデモアプリです。  
高齢者本人を「管理する」ための画面ではなく、家族が日々の散歩や最近の活動をやさしく確認できる UI を目的として実装しています。

## Overview

- React + TypeScript + Tailwind CSS + Vite で構築したシングルページアプリ
- 4画面構成
  - ホーム
  - 散歩詳細
  - 履歴
  - 通知
- ダミーデータのみで動作するデモ実装
- バックエンド、認証、DB、実地図 API には未接続

## Features

- Bottom Navigation による画面遷移
- 今日の活動状況をやさしく見せるホーム画面
- 散歩時間、距離、ペース、活動量を確認できる詳細画面
- 週間サマリーと履歴一覧を見られる履歴画面
- 通知一覧と通知設定を確認できる通知画面
- モックデータ、型定義、UI コンポーネントを分離した保守しやすい構成

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM

## Getting Started

### Requirements

- Node.js 18 以上を推奨
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Vite が表示するローカル URL をブラウザで開いてください。

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Routes

- `/home` : 今日の活動の概要
- `/detail` : 今日の散歩詳細
- `/history` : 最近の散歩履歴と継続性
- `/notifications` : 通知一覧と設定

## Project Structure

```text
src/
  app/          # アプリ全体のルーティングとシェル
  components/   # 共通 UI コンポーネント
  data/         # モックデータ
  pages/        # 4画面のページコンポーネント
  styles/       # グローバルスタイルとテーマ
  types/        # TypeScript 型定義
```

## Design Direction

- 白ベースで、緑とオレンジをアクセントにした自然な配色
- 角丸カードと余白を活かした、落ち着いた情報設計
- 「監視アプリ」ではなく「やさしい見守り」に見える文言と UI
- 提案書掲載用デモとして、現実感のある画面構成を重視

## Notes

- 本リポジトリはフロントエンドデモです
- データは `src/data` のモックを利用しています
- 実際の通知配信、GPS、ロボット制御、認証機能は含みません
- ルートマップは API 非接続のモック表示です

## Verification

現在の実装では以下を確認済みです。

- `npm run build` が成功する
- 4画面がルーティングで遷移できる
- UI は日本語で統一されている
- モックデータがページに直書きされていない
