import { InsightBanner } from "../components/cards/InsightBanner";
import { ScreenContainer } from "../components/layout/ScreenContainer";
import { NotificationItem } from "../components/list/NotificationItem";
import { SectionHeader } from "../components/SectionHeader";
import {
  notificationOverview,
  notifications,
  notificationSettings,
} from "../data/mockNotifications";

export function NotificationsPage() {
  return (
    <ScreenContainer
      eyebrow="Notifications"
      title="通知"
      subtitle="不安を煽らず、必要な変化だけを落ち着いて確認できる一覧です。"
    >
      <InsightBanner icon="notifications" title={notificationOverview.title} body={notificationOverview.body} tone="warm" />

      <section className="space-y-3">
        <SectionHeader title="最近のアクティビティ" subtitle="散歩の開始や帰宅など、家族が知りたい流れだけをまとめています。" />
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </section>

      <section className="panel overflow-hidden">
        <div className="border-b border-outline/60 px-6 py-5">
          <SectionHeader title="設定" subtitle="通知量や共有相手を、必要に応じてやさしく調整できます。" />
        </div>

        <div className="divide-y divide-outline/60">
          {notificationSettings.map((setting) => (
            <div key={setting.id} className="flex items-center justify-between gap-4 px-6 py-5">
              <div className="flex min-w-0 items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-soft text-primary">
                  <span className="material-symbols-rounded text-[20px]">{setting.icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-text-strong">{setting.title}</p>
                  <p className="mt-1 text-sm leading-6 text-text-muted">{setting.description}</p>
                </div>
              </div>

              {setting.action === "toggle" ? (
                <div
                  aria-hidden="true"
                  className={`flex h-7 w-14 items-center rounded-full p-1 ${setting.enabled ? "bg-primary" : "bg-outline"}`}
                >
                  <div className={`h-5 w-5 rounded-full bg-white shadow-sm ${setting.enabled ? "ml-auto" : ""}`} />
                </div>
              ) : (
                <span className="material-symbols-rounded text-[20px] text-text-muted">open_in_new</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </ScreenContainer>
  );
}
