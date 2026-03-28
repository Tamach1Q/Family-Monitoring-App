import type { NotificationLevel } from "../types/notification";
import type { WalkStatus } from "../types/walk";

export const walkToneStyles: Record<
  WalkStatus,
  {
    badge: string;
    dot: string;
  }
> = {
  completed: {
    badge: "bg-primary/12 text-primary",
    dot: "bg-primary",
  },
  short: {
    badge: "bg-secondary-soft text-secondary",
    dot: "bg-secondary",
  },
  pending: {
    badge: "bg-surface-muted text-text-muted",
    dot: "bg-text-muted",
  },
};

export const notificationToneStyles: Record<
  NotificationLevel,
  {
    iconWrap: string;
    iconColor: string;
  }
> = {
  gentle: {
    iconWrap: "bg-primary-soft/80",
    iconColor: "text-primary",
  },
  positive: {
    iconWrap: "bg-success-soft",
    iconColor: "text-success",
  },
  neutral: {
    iconWrap: "bg-secondary-soft",
    iconColor: "text-secondary",
  },
};
