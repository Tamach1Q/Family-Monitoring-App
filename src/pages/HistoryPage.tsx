import { Link } from "react-router-dom";
import { WalkListItem } from "../components/list/WalkListItem";
import { historyCalendar, todayWalk, walkHistory, weeklySummary } from "../data/mockWalks";

export function HistoryPage() {
  return (
    <div className="space-y-8 pt-4">
      <section className="mb-8">
        <h1 className="font-headline text-[1.75rem] font-medium text-text-strong">アクティビティ記録</h1>
        <div className="mt-4 flex items-start gap-4 rounded-2xl bg-[#ffdbce] p-6 text-[#72351b]">
          <span className="material-symbols-outlined icon-filled mt-1 scale-125 text-secondary">auto_awesome</span>
          <div>
            <p className="text-lg font-medium leading-snug">先週より少し多く歩けましたね。穏やかな進歩が続いています。</p>
            <p className="mt-1 text-sm opacity-80">健康的なリズムが、少しずつ整ってきています。</p>
          </div>
        </div>
      </section>

      <section className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        <article className="flex aspect-square flex-col justify-between rounded-2xl bg-[#f2f4f3] p-5 md:aspect-auto">
          <span className="material-symbols-outlined mb-2 text-primary">calendar_today</span>
          <div>
            <p className="text-sm font-medium text-text-muted">散歩日数</p>
            <p className="font-headline text-3xl font-bold text-primary">
              {weeklySummary.walkDays}/7 <span className="text-base font-normal">日</span>
            </p>
          </div>
        </article>

        <article className="flex aspect-square flex-col justify-between rounded-2xl bg-[#f2f4f3] p-5 md:aspect-auto">
          <span className="material-symbols-outlined mb-2 text-primary">distance</span>
          <div>
            <p className="text-sm font-medium text-text-muted">総距離</p>
            <p className="font-headline text-3xl font-bold text-primary">
              {weeklySummary.totalDistanceKm.toFixed(1)} <span className="text-base font-normal">km</span>
            </p>
          </div>
        </article>

        <article className="col-span-2 flex aspect-[2/1] flex-col justify-between rounded-2xl bg-[#f2f4f3] p-5 md:col-span-1 md:aspect-auto">
          <span className="material-symbols-outlined mb-2 text-primary">schedule</span>
          <div>
            <p className="text-sm font-medium text-text-muted">平均時間</p>
            <p className="font-headline text-3xl font-bold text-primary">
              {weeklySummary.averageMinutes} <span className="text-base font-normal">分</span>
            </p>
          </div>
        </article>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-text-muted">散歩の継続性</h2>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-headline font-bold">{historyCalendar.label}</span>
            <div className="flex gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eceeed] transition-colors hover:bg-[#e1e3e2]" type="button">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eceeed] transition-colors hover:bg-[#e1e3e2]" type="button">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-y-4 text-center">
          {historyCalendar.weekdays.map((weekday) => (
            <span key={weekday} className="text-[0.75rem] font-medium text-text-muted">
              {weekday}
            </span>
          ))}

          {historyCalendar.days.map((day, index) => (
            <div
              key={`${day.day}-${index}`}
              className={[
                "relative flex flex-col items-center py-2",
                day.isToday ? "rounded-full bg-primary/5" : "",
              ].join(" ")}
            >
              <span
                className={[
                  "text-sm",
                  day.isCurrentMonth ? "text-text-strong" : "opacity-30",
                  day.isToday ? "border-b-2 border-primary font-bold text-primary" : "",
                ].join(" ")}
              >
                {day.day}
              </span>
              {day.walked ? <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" /> : <span className="mt-1 h-1.5 w-1.5" />}
            </div>
          ))}
        </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest text-text-muted">最近の記録</h2>
          <Link className="text-sm font-bold text-primary" to="/detail">
            今日の詳細へ
          </Link>
        </div>
        <div className="space-y-3">
        {walkHistory.map((walk) => (
          <WalkListItem key={walk.id} to={walk.id === todayWalk.id ? "/detail" : undefined} walk={walk} />
        ))}
        </div>
      </section>
    </div>
  );
}
