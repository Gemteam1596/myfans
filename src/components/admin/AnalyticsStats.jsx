import {
  FaChartLine,
  FaUsers,
  FaMoneyBillWave,
  FaImages,
} from "react-icons/fa";

function AnalyticsStats() {
  const stats = [
    {
      title: "Platform Revenue",
      value: "$128,540",
      icon: <FaMoneyBillWave />,
      color: "#22c55e",
    },
    {
      title: "Total Users",
      value: "87,757",
      icon: <FaUsers />,
      color: "#3b82f6",
    },
    {
      title: "Total Posts",
      value: "18,452",
      icon: <FaImages />,
      color: "#7c5cff",
    },
    {
      title: "Growth Rate",
      value: "+18.4%",
      icon: <FaChartLine />,
      color: "#f43f5e",
    },
  ];

  return (
    <div className="admin-stats-grid">
      {stats.map((item) => (
        <div
          className="admin-stat-card"
          key={item.title}
        >
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

export default AnalyticsStats;