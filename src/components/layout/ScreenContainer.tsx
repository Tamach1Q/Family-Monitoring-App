import type { ReactNode } from "react";

interface ScreenContainerProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  headerContent?: ReactNode;
  children: ReactNode;
}

export function ScreenContainer({
  eyebrow,
  title,
  subtitle,
  headerContent,
  children,
}: ScreenContainerProps) {
  return (
    <div className="space-y-6 pb-4">
      <header className="space-y-3 pt-3">
        {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
        <div className="space-y-1">
          <h1 className="font-headline text-3xl font-bold tracking-tight text-text-strong">{title}</h1>
          <p className="max-w-2xl text-sm leading-6 text-text-muted sm:text-base">{subtitle}</p>
        </div>
        {headerContent}
      </header>

      {children}
    </div>
  );
}
