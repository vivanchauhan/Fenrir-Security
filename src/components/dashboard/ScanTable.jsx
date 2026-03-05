import { StatusChip }  from "../ui/Badge";
import { VulnBadge }   from "../ui/Badge";
import { ProgressBar } from "../ui/ProgressBar";

const COLUMNS = ["Scan Name", "Type", "Status", "Progress", "Vulnerability", "Last Scan"];

export function ScanTable({ scans, onRowClick }) {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-black/[0.08] dark:border-white/[0.06] overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-black/[0.08] dark:border-white/[0.06]">
            {COLUMNS.map((col) => (
              <th key={col} className="px-4 py-3 text-left text-xs text-slate-400 font-semibold tracking-wide">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scans.map((scan) => (
            <tr
              key={scan.id}
              onClick={() => onRowClick(scan)}
              className="border-b border-black/[0.08] dark:border-white/[0.06] cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors"
            >
              <td className="px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-200">{scan.name}</td>
              <td className="px-4 py-3 text-sm text-slate-400">{scan.type}</td>
              <td className="px-4 py-3"><StatusChip status={scan.status} /></td>
              <td className="px-4 py-3"><ProgressBar percent={scan.progress} /></td>
              <td className="px-4 py-3">
                <div className="flex gap-1">
                  {scan.vuln.map((count, i) => <VulnBadge key={i} count={count} colorIndex={i} />)}
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-slate-400">{scan.lastScan}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="px-4 py-2.5 border-t border-black/[0.08] dark:border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
        <span>Showing {scans.length} of 100 Scans</span>
        <div className="flex gap-1.5">
          {["‹", "›"].map((a) => (
            <button key={a} className="px-2.5 py-1 rounded border border-black/[0.08] dark:border-white/[0.06] bg-transparent text-slate-400 cursor-pointer font-sans hover:bg-black/5 dark:hover:bg-white/5">
              {a}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
