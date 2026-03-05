import { severityBgClass, statusChipClasses } from "../../utils/theme";

export function SeverityBadge({ severity }) {
  return (
    <span className={`${severityBgClass(severity)} text-white text-xs font-bold px-2.5 py-0.5 rounded`}>
      {severity}
    </span>
  );
}

export function StatusChip({ status }) {
  return (
    <span className={`${statusChipClasses(status)} text-xs font-semibold px-3 py-1 rounded-full`}>
      {status}
    </span>
  );
}

export function VulnBadge({ count, colorIndex }) {
  const colors = [
    "bg-severity-critical",
    "bg-severity-high",
    "bg-severity-medium",
    "bg-severity-low",
  ];
  return (
    <span className={`${colors[colorIndex] || "bg-gray-500"} text-white text-xs font-bold px-1.5 py-0.5 rounded min-w-[20px] text-center inline-block`}>
      {count}
    </span>
  );
}
