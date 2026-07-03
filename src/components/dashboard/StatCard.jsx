import {
  FaImages,
  FaUsers,
  FaHeart,
  FaDollarSign,
} from "react-icons/fa";

import "./Dashboard.css";

function StatCard() {
  const cards = [
    {
      title: "Total Posts",
      value: "18",
      icon: <FaImages />,
      color: "#ff3f86",
    },
    {
      title: "Subscribers",
      value: "124",
      icon: <FaUsers />,
      color: "#8b5cf6",
    },
    {
      title: "Total Likes",
      value: "1,253",
      icon: <FaHeart />,
      color: "#ff7b54",
    },
    {
      title: "Earnings",
      value: "$2,450",
      icon: <FaDollarSign />,
      color: "#22c55e",
    },
  ];

  return (
    <div className="stats-grid">

      {cards.map((card, index) => (

        <div
          className="stat-card"
          key={index}
        >

          <div
            className="stat-icon"
            style={{
              background: card.color,
            }}
          >
            {card.icon}
          </div>

          <div>

            <h6>{card.title}</h6>

            <h2>{card.value}</h2>

            <small>↑ Growing this month</small>

          </div>

        </div>

      ))}

    </div>
  );
}

export default StatCard;