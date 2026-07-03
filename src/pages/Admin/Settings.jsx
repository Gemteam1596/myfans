import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import SettingsPanel from "../../components/admin/SettingsPanel";

import "../../assets/css/Admin.css";

function Settings() {
  return (
    <div className="admin-dashboard">

      <Sidebar />

      <div className="admin-main">

        <Topbar />

        <main className="admin-content">

          <div className="admin-header">
            <div>
              <h1 className="admin-page-title">
                Platform Settings
              </h1>

              <p className="admin-subtitle">
                Configure platform preferences, security, notifications, and system options.
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
              placeholder="Search settings..."
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
              Save Changes
            </button>
          </div>

          <SettingsPanel />

        </main>

      </div>

    </div>
  );
}

export default Settings;