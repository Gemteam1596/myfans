import {
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaBan,
} from "react-icons/fa";

function CreatorStats() {
  const stats = [
    {
      title: "Total Creators",
      value: "2,845",
      icon: <FaUsers />,
      color: "#7c5cff",
    },
    {
      title: "Verified",
      value: "2,102",
      icon: <FaCheckCircle />,
      color: "#22c55e",
    },
    {
      title: "Pending",
      value: "184",
      icon: <FaClock />,
      color: "#f59e0b",
    },
    {
      title: "Suspended",
      value: "39",
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

export default CreatorStats;