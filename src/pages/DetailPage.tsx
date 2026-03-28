import { InsightBanner } from "../components/cards/InsightBanner";
import { MetricCard } from "../components/cards/MetricCard";
import { ScreenContainer } from "../components/layout/ScreenContainer";
import { RouteMapMock } from "../components/map/RouteMapMock";
import { todayWalk } from "../data/mockWalks";

export function DetailPage() {
  return (
    <ScreenContainer
      eyebrow="Walk Detail"
      title="今日の散歩の詳細"
      subtitle={`${todayWalk.displayDate}の記録です。行動の様子を、やさしく解像度高く確認できます。`}
    >
      <RouteMapMock routeName={todayWalk.routeName} />

      <div className="grid gap-4 sm:grid-cols-2">
        <MetricCard
          icon="schedule"
          label="合計時間"
          value={`${todayWalk.durationMinutes} 分`}
          hint={`${todayWalk.startTime} から ${todayWalk.endTime} まで`}
          tone="calm"
        />
        <MetricCard
          icon="distance"
          label="距離"
          value={`${todayWalk.distanceKm.toFixed(1)} km`}
          hint={`${todayWalk.routeName} を歩きました`}
          tone="default"
        />
        <MetricCard
          icon="speed"
          label="平均ペース"
          value={todayWalk.avgPaceText}
          hint="急がず、落ち着いたテンポです"
          tone="default"
        />
        <MetricCard
          icon="monitor_heart"
          label="活動量"
          value={todayWalk.activityLevel}
          hint="今日は安定した動きが続いています"
          tone="warm"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <MetricCard icon="play_arrow" label="開始時刻" value={todayWalk.startTime} hint="出発は午前の穏やかな時間帯です" />
        <MetricCard icon="flag" label="終了時刻" value={todayWalk.endTime} hint="無理なく歩き終えて帰宅しています" />
      </div>

      <InsightBanner icon="smart_toy" title="Rovyの気分メモ" body={todayWalk.rovyMoodMemo} tone="calm" />
      <InsightBanner icon="lightbulb" title="ご家族向けまとめ" body={todayWalk.summaryComment} tone="warm" />
    </ScreenContainer>
  );
}
