import {
  FaTachometerAlt,
  FaUsers,
  FaUserTie,
  FaImages,
  FaChartLine,
  FaMoneyBillWave,
  FaFlag,
  FaCog,
  FaSignOutAlt,
  FaShieldAlt,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import "../../assets/css/Admin.css";

function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin-dashboard",
    },
    {
      name: "Creators",
      icon: <FaUserTie />,
      path: "/admin-creators",
    },
    {
      name: "Fans",
      icon: <FaUsers />,
      path: "/admin-fans",
    },
    {
      name: "Posts",
      icon: <FaImages />,
      path: "/admin-posts",
    },
    {
      name: "Analytics",
      icon: <FaChartLine />,
      path: "/admin-analytics",
    },
    {
      name: "Revenue",
      icon: <FaMoneyBillWave />,
      path: "/admin-earnings",
    },
    {
      name: "Reports",
      icon: <FaFlag />,
      path: "/admin-reports",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/admin-settings",
    },
  ];

  return (
    <aside className="admin-sidebar">
      <div>

        <div className="admin-logo">
          <FaShieldAlt />
          <span>MYFANS ADMIN</span>
        </div>

        <ul className="admin-menu">
          {menu.map((item) => (
            <li
              key={item.name}
              className={
                location.pathname === item.path ? "active" : ""
              }
            >
              <Link to={item.path}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

      </div>

      <button className="admin-logout">
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;