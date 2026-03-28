import type { User } from "../../types/user";

interface TopBarProps {
  user: User;
}

export function TopBar({ user }: TopBarProps) {
  const initial = user.displayName.slice(0, 1);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-surface/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-accent to-primary text-sm font-semibold text-white shadow-md">
            {initial}
          </div>
          <div>
            <p className="font-headline text-lg font-bold tracking-tight text-primary">Rovy Family</p>
            <p className="text-xs text-text-muted">{user.relationLabel}</p>
          </div>
        </div>

        <div className="rounded-full border border-white/70 bg-white/80 px-3 py-2 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-rounded icon-filled text-[18px] text-secondary">
              favorite
            </span>
            <span className="text-sm font-medium text-text-strong">{user.displayName}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
