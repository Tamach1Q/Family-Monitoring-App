export interface User {
  id: string;
  displayName: string;
  relationLabel: string;
  avatarUrl?: string;
}

export interface SafetyHighlight {
  id: string;
  icon: string;
  label: string;
}
