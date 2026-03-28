import type { AppNotification, NotificationSetting } from "../types/notification";

export const notificationOverview = {
  title: "今日のお知らせ",
  body: "10:41 に散歩の記録が届きました。無理のないペースで歩けています。",
};

export const notifications: AppNotification[] = [
  {
    id: "notification-start",
    type: "start",
    title: "散歩を開始しました",
    body: "Rovy と一緒に、いつものコースへ出発しています。",
    timestamp: "今日 10:12",
    level: "gentle",
    read: false,
    icon: "directions_walk",
  },
  {
    id: "notification-return",
    type: "return",
    title: "無事に帰宅しました",
    body: "落ち着いたペースで歩き終え、ご自宅に戻っています。",
    timestamp: "今日 10:41",
    level: "positive",
    read: false,
    icon: "check_circle",
  },
  {
    id: "notification-short",
    type: "short",
    title: "昨日は少し短めの散歩でした",
    body: "短い時間でも外の空気に触れられており、良い流れは続いています。",
    timestamp: "3月27日 17:39",
    level: "neutral",
    read: true,
    icon: "timer",
  },
  {
    id: "notification-pending",
    type: "pending",
    title: "3月23日は散歩を見送りました",
    body: "休息日としてゆったり過ごされています。翌日は通常の散歩に戻れています。",
    timestamp: "3月23日 16:10",
    level: "gentle",
    read: true,
    icon: "bedtime",
  },
];

export const notificationSettings: NotificationSetting[] = [
  {
    id: "realtime",
    title: "通知を有効にする",
    description: "散歩の開始と帰宅を、落ち着いたトーンで受け取ります。",
    icon: "notifications_active",
    action: "toggle",
    enabled: true,
  },
  {
    id: "family-share",
    title: "家族との共有設定",
    description: "見守りメンバーの追加や表示範囲の調整ができます。",
    icon: "group",
    action: "link",
  },
];
