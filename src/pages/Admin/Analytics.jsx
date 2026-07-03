import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import AnalyticsStats from "../../components/admin/AnalyticsStats";
import AnalyticsCharts from "../../components/admin/AnalyticsCharts";

import "../../assets/css/Admin.css";

function Analytics() {
  return (
    <div className="admin-dashboard">

      <Sidebar />

      <div className="admin-main">

        <Topbar />

        <main className="admin-content">

          <div className="admin-header">
            <div>
              <h1 className="admin-page-title">
                Analytics Dashboard
              </h1>

              <p className="admin-subtitle">
                Monitor platform growth, revenue, creators, fans, and engagement.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "30px 0",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >

            <input
              type="text"
              placeholder="Search analytics..."
              style={{
                flex: 1,
                minWidth: "260px",
                padding: "15px 18px",
                background: "#1b2130",
                border: "1px solid #2f3650",
                color: "#fff",
                borderRadius: "12px",
                outline: "none",
              }}
            />

            <button className="admin-btn">
              Export Report
            </button>

          </div>

          <AnalyticsStats />

          <AnalyticsCharts />

        </main>

      </div>

    </div>
  );
}

export default Analytics;