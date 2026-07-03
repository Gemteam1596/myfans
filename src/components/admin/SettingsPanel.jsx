import { useState } from "react";

function SettingsPanel() {
  const [settings, setSettings] = useState({
    platformName: "MYFANS",
    commission: "20",
    supportEmail: "support@myfans.com",
    creatorRegistration: true,
    emailNotifications: true,
    withdrawalApproval: true,
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div
      className="admin-table-card"
      style={{
        padding: "35px",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "25px",
        }}
      >
        {/* Platform Name */}
        <div>
          <label className="table-result">
            Platform Name
          </label>

          <input
            className="table-search"
            name="platformName"
            value={settings.platformName}
            onChange={handleChange}
          />
        </div>

        {/* Commission */}
        <div>
          <label className="table-result">
            Platform Commission (%)
          </label>

          <input
            className="table-search"
            type="number"
            name="commission"
            value={settings.commission}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div>
          <label className="table-result">
            Support Email
          </label>

          <input
            className="table-search"
            type="email"
            name="supportEmail"
            value={settings.supportEmail}
            onChange={handleChange}
          />
        </div>

        {/* Switches */}

        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
          }}
        >
          Creator Registration

          <input
            type="checkbox"
            name="creatorRegistration"
            checked={settings.creatorRegistration}
            onChange={handleChange}
          />
        </label>

        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
          }}
        >
          Email Notifications

          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleChange}
          />
        </label>

        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
          }}
        >
          Manual Withdrawal Approval

          <input
            type="checkbox"
            name="withdrawalApproval"
            checked={settings.withdrawalApproval}
            onChange={handleChange}
          />
        </label>

        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
          }}
        >
          Maintenance Mode

          <input
            type="checkbox"
            name="maintenanceMode"
            checked={settings.maintenanceMode}
            onChange={handleChange}
          />
        </label>

        <button
          className="admin-btn"
          style={{
            width: "220px",
            marginTop: "15px",
          }}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default SettingsPanel;