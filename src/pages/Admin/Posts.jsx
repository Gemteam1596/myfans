import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import PostStats from "../../components/admin/PostStats";
import PostManagementTable from "../../components/admin/PostManagementTable";

import "../../assets/css/Admin.css";

function Posts() {
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
                Posts Management
              </h1>

              <p className="admin-subtitle">
                Manage creator posts, premium content, reports, and engagement.
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
              placeholder="Search posts..."
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
              + Create Post
            </button>
          </div>

          {/* Statistics */}
          <PostStats />

          {/* Posts Table */}
          <PostManagementTable />

        </main>

      </div>

    </div>
  );
}

export default Posts;