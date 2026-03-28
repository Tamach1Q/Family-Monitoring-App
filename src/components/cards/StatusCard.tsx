interface StatusMetric {
  label: string;
  value: string;
}

interface StatusCardProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
  metrics: StatusMetric[];
}

export function StatusCard({ eyebrow, title, description, icon, metrics }: StatusCardProps) {
  return (
    <section className="overflow-hidden rounded-panel bg-gradient-to-br from-primary to-primary-accent p-6 text-white shadow-floating">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">{eyebrow}</p>
          <h2 className="font-headline text-3xl font-bold tracking-tight">{title}</h2>
          <p className="max-w-xl text-sm leading-6 text-white/85 sm:text-base">{description}</p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/18 backdrop-blur">
          <span className="material-symbols-rounded icon-filled text-[30px]">{icon}</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/15 pt-5">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-xs text-white/75">{metric.label}</p>
            <p className="mt-1 font-headline text-xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
