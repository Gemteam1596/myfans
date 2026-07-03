import {
  FaUsers,
  FaImage,
  FaHeart,
  FaDollarSign,
} from "react-icons/fa";

function CreatorStats({ creator }) {
  const stats = [
    {
      title: "Followers",
      value: creator.followers,
      icon: <FaUsers />,
      color: "#7c5cff",
    },
    {
      title: "Subscribers",
      value: creator.subscribers,
      icon: <FaDollarSign />,
      color: "#22c55e",
    },
    {
      title: "Posts",
      value: creator.posts,
      icon: <FaImage />,
      color: "#3b82f6",
    },
    {
      title: "Likes",
      value: creator.likes,
      icon: <FaHeart />,
      color: "#ef4444",
    },
  ];

  return (
    <div className="creator-stats">

      {stats.map((item) => (

        <div className="creator-stat-card" key={item.title}>

          <div
            className="creator-stat-icon"
            style={{ background: item.color }}
          >
            {item.icon}
          </div>

          <div>

            <h4>{item.title}</h4>

            <h2>{item.value}</h2>

          </div>

        </div>

      ))}

    </div>
  );
}

export default CreatorStats;