import type { CalendarMonth, DailyBar, WalkRecord, WeeklySummary } from "../types/walk";

const baseDate = "2026-03-28";

export const walkHistory: WalkRecord[] = [
  {
    id: "walk-2026-03-28",
    date: "2026-03-28",
    displayDate: "2026年3月28日 土曜日",
    startTime: "10:12",
    endTime: "10:41",
    durationMinutes: 29,
    distanceKm: 2.6,
    avgPaceText: "11'09\" / km",
    activityLevel: "良好",
    routeName: "けやき通りから中央公園",
    rovyMoodMemo:
      "今日は木陰のある道を選びながら、気持ちよさそうに歩けたようです。",
    summaryComment: "無理のない範囲で、落ち着いたペースをしっかり保てています。",
    status: "completed",
    statusLabel: "完了しました",
  },
  {
    id: "walk-2026-03-27",
    date: "2026-03-27",
    displayDate: "2026年3月27日 金曜日",
    startTime: "17:18",
    endTime: "17:39",
    durationMinutes: 21,
    distanceKm: 1.7,
    avgPaceText: "12'21\" / km",
    activityLevel: "やや控えめ",
    routeName: "駅前通りの短いコース",
    rovyMoodMemo: "少しゆっくりでしたが、途中で立ち止まりながら楽しめました。",
    summaryComment: "昨日は短めでしたが、疲れすぎない範囲で歩けています。",
    status: "short",
    statusLabel: "短めでした",
  },
  {
    id: "walk-2026-03-25",
    date: "2026-03-25",
    displayDate: "2026年3月25日 水曜日",
    startTime: "09:03",
    endTime: "09:34",
    durationMinutes: 31,
    distanceKm: 2.8,
    avgPaceText: "11'04\" / km",
    activityLevel: "良好",
    routeName: "川沿いのベンチコース",
    rovyMoodMemo: "風が心地よく、少し遠回りしたかったみたいです。",
    summaryComment: "先週より少し長めの散歩ができています。",
    status: "completed",
    statusLabel: "完了しました",
  },
  {
    id: "walk-2026-03-24",
    date: "2026-03-24",
    displayDate: "2026年3月24日 火曜日",
    startTime: "15:27",
    endTime: "15:53",
    durationMinutes: 26,
    distanceKm: 2.1,
    avgPaceText: "12'23\" / km",
    activityLevel: "安定",
    routeName: "商店街を通るいつもの道",
    rovyMoodMemo: "知っている道だったので、安心して歩けたようです。",
    summaryComment: "日常の散歩リズムが安定しています。",
    status: "completed",
    statusLabel: "完了しました",
  },
  {
    id: "walk-2026-03-22",
    date: "2026-03-22",
    displayDate: "2026年3月22日 日曜日",
    startTime: "08:48",
    endTime: "09:20",
    durationMinutes: 32,
    distanceKm: 2.9,
    avgPaceText: "11'02\" / km",
    activityLevel: "良好",
    routeName: "公園の外周コース",
    rovyMoodMemo: "朝の空気が気持ちよく、最後まで気分よく歩けました。",
    summaryComment: "週のはじめにしっかり歩けており、よい流れが作れています。",
    status: "completed",
    statusLabel: "完了しました",
  },
];

export const todayWalk = walkHistory[0];

function formatLocalIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function buildDailyBars(records: WalkRecord[], today: string): DailyBar[] {
  const todayDate = new Date(`${today}T00:00:00`);
  const recentDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(todayDate);
    date.setDate(todayDate.getDate() - (6 - index));
    return date;
  });

  return recentDays.map((date) => {
    const iso = formatLocalIsoDate(date);
    const matched = records.find((record) => record.date === iso);
    const labels = ["日", "月", "火", "水", "木", "金", "土"];

    return {
      label: labels[date.getDay()],
      minutes: matched?.durationMinutes ?? 0,
      highlight: iso === today,
    };
  });
}

function buildCalendar(year: number, month: number, walkedDates: string[], today: string): CalendarMonth {
  const walkedSet = new Set(walkedDates);
  const weekdays = ["月", "火", "水", "木", "金", "土", "日"];
  const firstDay = new Date(year, month - 1, 1);
  const leadingSlots = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysInPrevMonth = new Date(year, month - 1, 0).getDate();
  const days = [];

  for (let index = 0; index < leadingSlots; index += 1) {
    days.push({
      day: daysInPrevMonth - leadingSlots + index + 1,
      walked: false,
      isCurrentMonth: false,
    });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const iso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    days.push({
      day,
      walked: walkedSet.has(iso),
      isCurrentMonth: true,
      isToday: iso === today,
    });
  }

  let trailingDay = 1;
  while (days.length % 7 !== 0) {
    days.push({
      day: trailingDay,
      walked: false,
      isCurrentMonth: false,
    });
    trailingDay += 1;
  }

  return {
    label: `${year}年${month}月`,
    weekdays,
    days,
  };
}

const totalDistance = walkHistory.reduce((sum, walk) => sum + walk.distanceKm, 0);
const totalMinutes = walkHistory.reduce((sum, walk) => sum + walk.durationMinutes, 0);

export const weeklySummary: WeeklySummary = {
  walkDays: walkHistory.length,
  totalDistanceKm: Number(totalDistance.toFixed(1)),
  averageMinutes: Math.round(totalMinutes / walkHistory.length),
  dailyBars: buildDailyBars(walkHistory, baseDate),
  insight: "先週より少し多く歩けており、継続のリズムが整っています。",
};

export const historyCalendar = buildCalendar(
  2026,
  3,
  walkHistory.map((walk) => walk.date),
  baseDate,
);
