import type { ComponentType } from "react";
import { DetailPage } from "../pages/DetailPage";
import { HistoryPage } from "../pages/HistoryPage";
import { HomePage } from "../pages/HomePage";
import { NotificationsPage } from "../pages/NotificationsPage";

export interface AppRoute {
  path: string;
  label: string;
  icon: string;
  element: ComponentType;
}

export const appRoutes: AppRoute[] = [
  {
    path: "/home",
    label: "ホーム",
    icon: "home",
    element: HomePage,
  },
  {
    path: "/detail",
    label: "詳細",
    icon: "map",
    element: DetailPage,
  },
  {
    path: "/history",
    label: "履歴",
    icon: "calendar_month",
    element: HistoryPage,
  },
  {
    path: "/notifications",
    label: "通知",
    icon: "notifications",
    element: NotificationsPage,
  },
];
