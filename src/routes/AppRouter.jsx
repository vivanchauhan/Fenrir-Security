import { useState }      from "react";
import { LoginPage }      from "../pages/LoginPage";
import { DashboardPage }  from "../pages/DashboardPage";
import { ScanDetailPage } from "../pages/ScanDetailPage";
import { Sidebar }        from "../components/layout/Sidebar";

export function AppRouter() {
  const [page, setPage] = useState("login");
  const navigate = (to) => setPage(to);

  if (page === "login") {
    return <LoginPage onLogin={() => navigate("dashboard")} />;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activePage={page} onNavigate={navigate} />
      <div className="flex-1 overflow-y-auto">
        {page === "dashboard"  && <DashboardPage  onScanClick={() => navigate("scandetail")} />}
        {page === "scandetail" && <ScanDetailPage />}
      </div>
    </div>
  );
}
