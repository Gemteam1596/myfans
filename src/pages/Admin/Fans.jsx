import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import FanStats from "../../components/admin/FanStats";
import FanManagementTable from "../../components/admin/FanManagementTable";

import "../../assets/css/Admin.css";

function Fans() {
  return (
    <div className="admin-dashboard">

      <Sidebar />

      <div className="admin-main">

        <Topbar />

        <main className="admin-content">

          <div className="admin-header">

            <div>

              <h1 className="admin-page-title">
                Fan Management
              </h1>

              <p className="admin-subtitle">
                Manage fan accounts, subscriptions, activity, and spending.
              </p>

            </div>

          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              margin: "25px 0",
              flexWrap: "wrap",
            }}
          >

            <input
              type="text"
              placeholder="Search fans..."
              style={{
                flex: 1,
                minWidth: "260px",
                padding: "14px 18px",
                background: "#1b2130",
                border: "1px solid #2a3247",
                color: "#fff",
                borderRadius: "12px",
                outline: "none",
              }}
            />

            <button className="admin-btn">
              + Add Fan
            </button>

          </div>

          <FanStats />

          <FanManagementTable />

        </main>

      </div>

    </div>
  );
}

export default Fans;