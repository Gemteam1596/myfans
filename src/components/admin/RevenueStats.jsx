import {
  FaDollarSign,
  FaWallet,
  FaArrowUp,
  FaMoneyCheckAlt,
} from "react-icons/fa";

function RevenueStats() {
  const stats = [
    {
      title: "Platform Revenue",
      value: "$128,540",
      icon: <FaDollarSign />,
      color: "#22c55e",
    },
    {
      title: "Creator Payouts",
      value: "$94,820",
      icon: <FaWallet />,
      color: "#7c5cff",
    },
    {
      title: "Monthly Growth",
      value: "+18.4%",
      icon: <FaArrowUp />,
      color: "#3b82f6",
    },
    {
      title: "Pending Withdrawals",
      value: "$8,640",
      icon: <FaMoneyCheckAlt />,
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

export default RevenueStats;