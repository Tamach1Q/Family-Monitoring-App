import { Link } from "react-router-dom";
import type { WalkRecord } from "../../types/walk";

interface WalkListItemProps {
  walk: WalkRecord;
  to?: string;
}

function WalkListItemContent({ walk }: { walk: WalkRecord }) {
  const compactDate = walk.displayDate.replace(/^\d{4}年/, "");
  const iconColorClass =
    walk.status === "short"
      ? "text-secondary"
      : walk.status === "pending"
        ? "text-text-muted"
        : "text-primary";

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
          <span className="material-symbols-outlined text-primary">directions_walk</span>
        </div>
        <div>
          <p className="font-bold text-on-surface">{compactDate}</p>
          <p className="text-xs text-text-muted">
            {walk.startTime} • {walk.durationMinutes}分
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-headline text-lg font-bold text-text-strong">{walk.distanceKm.toFixed(1)} km</p>
          <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <span className={`material-symbols-outlined text-sm ${iconColorClass}`}>check_circle</span>
          </div>
        </div>
      </div>
    </>
  );
}

export function WalkListItem({ walk, to }: WalkListItemProps) {
  const className =
    "flex items-center justify-between gap-4 rounded-2xl bg-[#f2f4f3] p-4 transition-colors duration-200 hover:bg-[#eceeed]";

  if (to) {
    return (
      <Link className={className} to={to}>
        <WalkListItemContent walk={walk} />
      </Link>
    );
  }

  return (
    <div className={className}>
      <WalkListItemContent walk={walk} />
    </div>
  );
}
