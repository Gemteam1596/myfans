import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

import PostToolbar from "../../components/posts/PostToolbar";
import PostGrid from "../../components/posts/PostGrid";

import "./MyPosts.css";

function MyPosts() {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <Topbar />

        <h1 className="mb-4">
          📸 My Posts
        </h1>

        <PostToolbar />

        <PostGrid />

      </main>

    </div>
  );
}

export default MyPosts;