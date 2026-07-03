import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import CreatorStats from "../../components/admin/CreatorStats";
import CreatorManagementTable from "../../components/admin/CreatorManagementTable";

import "../../assets/css/Admin.css";

function Creators() {
  return (
    <div className="admin-dashboard">

      {/* ================= Sidebar ================= */}
      <Sidebar />

      {/* ================= Main Content ================= */}
      <div className="admin-main">

        {/* ================= Top Navigation ================= */}
        <Topbar />

        {/* ================= Page Content ================= */}
        <main className="admin-content">

          {/* ================= Header ================= */}
          <div className="admin-header">

            <div>

              <h1 className="admin-page-title">
                Creator Management
              </h1>

              <p className="admin-subtitle">
                Manage all creators, verify accounts, monitor subscriptions,
                earnings, and platform activity.
              </p>

            </div>

          </div>

          {/* ================= Search & Add Button ================= */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "25px 0",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >

            <input
              type="text"
              placeholder="Search creators..."
              style={{
                flex: 1,
                minWidth: "260px",
                padding: "14px 18px",
                background: "#1b2130",
                border: "1px solid #2a3247",
                color: "#fff",
                borderRadius: "12px",
                outline: "none",
                fontSize: "15px",
              }}
            />

            <button className="admin-btn">
              + Add Creator
            </button>

          </div>

          {/* ================= Statistics ================= */}
          <CreatorStats />

          {/* ================= Creator Table ================= */}
          <CreatorManagementTable />

        </main>

      </div>

    </div>
  );
}

export default Creators;