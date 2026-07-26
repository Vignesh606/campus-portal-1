import AccordionSection from "../components/AccordionSection";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CourseTable from "@/components/CourseTable";
import { ProctorPanel, CreditPanel, SpotlightPanel } from "@/components/SidePanels";
import { sessionUser, currentSemester, creditStatus, spotlight, proctorMessage } from "@/data/mockData";

export default function DashboardPage() {
  return (
    <div className="app-shell">
      <Navbar user={sessionUser} />
      <div className="body-layout">
        <Sidebar />
        <main className="content">
          <div className="dashboard-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <CourseTable semester={currentSemester} />
              <SpotlightPanel items={spotlight} />
            </div>
            <div className="side-stack">
              <ProctorPanel message={proctorMessage} />
              <CreditPanel status={creditStatus} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
