import type { WeeklySummary } from "../../types/walk";

interface WeeklyBarChartProps {
  summary: WeeklySummary;
}

export function WeeklyBarChart({ summary }: WeeklyBarChartProps) {
  const maxMinutes = Math.max(...summary.dailyBars.map((bar) => bar.minutes), 1);

  return (
    <div className="space-y-5">
      <div className="flex h-36 items-end gap-3">
        {summary.dailyBars.map((bar) => {
          const height = `${Math.max((bar.minutes / maxMinutes) * 100, bar.minutes > 0 ? 24 : 10)}%`;

          return (
            <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-full w-full items-end">
                <div
                  className={[
                    "w-full rounded-t-2xl transition-all duration-300",
                    bar.highlight ? "bg-primary" : "bg-primary-soft",
                  ].join(" ")}
                  style={{ height }}
                />
              </div>
              <div className="text-center">
                <p className={`text-xs font-medium ${bar.highlight ? "text-primary" : "text-text-muted"}`}>
                  {bar.label}
                </p>
                <p className="text-[11px] text-text-muted">{bar.minutes > 0 ? `${bar.minutes}分` : "休み"}</p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="rounded-2xl bg-surface-soft/80 px-4 py-3 text-sm leading-6 text-text-muted">
        {summary.insight}
      </p>
    </div>
  );
}
