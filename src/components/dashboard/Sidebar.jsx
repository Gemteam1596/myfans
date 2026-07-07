import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaPlusCircle,
  FaImages,
  FaUsers,
  FaEnvelope,
  FaChartLine,
  FaDollarSign,
  FaCog,
  FaSignOutAlt,
  FaCrown,
} from "react-icons/fa";

import "./Dashboard.css";

function Sidebar({ isOpen = false, closeSidebar = () => {} }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>

      <div>

        <div className="logo">
          ⚡ MYFANS
        </div>

        <ul className="sidebar-menu">

          <li>
            <NavLink
              to="/creator-dashboard"
              onClick={closeSidebar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaHome />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/creator-profile"
              onClick={closeSidebar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaUser />
              <span>My Profile</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/create-post"
              onClick={closeSidebar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaPlusCircle />
              <span>Create Post</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-posts"
              onClick={closeSidebar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaImages />
              <span>My Posts</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/subscribers"
              onClick={closeSidebar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaUsers />
              <span>Subscribers</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/messages"
              onClick={closeSidebar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaEnvelope />
              <span>Messages</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/analytics"
              onClick={closeSidebar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaChartLine />
              <span>Analytics</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/earnings"
              onClick={closeSidebar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaDollarSign />
              <span>Earnings</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              onClick={closeSidebar}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaCog />
              <span>Settings</span>
            </NavLink>
          </li>

        </ul>

      </div>

      <div>

        <div className="premium-card">

          <FaCrown className="premium-icon" />

          <h4>Premium</h4>

          <p>
            Unlock advanced creator tools and analytics.
          </p>

          <button>
            Upgrade
          </button>

        </div>

        <button className="logout-btn">

          <FaSignOutAlt />

          <span>Logout</span>

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;