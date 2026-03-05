import { useState }      from "react";
import { TopBar }        from "../components/layout/TopBar";
import { OrgStatsBar }   from "../components/dashboard/OrgStatsBar";
import { SeverityCards } from "../components/dashboard/SeverityCards";
import { ScanToolbar }   from "../components/dashboard/ScanToolbar";
import { ScanTable }     from "../components/dashboard/ScanTable";
import allScans          from "../mock/scans.json";

export function DashboardPage({ onScanClick }) {
  const [search, setSearch] = useState("");

  const filteredScans = allScans.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 bg-slate-100 dark:bg-[#0a0f1e] overflow-y-auto min-h-screen">
      <TopBar />
      <OrgStatsBar />
      <div className="p-7">
        <SeverityCards />
        <ScanToolbar search={search} onSearchChange={setSearch} />
        <ScanTable scans={filteredScans} onRowClick={onScanClick} />
      </div>
    </div>
  );
}
