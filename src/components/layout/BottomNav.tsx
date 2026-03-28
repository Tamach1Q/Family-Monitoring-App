import { NavLink } from "react-router-dom";
import { appRoutes } from "../../app/routes";

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-[30px] border border-white/80 bg-surface/90 px-2 py-2 shadow-floating backdrop-blur-xl">
        <div className="flex items-center justify-between gap-2">
          {appRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                [
                  "flex flex-1 flex-col items-center justify-center rounded-full px-3 py-3 text-xs font-medium transition duration-200",
                  isActive
                    ? "bg-primary/12 text-primary"
                    : "text-text-muted hover:bg-white/70 hover:text-secondary",
                ].join(" ")
              }
            >
              <span className="material-symbols-rounded text-[22px]">{route.icon}</span>
              <span className="mt-1 font-headline text-[12px]">{route.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
