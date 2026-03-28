import type { SafetyHighlight } from "../../types/user";

interface SafetyCardProps {
  title: string;
  items: SafetyHighlight[];
  footer: string;
}

export function SafetyCard({ title, items, footer }: SafetyCardProps) {
  return (
    <section className="panel p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-soft text-secondary">
          <span className="material-symbols-rounded icon-filled text-[22px]">shield</span>
        </div>
        <div>
          <p className="font-headline text-lg font-semibold text-text-strong">{title}</p>
          <p className="text-sm text-text-muted">過度な監視ではなく、安心につながる情報だけを表示します。</p>
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-3 rounded-2xl bg-surface-soft/80 px-4 py-3">
            <span className="material-symbols-rounded mt-0.5 text-[20px] text-primary">{item.icon}</span>
            <span className="text-sm leading-6 text-text-strong">{item.label}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm leading-6 text-text-muted">{footer}</p>
    </section>
  );
}
