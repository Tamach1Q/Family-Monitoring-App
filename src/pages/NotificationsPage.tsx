import { NotificationItem } from "../components/list/NotificationItem";
import {
  notificationOverview,
  notifications,
  notificationSettings,
} from "../data/mockNotifications";

export function NotificationsPage() {
  return (
    <div className="space-y-8 pt-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-text-strong">通知</h1>
        <p className="text-text-muted">今日のRovyの様子を確認しましょう</p>
      </div>

      <section className="flex items-start gap-4 rounded-2xl bg-[#ffdbce]/40 p-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fda684]">
          <span className="material-symbols-outlined icon-filled text-[#773a1f]">info</span>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-[#773a1f]">{notificationOverview.title}</h2>
          <p className="text-[#72351b]">{notificationOverview.body}</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="px-1 text-xl font-semibold text-text-strong">最近のアクティビティ</h2>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="border-b border-outline/60 px-6 py-5">
          <h2 className="text-xl font-semibold text-text-strong">設定</h2>
        </div>

        <div className="divide-y divide-outline/60">
          {notificationSettings.map((setting) => (
            <div key={setting.id} className="flex items-center justify-between gap-4 px-6 py-5">
              <div className="flex min-w-0 items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2f4f3] text-text-muted">
                  <span className="material-symbols-outlined text-[20px]">{setting.icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-text-strong">{setting.title}</p>
                  <p className="mt-1 text-sm leading-6 text-text-muted">{setting.description}</p>
                </div>
              </div>

              {setting.action === "toggle" ? (
                <div
                  aria-hidden="true"
                  className={`flex h-6 w-12 items-center rounded-full px-1 ${setting.enabled ? "bg-primary" : "bg-outline"}`}
                >
                  <div className={`h-4 w-4 rounded-full bg-white ${setting.enabled ? "ml-auto" : ""}`} />
                </div>
              ) : (
                <span className="material-symbols-outlined text-[20px] text-outline">open_in_new</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
