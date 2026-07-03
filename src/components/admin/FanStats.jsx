import {
  FaUsers,
  FaCrown,
  FaUserPlus,
  FaBan,
} from "react-icons/fa";

function FanStats() {
  const stats = [
    {
      title: "Total Fans",
      value: "84,912",
      icon: <FaUsers />,
      color: "#3b82f6",
    },
    {
      title: "Premium Fans",
      value: "12,842",
      icon: <FaCrown />,
      color: "#7c5cff",
    },
    {
      title: "New This Month",
      value: "1,245",
      icon: <FaUserPlus />,
      color: "#22c55e",
    },
    {
      title: "Banned Fans",
      value: "38",
      icon: <FaBan />,
      color: "#ef4444",
    },
  ];

  return (
    <div className="admin-stats-grid">
      {stats.map((item) => (
        <div className="admin-stat-card" key={item.title}>
          <div
            className="admin-stat-icon"
            style={{ background: item.color }}
          >
            {item.icon}
          </div>

          <div className="admin-stat-info">
            <h4>{item.title}</h4>
            <h2>{item.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FanStats;