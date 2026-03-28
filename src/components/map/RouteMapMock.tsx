interface RouteMapMockProps {
  routeName: string;
}

export function RouteMapMock({ routeName }: RouteMapMockProps) {
  return (
    <section className="panel overflow-hidden p-0">
      <div className="relative h-[320px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),rgba(207,225,215,0.55)),linear-gradient(135deg,rgba(231,236,233,0.85),rgba(248,250,249,0.95))]">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 360 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="route-grid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(76,99,90,0.08)" strokeWidth="1" />
            </pattern>
            <linearGradient id="route-line" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#8f4c30" />
              <stop offset="100%" stopColor="#4c635a" />
            </linearGradient>
          </defs>

          <rect fill="url(#route-grid)" height="320" width="360" />
          <circle cx="88" cy="88" fill="rgba(76,99,90,0.08)" r="34" />
          <circle cx="266" cy="210" fill="rgba(143,76,48,0.08)" r="42" />
          <path
            d="M92 230 C120 178, 164 176, 180 130 S240 66, 280 100 316 192, 272 228 178 268, 122 250 72 206, 92 160"
            fill="none"
            stroke="url(#route-line)"
            strokeLinecap="round"
            strokeWidth="8"
          />
          <circle cx="92" cy="230" fill="#4c635a" r="10" />
          <circle cx="272" cy="228" fill="#8f4c30" r="10" />
          <circle cx="92" cy="230" fill="#ffffff" r="4" />
          <circle cx="272" cy="228" fill="#ffffff" r="4" />
        </svg>

        <div className="absolute left-4 top-4 rounded-full bg-white/88 px-4 py-2 shadow-card backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-sm font-medium text-text-strong">散歩完了</span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 max-w-[75%] rounded-[24px] bg-white/90 px-4 py-4 shadow-card backdrop-blur">
          <p className="section-label">ルート</p>
          <p className="mt-2 font-headline text-xl font-semibold text-text-strong">{routeName}</p>
          <p className="mt-1 text-sm text-text-muted">マップ API には接続せず、デモ用にやわらかく表示しています。</p>
        </div>
      </div>
    </section>
  );
}
