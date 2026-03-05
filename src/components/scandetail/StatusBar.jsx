import scanDetail from "../../mock/scanDetail.json";

export function StatusBar() {
  const { subAgents, parallelExecutions, operations, critical, high, medium, low } = scanDetail.statusBar;

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-black/[0.08] dark:border-white/[0.06] px-5 py-2.5 flex items-center gap-6 text-xs flex-wrap">
      {[
        { label: "Sub-Agents",          value: subAgents },
        { label: "Parallel Executions", value: parallelExecutions },
        { label: "Operations",          value: operations },
      ].map(({ label, value }) => (
        <span key={label} className="text-slate-400">
          ● {label}: <strong className="text-slate-800 dark:text-slate-200">{value}</strong>
        </span>
      ))}

      <div className="ml-auto flex gap-4">
        <span className="text-severity-critical font-semibold">Critical: {critical}</span>
        <span className="text-severity-high     font-semibold">High: {high}</span>
        <span className="text-severity-medium   font-semibold">Medium: {medium}</span>
        <span className="text-severity-low      font-semibold">Low: {low}</span>
      </div>
    </div>
  );
}
