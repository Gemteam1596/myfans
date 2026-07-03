import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import RevenueStats from "../../components/admin/RevenueStats";
import RevenueTable from "../../components/admin/RevenueTable";

import "../../assets/css/Admin.css";

function Earnings() {
  return (
    <div className="admin-dashboard">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="admin-main">

        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main className="admin-content">

          {/* Header */}
          <div className="admin-header">
            <div>
              <h1 className="admin-page-title">
                Revenue Management
              </h1>

              <p className="admin-subtitle">
                Manage platform revenue, creator payouts, withdrawals, and transactions.
              </p>
            </div>
          </div>

          {/* Search & Button */}
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
              placeholder="Search revenue..."
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
              Export Revenue
            </button>
          </div>

          {/* Revenue Statistics */}
          <RevenueStats />

          {/* Revenue Table */}
          <RevenueTable />

        </main>

      </div>

    </div>
  );
}

export default Earnings;