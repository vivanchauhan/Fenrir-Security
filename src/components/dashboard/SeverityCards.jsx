import orgStats from "../../mock/orgStats.json";

const SEVERITY_CONFIG = [
  { key: "critical", label: "Critical Severity", icon: "🚫" },
  { key: "high",     label: "High Severity",     icon: "⚠️" },
  { key: "medium",   label: "Medium Severity",   icon: "⚠️" },
  { key: "low",      label: "Low Severity",      icon: "🔍" },
];

export function SeverityCards() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {SEVERITY_CONFIG.map(({ key, label, icon }) => {
        const data = orgStats.severity[key];
        return (
          <div
            key={key}
            className="bg-white dark:bg-[#0f172a] rounded-xl p-5 border border-black/[0.08] dark:border-white/[0.06]"
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-slate-400 text-sm font-medium">{label}</span>
              <span className="text-lg">{icon}</span>
            </div>
            <div className="text-4xl font-extrabold text-slate-800 dark:text-slate-100 leading-none">
              {data.count}
            </div>
            <div className={`text-xs mt-1.5 ${data.up ? "text-red-400" : "text-green-400"}`}>
              {data.up ? "↑" : "↓"} {data.change} {data.up ? "increase" : "decrease"} than yesterday
            </div>
          </div>
        );
      })}
    </div>
  );
}
