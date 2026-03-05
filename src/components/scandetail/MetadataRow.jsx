import scanDetail from "../../mock/scanDetail.json";

const FIELDS = [
  { label: "Scan Type",   key: "scanType" },
  { label: "Targets",     key: "targets" },
  { label: "Started At",  key: "startedAt" },
  { label: "Credentials", key: "credentials" },
  { label: "Files",       key: "files" },
  { label: "Checklists",  key: "checklists" },
];

export function MetadataRow() {
  return (
    <div className="bg-white dark:bg-[#0f172a] rounded-xl border border-black/[0.08] dark:border-white/[0.06] px-6 py-4 mb-5 flex flex-wrap gap-8">
      {FIELDS.map(({ label, key }) => (
        <div key={key}>
          <div className="text-xs text-slate-400 mb-0.5">{label}</div>
          <div className={`text-sm font-semibold ${key === "checklists" ? "text-[#0CC8A8]" : "text-slate-800 dark:text-slate-200"}`}>
            {scanDetail[key]}
          </div>
        </div>
      ))}
    </div>
  );
}
