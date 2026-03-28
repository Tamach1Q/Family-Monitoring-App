export type WalkStatus = "completed" | "short" | "pending";

export interface WalkRecord {
  id: string;
  date: string;
  displayDate: string;
  startTime: string;
  endTime: string;
  durationMinutes: number;
  distanceKm: number;
  avgPaceText: string;
  activityLevel: string;
  routeName: string;
  rovyMoodMemo: string;
  summaryComment: string;
  status: WalkStatus;
  statusLabel: string;
}

export interface DailyBar {
  label: string;
  minutes: number;
  highlight?: boolean;
}

export interface WeeklySummary {
  walkDays: number;
  totalDistanceKm: number;
  averageMinutes: number;
  dailyBars: DailyBar[];
  insight: string;
}

export interface CalendarDay {
  day: number;
  walked: boolean;
  isCurrentMonth: boolean;
  isToday?: boolean;
}

export interface CalendarMonth {
  label: string;
  weekdays: string[];
  days: CalendarDay[];
}
