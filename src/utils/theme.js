// Returns a Tailwind bg class for a severity level
export const severityBgClass = (severity) => {
  const map = {
    Critical: "bg-severity-critical",
    High:     "bg-severity-high",
    Medium:   "bg-severity-medium",
    Low:      "bg-severity-low",
  };
  return map[severity] || "bg-gray-500";
};

export const severityBorderClass = (severity) => {
  const map = {
    Critical: "border-severity-critical",
    High:     "border-severity-high",
    Medium:   "border-severity-medium",
    Low:      "border-severity-low",
  };
  return map[severity] || "border-gray-500";
};

export const severityTextClass = (severity) => {
  const map = {
    Critical: "text-severity-critical",
    High:     "text-severity-high",
    Medium:   "text-severity-medium",
    Low:      "text-severity-low",
  };
  return map[severity] || "text-gray-500";
};

export const statusChipClasses = (status) => {
  const map = {
    Completed: "bg-teal-500/10 text-[#0CC8A8] border border-[#0CC8A8]/30",
    Scheduled: "bg-slate-400/10 text-slate-400 border border-slate-400/30",
    Failed:    "bg-red-500/10 text-red-400 border border-red-500/30",
  };
  return map[status] || "bg-gray-500/10 text-gray-400";
};
