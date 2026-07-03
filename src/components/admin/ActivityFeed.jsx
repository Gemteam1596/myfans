function ActivityFeed() {

  const activities = [

    {
      id: 1,
      action: "Emily Rose uploaded a new post.",
      time: "2 minutes ago",
    },

    {
      id: 2,
      action: "John subscribed to Anna Grace.",
      time: "8 minutes ago",
    },

    {
      id: 3,
      action: "New creator account approved.",
      time: "25 minutes ago",
    },

    {
      id: 4,
      action: "Sophia earned $350 today.",
      time: "1 hour ago",
    },

    {
      id: 5,
      action: "David reported a post.",
      time: "2 hours ago",
    },

  ];

  return (

    <div className="admin-card">

      <h3>🔔 Recent Activity</h3>

      <ul className="activity-list">

        {activities.map((item) => (

          <li key={item.id}>

            <strong>{item.action}</strong>

            <p>{item.time}</p>

          </li>

        ))}

      </ul>

    </div>

  );

}

export default ActivityFeed;