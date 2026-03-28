import { MetricCard } from "../components/cards/MetricCard";
import { ScreenContainer } from "../components/layout/ScreenContainer";
import { WalkListItem } from "../components/list/WalkListItem";
import { SectionHeader } from "../components/SectionHeader";
import { historyCalendar, todayWalk, walkHistory, weeklySummary } from "../data/mockWalks";

export function HistoryPage() {
  return (
    <ScreenContainer
      eyebrow="History"
      title="履歴"
      subtitle="最近の散歩の続き方や歩けた日数を、やさしい温度感で振り返れます。"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard
          icon="calendar_today"
          label="散歩日数"
          value={`${weeklySummary.walkDays} / 7 日`}
          hint="今週は5日歩けています"
          tone="calm"
        />
        <MetricCard
          icon="distance"
          label="総距離"
          value={`${weeklySummary.totalDistanceKm.toFixed(1)} km`}
          hint="先週より少し長く歩けています"
          tone="default"
        />
        <MetricCard
          icon="schedule"
          label="平均時間"
          value={`${weeklySummary.averageMinutes} 分`}
          hint="無理のないペースが続いています"
          tone="warm"
        />
      </div>

      <section className="panel p-6">
        <SectionHeader
          title={historyCalendar.label}
          subtitle="散歩した日はやさしく点で記録し、休んだ日も自然に見えるようにしています。"
        />

        <div className="mt-5 grid grid-cols-7 gap-y-3 text-center">
          {historyCalendar.weekdays.map((weekday) => (
            <span key={weekday} className="text-xs font-medium text-text-muted">
              {weekday}
            </span>
          ))}

          {historyCalendar.days.map((day, index) => (
            <div
              key={`${day.day}-${index}`}
              className={[
                "flex h-12 flex-col items-center justify-center rounded-2xl",
                day.isCurrentMonth ? "text-text-strong" : "text-text-muted/40",
                day.isToday ? "bg-primary/10" : day.walked ? "bg-surface-soft/80" : "",
              ].join(" ")}
            >
              <span className={`text-sm ${day.isToday ? "font-bold text-primary" : ""}`}>{day.day}</span>
              {day.walked ? <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" /> : <span className="mt-1 h-1.5 w-1.5" />}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionHeader title="最近の記録" subtitle={weeklySummary.insight} actionLabel="今日の詳細へ" actionTo="/detail" />
        {walkHistory.map((walk) => (
          <WalkListItem key={walk.id} to={walk.id === todayWalk.id ? "/detail" : undefined} walk={walk} />
        ))}
      </section>
    </ScreenContainer>
  );
}
