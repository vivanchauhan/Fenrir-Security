import orgStats from "../../mock/orgStats.json";

export function OrgStatsBar() {
  const stats = [
    { label: "Org",          value: orgStats.org },
    { label: "Owner",        value: orgStats.owner },
    { label: "Total Scans",  value: orgStats.totalScans },
    { label: "Scheduled",    value: orgStats.scheduled },
    { label: "Rescans",      value: orgStats.rescans },
    { label: "Failed Scans", value: orgStats.failedScans },
  ];

  return (
    <div className="px-7 py-3 bg-white dark:bg-[#1a1a1a] border-b border-black/[0.08] dark:border-white/[0.06] flex items-center flex-wrap gap-y-1.5">
      {stats.map((s, i) => (
        <span key={s.label} className="flex items-center">
          <span className="text-sm text-slate-400">
            {s.label}:{" "}
            <strong className="text-slate-800 dark:text-slate-200">{s.value}</strong>
          </span>
          {i < stats.length - 1 && (
            <span className="text-slate-200 dark:text-white/10 mx-6">|</span>
          )}
        </span>
      ))}
      <span className="ml-auto text-xs text-slate-400">🔄 {orgStats.lastUpdated}</span>
    </div>
  );
}
