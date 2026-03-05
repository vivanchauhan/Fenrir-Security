import { Button }    from "../ui/Button";
import { useToast }  from "../../context/ToastContext";

export function TopBar() {
  const { showToast } = useToast();

  return (
    <header className="px-7 py-3 border-b border-black/[0.08] dark:border-white/[0.06] flex items-center justify-between bg-white dark:bg-[#0f172a] flex-shrink-0">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-400">
        <span className="font-semibold text-slate-800 dark:text-slate-200">Scan</span>
        <span>/</span>
        <span>Private Assets</span>
        <span>/</span>
        <span className="text-[#0CC8A8] font-semibold">New Scan</span>
      </nav>

      {/* Actions */}
      <div className="flex gap-2.5">
        <Button variant="default" onClick={() => showToast("Report exported!")}>
          Export Report
        </Button>
        <Button variant="danger" onClick={() => showToast("Scan stopped.")}>
          Stop Scan
        </Button>
      </div>
    </header>
  );
}
