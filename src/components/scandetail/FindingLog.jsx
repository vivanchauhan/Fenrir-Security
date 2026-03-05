import { useState } from "react";
import { SeverityBadge }      from "../ui/Badge";
import { severityBorderClass } from "../../utils/theme";
import findings from "../../mock/findings.json";

export function FindingLog() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-black/[0.08] dark:border-white/[0.06] overflow-hidden">
      <div className="px-5 py-3.5 border-b border-black/[0.08] dark:border-white/[0.06]">
        <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Finding Log</span>
      </div>

      <div className="p-3 flex flex-col gap-2.5 max-h-[420px] overflow-y-auto">
        {findings.map((f) => {
          const isSelected = selectedId === f.id;
          return (
            <div
              key={f.id}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              onClick={() => setSelectedId(isSelected ? null : f.id)}
              onKeyDown={(e) => e.key === "Enter" && setSelectedId(isSelected ? null : f.id)}
              className={`border rounded-xl p-3.5 cursor-pointer transition-all
                ${isSelected
                  ? `${severityBorderClass(f.severity)} bg-white/[0.03]`
                  : "border-black/[0.08] dark:border-white/[0.06] bg-transparent hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <SeverityBadge severity={f.severity} />
                <span className="text-xs text-slate-400">{f.time}</span>
              </div>
              <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">{f.title}</div>
              <div className="text-[#0CC8A8] text-xs mb-1.5 font-mono">{f.path}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{f.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
