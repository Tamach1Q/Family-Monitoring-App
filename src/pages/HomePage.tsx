import { InsightBanner } from "../components/cards/InsightBanner";
import { SafetyCard } from "../components/cards/SafetyCard";
import { StatusCard } from "../components/cards/StatusCard";
import { WeeklyBarChart } from "../components/charts/WeeklyBarChart";
import { ScreenContainer } from "../components/layout/ScreenContainer";
import { SectionHeader } from "../components/SectionHeader";
import { rovyHealthStatus, safetyHighlights, welcomeCopy } from "../data/mockUser";
import { todayWalk, weeklySummary } from "../data/mockWalks";

export function HomePage() {
  return (
    <ScreenContainer title={welcomeCopy.title} subtitle={welcomeCopy.subtitle}>
      <StatusCard
        eyebrow="今日のウォーキング"
        title={todayWalk.statusLabel}
        description={`${todayWalk.routeName}を歩き、ゆったりとした時間を過ごせています。`}
        icon="directions_walk"
        metrics={[
          { label: "時間", value: `${todayWalk.durationMinutes} 分` },
          { label: "距離", value: `${todayWalk.distanceKm.toFixed(1)} km` },
          { label: "活動量", value: todayWalk.activityLevel },
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <InsightBanner icon="smart_toy" title="Rovyのメッセージ" body={todayWalk.rovyMoodMemo} tone="calm" />
        <SafetyCard
          title="見守りステータス"
          items={safetyHighlights}
          footer={`Rovy は ${rovyHealthStatus}。必要以上の通知は控えめにしています。`}
        />
      </div>

      <section className="panel p-6">
        <SectionHeader title="過去7日間の歩み" subtitle="今日は散歩に行けたか、最近どれくらい歩けているかを一目で確認できます。" />
        <div className="mt-5">
          <WeeklyBarChart summary={weeklySummary} />
        </div>
      </section>

      <InsightBanner icon="lightbulb" title="ご家族向けメモ" body={todayWalk.summaryComment} tone="warm" />
    </ScreenContainer>
  );
}
