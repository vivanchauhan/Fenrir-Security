import { Button }   from "../ui/Button";
import { useToast } from "../../context/ToastContext";

export function ScanToolbar({ search, onSearchChange }) {
  const { showToast } = useToast();

  return (
    <div className="flex items-center gap-2.5 mb-4">
      {/* Search */}
      <div className="flex-1 relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">
          🔍
        </span>
        <input
          type="search"
          aria-label="Search scans"
          placeholder="Search scans by name or type..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-3 py-2 rounded-lg border border-black/[0.08] dark:border-white/[0.06] bg-white dark:bg-[#1a1a1a] text-slate-800 dark:text-slate-200 text-sm outline-none font-sans placeholder:text-slate-400"
        />
      </div>

      <Button variant="default" onClick={() => showToast("Filter panel opened")}>⚡ Filter</Button>
      <Button variant="default" onClick={() => showToast("Column selector opened")}>⊞ Column</Button>
      <Button variant="primary" onClick={() => showToast("New scan created!")}>+ New scan</Button>
    </div>
  );
}
