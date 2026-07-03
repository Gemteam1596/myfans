function RecentActivity() {
  const activities = [
    {
      title: "New Subscriber",
      time: "2 min ago",
      icon: "💎",
    },
    {
      title: "Payment Received",
      time: "12 min ago",
      icon: "💰",
    },
    {
      title: "New Message",
      time: "35 min ago",
      icon: "💬",
    },
    {
      title: "Post Liked",
      time: "1 hour ago",
      icon: "❤️",
    },
  ];

  return (
    <div className="dashboard-box">
      <h4 className="mb-4">🕒 Recent Activity</h4>

      {activities.map((item, index) => (
        <div className="activity-item" key={index}>
          <div className="activity-icon">
            {item.icon}
          </div>

          <div>
            <h6>{item.title}</h6>
            <small>{item.time}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;