import {
  FaImages,
  FaLock,
  FaEye,
  FaFlag,
} from "react-icons/fa";

function PostStats() {
  const stats = [
    {
      title: "Total Posts",
      value: "18,452",
      icon: <FaImages />,
      color: "#3b82f6",
    },
    {
      title: "Premium Posts",
      value: "8,924",
      icon: <FaLock />,
      color: "#7c5cff",
    },
    {
      title: "Total Views",
      value: "4.8M",
      icon: <FaEye />,
      color: "#22c55e",
    },
    {
      title: "Reported Posts",
      value: "84",
      icon: <FaFlag />,
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

export default PostStats;