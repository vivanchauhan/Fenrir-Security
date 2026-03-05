import { TopBar }       from "../components/layout/TopBar";
import { ScanProgress } from "../components/scandetail/ScanProgress";
import { MetadataRow }  from "../components/scandetail/MetadataRow";
import { LiveConsole }  from "../components/scandetail/LiveConsole";
import { FindingLog }   from "../components/scandetail/FindingLog";
import { StatusBar }    from "../components/scandetail/StatusBar";

export function ScanDetailPage() {
  return (
    <div className="flex-1 bg-slate-100 dark:bg-[#0a0f1e] overflow-y-auto min-h-screen">
      <TopBar />
      <div className="p-7">
        <ScanProgress />
        <MetadataRow />
        <div className="grid grid-cols-[1fr_380px] gap-4 mb-4">
          <LiveConsole />
          <FindingLog />
        </div>
        <StatusBar />
      </div>
    </div>
  );
}
