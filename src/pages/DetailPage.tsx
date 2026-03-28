import { RouteMapMock } from "../components/map/RouteMapMock";
import { todayWalk } from "../data/mockWalks";

export function DetailPage() {
  return (
    <div className="space-y-6 pt-4">
      <section className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-text-strong">今日の散歩の詳細</h1>
        <p className="text-text-muted">{todayWalk.displayDate}</p>
      </section>

      <RouteMapMock routeName={todayWalk.routeName} />

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="col-span-2 flex items-center justify-between rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(25,28,28,0.04)]">
          <div className="space-y-1">
            <p className="text-sm font-medium text-text-muted">合計時間</p>
            <p className="text-4xl font-extrabold text-primary">
              {todayWalk.durationMinutes}
              <span className="ml-1 text-lg font-bold">min</span>
            </p>
          </div>
          <div className="h-12 w-px bg-outline/50" />
          <div className="space-y-1 text-right">
            <p className="text-sm font-medium text-text-muted">距離</p>
            <p className="text-4xl font-extrabold text-primary">
              {todayWalk.distanceKm.toFixed(1)}
              <span className="ml-1 text-lg font-bold">km</span>
            </p>
          </div>
        </section>

        <section className="space-y-3 rounded-2xl bg-[#f2f4f3] p-5">
          <div className="flex items-center gap-2 text-text-muted">
            <span className="material-symbols-outlined text-sm">speed</span>
            <span className="text-xs font-bold uppercase tracking-wider">平均ペース</span>
          </div>
          <p className="text-xl font-bold text-text-strong">{todayWalk.avgPaceText}</p>
        </section>

        <section className="space-y-3 rounded-2xl bg-[#f2f4f3] p-5">
          <div className="flex items-center gap-2 text-[#773a1f]">
            <span className="material-symbols-outlined text-sm">monitor_heart</span>
            <span className="text-xs font-bold uppercase tracking-wider">活動レベル</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-text-strong">{todayWalk.activityLevel}</span>
            <div className="flex gap-1">
              <div className="h-4 w-1.5 rounded-full bg-secondary" />
              <div className="h-4 w-1.5 rounded-full bg-secondary" />
              <div className="h-4 w-1.5 rounded-full bg-outline" />
            </div>
          </div>
        </section>
      </div>

      <section className="rounded-2xl bg-[#f2f4f3] p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-medium text-text-muted">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            <span>開始: {todayWalk.startTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">flag</span>
            <span>終了: {todayWalk.endTime}</span>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-2xl bg-[#cfe8dd] p-6">
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
        <div className="relative z-10 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
            <span className="material-symbols-outlined icon-filled text-2xl text-primary">smart_toy</span>
          </div>
          <div className="space-y-2">
            <h2 className="flex items-center gap-2 text-sm font-bold text-[#354b43]">
              Rovyの気分メモ
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
            </h2>
            <p className="font-medium leading-relaxed text-[#21372f]">{todayWalk.rovyMoodMemo}</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-[#ffdbce] p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50">
            <span className="material-symbols-outlined icon-filled text-secondary">lightbulb</span>
          </div>
          <p className="font-medium leading-relaxed text-[#72351b]">{todayWalk.summaryComment}</p>
        </div>
      </section>
    </div>
  );
}
