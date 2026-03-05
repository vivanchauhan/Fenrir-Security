const VARIANTS = {
  default:
    "border border-black/10 dark:border-white/10 bg-transparent text-slate-700 dark:text-slate-200 hover:opacity-80",
  primary: "border-none bg-[#0CC8A8] text-black font-bold hover:opacity-80",
  danger:
    "border border-red-500/40 bg-transparent text-red-400 font-semibold hover:opacity-80",
};

export function Button({
  children,
  variant = "default",
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-lg text-sm cursor-pointer font-medium transition-opacity font-sans ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
