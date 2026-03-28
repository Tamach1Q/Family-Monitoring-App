import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionTo?: string;
}

export function SectionHeader({
  title,
  subtitle,
  actionLabel,
  actionTo,
}: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="font-headline text-xl font-semibold text-text-strong">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-text-muted">{subtitle}</p> : null}
      </div>
      {actionLabel && actionTo ? (
        <Link className="text-sm font-semibold text-primary transition hover:text-secondary" to={actionTo}>
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
