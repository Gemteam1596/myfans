import {
  FaFlag,
  FaClock,
  FaCheckCircle,
  FaTrash,
} from "react-icons/fa";

function ReportStats() {

  const stats = [
    {
      title: "Total Reports",
      value: "3,842",
      icon: <FaFlag />,
      color: "#3b82f6",
    },
    {
      title: "Pending Review",
      value: "248",
      icon: <FaClock />,
      color: "#f59e0b",
    },
    {
      title: "Resolved",
      value: "3,412",
      icon: <FaCheckCircle />,
      color: "#22c55e",
    },
    {
      title: "Removed Content",
      value: "182",
      icon: <FaTrash />,
      color: "#ef4444",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <div className="stat-card" key={item.title}>

          <div
            className="stat-icon"
            style={{ background: item.color }}
          >
            {item.icon}
          </div>

          <div>
            <div className="stat-title">
              {item.title}
            </div>

            <div className="stat-value">
              {item.value}
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

export default ReportStats;