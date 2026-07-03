import {
  FaDollarSign,
  FaUserTie,
  FaUsers,
  FaClipboardCheck,
} from "react-icons/fa";

import "../../assets/css/Admin.css";

function StatCards() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$128,540",
      change: "+12.5%",
      icon: <FaDollarSign />,
      color: "#22c55e",
    },
    {
      title: "Creators",
      value: "2,845",
      change: "+148",
      icon: <FaUserTie />,
      color: "#8b5cf6",
    },
    {
      title: "Fans",
      value: "84,912",
      change: "+1,245",
      icon: <FaUsers />,
      color: "#3b82f6",
    },
    {
      title: "Subscriptions",
      value: "12,842",
      change: "+8.7%",
      icon: <FaClipboardCheck />,
      color: "#ff4d8d",
    },
  ];

  return (
    <div className="admin-stats-grid">
      {stats.map((item, index) => (
        <div className="admin-stat-card" key={index}>
          <div
            className="admin-stat-icon"
            style={{ background: item.color }}
          >
            {item.icon}
          </div>

          <div className="admin-stat-info">
            <small>{item.title}</small>

            <h2>{item.value}</h2>

            <span>{item.change} this month</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatCards;