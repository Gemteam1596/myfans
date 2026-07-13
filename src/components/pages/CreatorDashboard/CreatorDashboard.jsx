import { useState, useEffect } from "react";
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
const [profileUrl, setProfileUrl] = useState("");
const [copied, setCopied] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("TOGGLE SIDEBAR");
    setSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
const closeSidebar = () => {
  setSidebarOpen(false);
};
useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.username) {
    setProfileUrl(
      `${window.location.origin}/creator/${user.username}`
    );
  }
}, []);
const copyProfileLink = async () => {
  if (!profileUrl) return;

  await navigator.clipboard.writeText(profileUrl);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
  return (
    <div className="dashboard">

      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={closeSidebar}
      />

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      <main className="dashboard-content">

        <Topbar
          toggleSidebar={toggleSidebar}
        />

        <div className="dashboard-header">

          <div>

  <h1>Welcome Back 👋</h1>

  <p>
    Manage your content, subscribers and earnings.
  </p>

  <div
    style={{
      marginTop: "20px",
      background: "#1d2233",
      padding: "15px",
      borderRadius: "12px"
    }}
  >

    <label
      style={{
        color: "#fff",
        fontWeight: 600,
        marginBottom: "8px",
        display: "block"
      }}
    >
      Your Public Profile
    </label>

    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap"
      }}
    >

      <input
        value={profileUrl}
        readOnly
        style={{
          flex: 1,
          minWidth: "250px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #444",
          background: "#0f172a",
          color: "#fff"
        }}
      />

      <button
        className="btn btn-primary"
        onClick={copyProfileLink}
      >
        {copied ? "Copied ✓" : "Copy URL"}
      </button>

    </div>

  </div>

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