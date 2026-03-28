import { Navigate, Route, Routes } from "react-router-dom";
import { mockUser } from "../data/mockUser";
import { BottomNav } from "../components/layout/BottomNav";
import { TopBar } from "../components/layout/TopBar";
import { appRoutes } from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-text-strong">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-hero-glow opacity-80" />
      <TopBar user={mockUser} />

      <main className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 pb-32 pt-20 sm:px-6">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          {appRoutes.map((route) => {
            const Page = route.element;

            return <Route key={route.path} path={route.path} element={<Page />} />;
          })}
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  );
}
