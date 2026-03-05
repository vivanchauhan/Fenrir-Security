export function ProgressBar({ percent }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[90px] h-1.5 rounded-full bg-white/10 dark:bg-white/10 overflow-hidden">
        <div
          className="h-full bg-[#0CC8A8] rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-xs text-slate-400">{percent}%</span>
    </div>
  );
}
