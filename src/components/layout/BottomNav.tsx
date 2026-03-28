import { NavLink } from "react-router-dom";
import { appRoutes } from "../../app/routes";

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 rounded-t-[1.5rem] border-t border-[#424845]/10 bg-[#f8faf9]/90 shadow-[0_-4px_24px_rgba(25,28,28,0.04)] backdrop-blur-xl">
      <div className="mx-auto max-w-2xl px-4 pb-6 pt-3">
        <div className="flex items-center justify-around gap-2">
          {appRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                [
                  "flex flex-1 flex-col items-center justify-center px-5 py-1.5 text-[#424845] transition duration-200 active:scale-95",
                  isActive
                    ? "rounded-full bg-[#88a096]/20 text-[#4c635a]"
                    : "hover:text-[#8f4c30]",
                ].join(" ")
              }
            >
              <span className="material-symbols-outlined">{route.icon}</span>
              <span className="font-headline text-[0.75rem] font-medium">{route.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
