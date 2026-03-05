import scanDetail from "../../mock/scanDetail.json";
import { useTheme } from "../../context/ThemeContext";

export function ScanProgress() {
  const { dark } = useTheme();
  const { progress, status, steps, activeStep } = scanDetail;
  const r = 46;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-white dark:bg-[#0f172a] rounded-xl border border-black/[0.08] dark:border-white/[0.06] p-6 mb-5 flex items-center gap-8">
      {/* Circular progress */}
      <div className="relative w-[110px] h-[110px] flex-shrink-0">
        <svg width="110" height="110" style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx="55"
            cy="55"
            r={r}
            fill="none"
            stroke={dark ? "rgba(255,255,255,0.08)" : "#e2e8f0"}
            strokeWidth="8"
          />
          <circle
            cx="55"
            cy="55"
            r={r}
            fill="none"
            stroke="#0CC8A8"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
            {progress}%
          </span>
          <span className="text-xs text-slate-400">{status}</span>
        </div>
      </div>

      {/* Step tracker */}
      <div className="flex-1">
        <div className="flex items-center">
          {steps.map((step, i) => (
            <div
              key={step}
              className={`flex items-center ${i < steps.length - 1 ? "flex-1" : ""}`}
            >
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center z-10
                  ${
                    i === activeStep
                      ? "bg-[#0CC8A8] border-2 border-[#0CC8A8]"
                      : "border-2 border-transparent bg-slate-100 dark:bg-white/[0.06]"
                  }`}
                >
                  {i === activeStep ? (
                    <span className="text-black text-sm">🔍</span>
                  ) : (
                    <span className="text-slate-400 text-xs">○</span>
                  )}
                </div>
                <span
                  className={`text-xs whitespace-nowrap ${i === activeStep ? "text-[#0CC8A8] font-semibold" : "text-slate-400"}`}
                >
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-slate-200 dark:bg-white/[0.06] mx-1 mb-5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
