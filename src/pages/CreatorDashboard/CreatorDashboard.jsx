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
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="dashboard-content">

        <Topbar />

        {/* Header */}
        <div className="dashboard-header">

          <div>

            <h1>Welcome Back 👋</h1>

            <p>
              Manage your content, subscribers and earnings.
            </p>

          </div>

          <button className="btn btn-danger dashboard-create-btn">
            + Create New Post
          </button>

        </div>

        {/* Statistics */}
        <StatCard />

        {/* Earnings + Subscription Summary */}
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

        {/* Activity + Notifications */}

        <div className="row">

          <div className="col-lg-6 mb-4">
            <RecentActivity />
          </div>

          <div className="col-lg-6 mb-4">
            <NotificationsPanel />
          </div>

        </div>

        {/* Goal Tracker + Weekly Performance */}

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