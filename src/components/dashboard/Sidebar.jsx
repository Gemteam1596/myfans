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

function Sidebar() {
  return (
    <aside className="sidebar">

      <div>

        {/* Logo */}

        <div className="logo">
          ⚡ MYFANS
        </div>

        {/* Navigation */}

        <ul className="sidebar-menu">

          <li>
            <NavLink
              to="/creator-dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaHome />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/creator-profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaUser />
              <span>My Profile</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/create-post"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaPlusCircle />
              <span>Create Post</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-posts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaImages />
              <span>My Posts</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/subscribers"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaUsers />
              <span>Subscribers</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaEnvelope />
              <span>Messages</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaChartLine />
              <span>Analytics</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/earnings"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaDollarSign />
              <span>Earnings</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaCog />
              <span>Settings</span>
            </NavLink>
          </li>

        </ul>

      </div>

      {/* Bottom Section */}

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