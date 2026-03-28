import type { User } from "../../types/user";

interface TopBarProps {
  user: User;
}

export function TopBar({ user }: TopBarProps) {
  const initial = user.displayName.slice(0, 1);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#f8faf9]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-[#e1e3e2]">
            {user.avatarUrl ? (
              <img
                alt={`${user.displayName}のプロフィール`}
                className="h-full w-full object-cover"
                src={user.avatarUrl}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-accent to-primary text-sm font-semibold text-white shadow-md">
                {initial}
              </div>
            )}
          </div>
          <p className="font-headline text-xl font-bold tracking-tight text-[#4c635a]">Rovy Family</p>
        </div>

        <button
          aria-label="設定"
          className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#e1e3e2]"
          type="button"
        >
          <span className="material-symbols-outlined text-[#424845]">settings</span>
        </button>
      </div>
    </header>
  );
}
