export type NotificationType = "start" | "return" | "short" | "pending";
export type NotificationLevel = "gentle" | "positive" | "neutral";

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  timestamp: string;
  level: NotificationLevel;
  read: boolean;
  icon: string;
}

export interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: "toggle" | "link";
  enabled?: boolean;
}
