function NotificationsPanel() {
  const notifications = [
    "🔥 Your latest post reached 10K views",
    "💎 4 new premium subscribers",
    "📈 Earnings increased today",
    "⭐ Profile popularity is rising",
  ];

  return (
    <div className="dashboard-box">
      <h4 className="mb-4">🔔 Notifications</h4>

      {notifications.map((note, index) => (
        <div className="notification-item" key={index}>
          {note}
        </div>
      ))}
    </div>
  );
}

export default NotificationsPanel;