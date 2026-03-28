interface InsightBannerProps {
  icon: string;
  title: string;
  body: string;
  tone?: "warm" | "calm";
}

const toneStyles = {
  warm: {
    wrapper: "border border-secondary-soft/80 bg-secondary-soft/60",
    icon: "bg-white/70 text-secondary",
  },
  calm: {
    wrapper: "border border-primary-soft/90 bg-primary-soft/45",
    icon: "bg-white/70 text-primary",
  },
};

export function InsightBanner({
  icon,
  title,
  body,
  tone = "warm",
}: InsightBannerProps) {
  const style = toneStyles[tone];

  return (
    <section className={`rounded-panel p-5 shadow-card ${style.wrapper}`}>
      <div className="flex items-start gap-4">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${style.icon}`}>
          <span className="material-symbols-rounded text-[22px]">{icon}</span>
        </div>
        <div className="space-y-1">
          <p className="font-headline text-lg font-semibold text-text-strong">{title}</p>
          <p className="text-sm leading-6 text-text-muted sm:text-base">{body}</p>
        </div>
      </div>
    </section>
  );
}
