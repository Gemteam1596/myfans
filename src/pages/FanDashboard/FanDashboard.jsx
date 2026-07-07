import { useEffect, useState } from "react";

function FanDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="container py-5 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="container py-5 text-white">
      <h1>Fan Dashboard ❤️</h1>

      <hr />

      <h3>Welcome, {user.fullName || user.username}</h3>

      <p>
        <strong>Username:</strong> @{user.username}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Account:</strong> {user.accountType}
      </p>

      <h3 className="mt-5">Quick Actions</h3>

      <button className="btn btn-danger me-3">
        Browse Creators
      </button>

      <button className="btn btn-outline-light">
        My Subscriptions
      </button>
    </div>
  );
}

export default FanDashboard;