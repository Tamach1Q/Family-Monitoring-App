import { Link } from "react-router-dom";
import { walkToneStyles } from "../../styles/theme";
import type { WalkRecord } from "../../types/walk";

interface WalkListItemProps {
  walk: WalkRecord;
  to?: string;
}

function WalkListItemContent({ walk }: { walk: WalkRecord }) {
  const tone = walkToneStyles[walk.status];

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
          <span className="material-symbols-rounded text-primary">directions_walk</span>
        </div>
        <div>
          <p className="font-headline text-base font-semibold text-text-strong">{walk.displayDate}</p>
          <p className="text-sm text-text-muted">
            {walk.startTime} から {walk.durationMinutes}分
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-headline text-lg font-bold text-text-strong">{walk.distanceKm.toFixed(1)} km</p>
          <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${tone.badge}`}>
            <span className={`h-2 w-2 rounded-full ${tone.dot}`} />
            {walk.statusLabel}
          </span>
        </div>
        <span className="material-symbols-rounded text-[20px] text-text-muted">chevron_right</span>
      </div>
    </>
  );
}

export function WalkListItem({ walk, to }: WalkListItemProps) {
  const className =
    "panel flex items-center justify-between gap-4 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-primary-soft hover:bg-white";

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
