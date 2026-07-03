function ProfileStats() {
  const stats = [
    {
      title: "Subscribers",
      value: "12.4K",
      icon: "👥",
      color: "#ff4d8d",
    },
    {
      title: "Posts",
      value: "428",
      icon: "📸",
      color: "#8b5cf6",
    },
    {
      title: "Likes",
      value: "2.1M",
      icon: "❤️",
      color: "#ff7849",
    },
    {
      title: "Rating",
      value: "4.98",
      icon: "⭐",
      color: "#22c55e",
    },
  ];

  return (
    <div className="profile-stats">

      {stats.map((stat, index) => (

        <div className="profile-stat-card" key={index}>

          <div
            className="profile-stat-icon"
            style={{ background: stat.color }}
          >
            {stat.icon}
          </div>

          <div>

            <h2>{stat.value}</h2>

            <p>{stat.title}</p>

          </div>

        </div>

      ))}

    </div>
  );
}

export default ProfileStats;