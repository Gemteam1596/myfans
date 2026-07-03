import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import StatCards from "../../components/admin/StatCards";
import RevenueChart from "../../components/admin/RevenueChart";
import CreatorTable from "../../components/admin/CreatorTable";
import FanTable from "../../components/admin/FanTable";
import ReportTable from "../../components/admin/ReportTable";
import PlatformGrowth from "../../components/admin/PlatformGrowth";
import ActivityFeed from "../../components/admin/ActivityFeed";
import TopCreators from "../../components/admin/TopCreators";
import PendingApprovals from "../../components/admin/PendingApprovals";

import "../../assets/css/Admin.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      {/* ================= Sidebar ================= */}
      <Sidebar />

      {/* ================= Main Area ================= */}
      <div className="admin-main">

        {/* ================= Top Navigation ================= */}
        <Topbar />

        {/* ================= Dashboard Content ================= */}
        <main className="admin-content">

          {/* ================= Header ================= */}
          <div className="admin-header">

            <div>

              <h1 className="admin-page-title">
                Welcome Back, Admin 👋
              </h1>

              <p className="admin-subtitle">
                Monitor creators, fans, subscriptions, revenue, reports, and platform activity.
              </p>

            </div>

          </div>

          {/* ================= Statistics ================= */}
          <StatCards />

          {/* ================= Revenue Analytics ================= */}
          <RevenueChart />

          {/* ================= Creator Management ================= */}
          <CreatorTable />

          {/* ================= Fan Management ================= */}
          <FanTable />

          {/* ================= Reports & Moderation ================= */}
          <ReportTable />

          {/* ================= Platform Overview ================= */}
          <div className="admin-grid">

            <PlatformGrowth />

            <ActivityFeed />

          </div>

          {/* ================= Top Creators & Approvals ================= */}
          <div className="admin-grid">

            <TopCreators />

            <PendingApprovals />

          </div>

        </main>

      </div>

    </div>
  );
}

export default AdminDashboard;