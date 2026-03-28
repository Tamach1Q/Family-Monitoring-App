import type { SafetyHighlight, User } from "../types/user";

export const mockUser: User = {
  id: "family-user",
  displayName: "お母さん",
  relationLabel: "離れて暮らすご家族向け",
};

export const welcomeCopy = {
  title: "お母さんの今日の活動",
  subtitle: "今日も無理のないペースで、落ち着いて過ごされています。",
};

export const rovyHealthStatus = "元気に見守りを続けています";

export const safetyHighlights: SafetyHighlight[] = [
  {
    id: "location-log",
    icon: "location_on",
    label: "散歩の位置記録はやさしい要約で確認できます",
  },
  {
    id: "fallback",
    icon: "check_circle",
    label: "転倒や大きな異変を示す記録はありません",
  },
  {
    id: "privacy",
    icon: "shield",
    label: "細かな監視ではなく、安心につながる情報だけを表示します",
  },
];
