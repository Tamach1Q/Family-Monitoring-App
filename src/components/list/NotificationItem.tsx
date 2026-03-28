import { notificationToneStyles } from "../../styles/theme";
import type { AppNotification } from "../../types/notification";

interface NotificationItemProps {
  notification: AppNotification;
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const tone = notificationToneStyles[notification.level];

  return (
    <article className="panel flex items-center gap-4 p-4">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${tone.iconWrap}`}>
        <span className={`material-symbols-rounded text-[20px] ${tone.iconColor}`}>{notification.icon}</span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <p className="truncate font-medium text-text-strong">{notification.title}</p>
          {!notification.read ? (
            <span className="rounded-full bg-primary/12 px-2 py-1 text-[11px] font-semibold text-primary">
              未読
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-sm leading-6 text-text-muted">{notification.body}</p>
        <p className="mt-2 text-xs font-medium tracking-wide text-text-muted">{notification.timestamp}</p>
      </div>
    </article>
  );
}
