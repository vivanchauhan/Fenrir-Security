import { ThemeToggle } from "../ui/ThemeToggle";

const PRIMARY_NAV = [
  { icon: "⊞", label: "Dashboard", page: "dashboard" },
  { icon: "◫", label: "Projects", page: null },
  { icon: "⊙", label: "Scans", page: "scandetail" },
  { icon: "◷", label: "Schedule", page: null },
];
const SECONDARY_NAV = [
  { icon: "🔔", label: "Notifications" },
  { icon: "⚙", label: "Settings" },
  { icon: "?", label: "Support" },
];

export function Sidebar({ activePage, onNavigate }) {
  const NavItem = ({ icon, label, page }) => {
    const isActive =
      (activePage === "dashboard" && label === "Dashboard") ||
      (activePage === "scandetail" && label === "Scans");

    return (
      <button
        onClick={() => page && onNavigate(page)}
        aria-label={label}
        className={`flex items-center gap-2.5 px-4 py-2 rounded-lg border-none w-full text-left text-sm transition-all duration-150 font-sans cursor-pointer
          ${
            isActive
              ? "bg-[#0CC8A8]/10 text-[#0CC8A8] font-semibold"
              : "bg-transparent text-slate-400 dark:text-slate-400 hover:text-slate-200 font-normal"
          } ${!page ? "cursor-default" : ""}`}
      >
        <span className="text-base">{icon}</span>
        {label}
      </button>
    );
  };

  return (
    <aside className="w-[210px] min-w-[210px] bg-slate-50 dark:bg-[#1a1a1a] border-r border-black/[0.08] dark:border-white/[0.06] flex flex-col h-screen sticky top-0">
      {/* Logo row */}
      <div className="px-4 pt-5 pb-3 flex items-center gap-2 border-b border-black/[0.08] dark:border-white/[0.06]">
        <div className="w-7 h-7 rounded-full bg-[#0CC8A8] flex items-center justify-center text-xs text-black font-bold flex-shrink-0">
          a
        </div>
        <span className="font-bold text-base text-slate-800 dark:text-slate-100">
          aps
        </span>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-2 py-3 overflow-y-auto">
        {PRIMARY_NAV.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        <div className="h-px bg-black/[0.08] dark:bg-white/[0.06] mx-2 my-3" />
        {SECONDARY_NAV.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      {/* User profile */}
      <div className="px-4 py-3 border-t border-black/[0.08] dark:border-white/[0.06] flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0CC8A8] to-cyan-600 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
          A
        </div>
        <div className="overflow-hidden">
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
            admin@edu.com
          </div>
          <div className="text-xs text-slate-400">Security Lead</div>
        </div>
        <span className="ml-auto text-slate-400 text-base cursor-pointer">
          ›
        </span>
      </div>
    </aside>
  );
}
