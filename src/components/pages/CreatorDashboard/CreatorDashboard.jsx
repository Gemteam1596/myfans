import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import StatCard from "../../components/dashboard/StatCard";
import EarningsChart from "../../components/dashboard/EarningsChart";
import RecentActivity from "../../components/dashboard/RecentActivity";
import NotificationsPanel from "../../components/dashboard/NotificationsPanel";
import GoalTracker from "../../components/dashboard/GoalTracker";
import WeeklyPerformance from "../../components/dashboard/WeeklyPerformance";

import "../../components/dashboard/Dashboard.css";

function CreatorDashboard() {

  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard">

      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="dashboard-content">

        <Topbar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="dashboard-header">

          <div>

            <h1>Welcome Back 👋</h1>

            <p>
              Manage your content, subscribers and earnings.
            </p>

          </div>

          <button
            className="btn btn-danger dashboard-create-btn"
            onClick={() => navigate("/create-post")}
          >
            + Create New Post
          </button>

        </div>

        <StatCard />

        <div className="row mt-4">

          <div className="col-lg-8 mb-4">
            <EarningsChart />
          </div>

          <div className="col-lg-4 mb-4">

            <div className="dashboard-box">

              <h4 className="mb-4">
                💎 Subscription Summary
              </h4>

              <div className="summary-item">
                <span>Active Fans</span>
                <strong>1,284</strong>
              </div>

              <div className="summary-item">
                <span>Monthly Income</span>
                <strong>$8,540</strong>
              </div>

              <div className="summary-item">
                <span>New Subscribers</span>
                <strong>+82</strong>
              </div>

              <div className="summary-item">
                <span>Renewal Rate</span>
                <strong>92%</strong>
              </div>

            </div>

          </div>

        </div>

        <div className="row">

          <div className="col-lg-6 mb-4">
            <RecentActivity />
          </div>

          <div className="col-lg-6 mb-4">
            <NotificationsPanel />
          </div>

        </div>

        <div className="row">

          <div className="col-lg-6 mb-4">
            <GoalTracker />
          </div>

          <div className="col-lg-6 mb-4">
            <WeeklyPerformance />
          </div>

        </div>

      </main>

    </div>
  );
}

export default CreatorDashboard;