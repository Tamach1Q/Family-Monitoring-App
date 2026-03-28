import { notificationToneStyles } from "../../styles/theme";
import type { AppNotification } from "../../types/notification";

interface NotificationItemProps {
  notification: AppNotification;
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const tone = notificationToneStyles[notification.level];

  return (
    <article className="flex cursor-pointer items-center gap-4 rounded-2xl bg-[#f2f4f3] p-5 transition-all hover:bg-[#e6e9e8]">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${tone.iconWrap}`}>
        <span className={`material-symbols-outlined text-[20px] ${tone.iconColor}`}>{notification.icon}</span>
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-text-strong">{notification.title}</p>
        <p className="mt-1 text-sm text-text-muted">{notification.body}</p>
        <p className="mt-1 text-sm text-text-muted">{notification.timestamp}</p>
      </div>

      <span className="material-symbols-outlined text-primary-accent">chevron_right</span>
    </article>
  );
}
