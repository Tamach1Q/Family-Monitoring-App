interface MetricCardProps {
  icon: string;
  label: string;
  value: string;
  hint?: string;
  tone?: "default" | "warm" | "calm";
}

const toneStyles = {
  default: "panel",
  warm: "rounded-panel border border-secondary-soft/80 bg-secondary-soft/50 shadow-card",
  calm: "rounded-panel border border-primary-soft/80 bg-primary-soft/35 shadow-card",
};

export function MetricCard({
  icon,
  label,
  value,
  hint,
  tone = "default",
}: MetricCardProps) {
  return (
    <article className={`${toneStyles[tone]} p-5`}>
      <div className="flex items-center gap-2 text-text-muted">
        <span className="material-symbols-rounded text-[18px]">{icon}</span>
        <p className="text-sm font-medium">{label}</p>
      </div>
      <p className="metric-value mt-4 text-[2rem]">{value}</p>
      {hint ? <p className="mt-2 text-sm leading-6 text-text-muted">{hint}</p> : null}
    </article>
  );
}
