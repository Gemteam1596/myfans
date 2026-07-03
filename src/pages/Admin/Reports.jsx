import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import ReportStats from "../../components/admin/ReportStats";
import ReportManagementTable from "../../components/admin/ReportManagementTable";

import "../../assets/css/Admin.css";

function Reports() {
  return (
    <div className="admin-dashboard">

      <Sidebar />

      <div className="admin-main">

        <Topbar />

        <main className="admin-content">

          <div className="admin-header">
            <div>
              <h1 className="admin-page-title">
                Reports Management
              </h1>

              <p className="admin-subtitle">
                Review reported content, users, and moderation actions.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              margin: "30px 0",
              flexWrap: "wrap",
            }}
          >

            <input
              type="text"
              placeholder="Search reports..."
              style={{
                flex: 1,
                minWidth: "260px",
                padding: "15px 18px",
                borderRadius: "12px",
                border: "1px solid #2f3650",
                background: "#1b2130",
                color: "#fff",
                outline: "none",
              }}
            />

            <button className="admin-btn">
              Export Reports
            </button>

          </div>

          <ReportStats />

          <ReportManagementTable />

        </main>

      </div>

    </div>
  );
}

export default Reports;