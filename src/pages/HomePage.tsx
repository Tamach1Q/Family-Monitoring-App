import { rovyHealthStatus, safetyHighlights, welcomeCopy } from "../data/mockUser";
import { todayWalk, weeklySummary } from "../data/mockWalks";

export function HomePage() {
  const maxMinutes = Math.max(...weeklySummary.dailyBars.map((bar) => bar.minutes), 1);

  return (
    <div className="space-y-8 pt-4">
      <section className="mt-4">
        <h1 className="font-headline text-2xl font-bold text-[#191c1c]">{welcomeCopy.title}</h1>
        <p className="mt-1 text-[#424845]">{welcomeCopy.subtitle}</p>
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <section className="rounded-2xl bg-gradient-to-br from-[#4c635a] to-[#88a096] p-6 text-white shadow-[0_12px_32px_rgba(76,99,90,0.12)] md:col-span-2">
          <div className="mb-6 flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider opacity-80">今日のウォーキング</span>
              <h2 className="font-headline text-3xl font-bold">{todayWalk.statusLabel}</h2>
            </div>
            <div className="rounded-full bg-white/20 p-2">
              <span className="material-symbols-outlined icon-filled text-3xl">directions_run</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="text-xs opacity-80">時間</p>
              <p className="font-headline text-xl font-bold">{todayWalk.durationMinutes} min</p>
            </div>
            <div>
              <p className="text-xs opacity-80">距離</p>
              <p className="font-headline text-xl font-bold">{todayWalk.distanceKm.toFixed(1)} km</p>
            </div>
            <div>
              <p className="text-xs opacity-80">アクティビティ</p>
              <p className="font-headline text-xl font-bold">{todayWalk.activityLevel}</p>
            </div>
          </div>
        </section>

        <section className="group relative overflow-hidden rounded-2xl bg-[#f2f4f3] p-6">
          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8f4c30]">
                <span className="material-symbols-outlined icon-filled text-sm text-white">smart_toy</span>
              </div>
              <span className="text-sm font-bold text-[#424845]">Rovyのメッセージ</span>
            </div>
            <p className="mb-4 font-medium leading-relaxed text-[#191c1c]">{todayWalk.rovyMoodMemo}</p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#4c635a] shadow-[0_0_8px_#4c635a]" />
              <span className="text-xs font-semibold text-[#4c635a]">{rovyHealthStatus}</span>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 opacity-5 transition-transform duration-500 group-hover:scale-110">
            <span className="material-symbols-outlined text-[120px]">sentiment_satisfied</span>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fda684]">
              <span className="material-symbols-outlined icon-filled text-sm text-[#773a1f]">shield</span>
            </div>
            <span className="text-sm font-bold text-[#424845]">見守りステータス</span>
          </div>

          <ul className="space-y-3">
            {safetyHighlights.slice(0, 2).map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-xl text-[#4c635a]">{item.icon}</span>
                <span className="text-sm text-[#191c1c]">{item.label}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="rounded-2xl bg-[#f2f4f3] p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-headline text-lg font-bold text-[#191c1c]">週間アクティビティ</h3>
          <span className="text-xs font-medium text-[#424845]">過去7日間</span>
        </div>

        <div className="flex h-32 items-end justify-between gap-2">
          {weeklySummary.dailyBars.map((bar) => {
            const height = `${Math.max((bar.minutes / maxMinutes) * 100, bar.minutes > 0 ? 28 : 10)}%`;

            return (
              <div key={`${bar.label}-${bar.minutes}`} className="flex w-full flex-col items-center gap-2">
                <div
                  className={`w-full rounded-t-sm ${bar.highlight ? "bg-[#4c635a]" : "bg-[#b3ccc1]"}`}
                  style={{ height }}
                />
                <span className={`text-[10px] ${bar.highlight ? "font-bold text-[#4c635a]" : "text-[#424845]"}`}>
                  {bar.highlight ? "今日" : bar.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
