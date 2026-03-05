import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors border-none cursor-pointer font-sans"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
