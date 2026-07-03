import "./FanTable.css";

const fans = [
  {
    id: 1,
    name: "John Smith",
    email: "john@gmail.com",
    creator: "Emily Rose",
    plan: "Premium",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@gmail.com",
    creator: "Anna Grace",
    plan: "VIP",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Lee",
    email: "michael@gmail.com",
    creator: "Sophia",
    plan: "Basic",
    status: "Cancelled",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@gmail.com",
    creator: "Emily Rose",
    plan: "Premium",
    status: "Active",
  },
];

function FanTable() {
  return (
    <div className="fan-table">

      <div className="table-header">
        <h2>Fans</h2>
      </div>

      <table>

        <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Creator</th>
            <th>Plan</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {fans.map((fan) => (
            <tr key={fan.id}>

              <td>{fan.name}</td>

              <td>{fan.email}</td>

              <td>{fan.creator}</td>

              <td>{fan.plan}</td>

              <td>
                <span
                  className={
                    fan.status === "Active"
                      ? "status active"
                      : "status cancelled"
                  }
                >
                  {fan.status}
                </span>
              </td>

              <td>

                <button className="edit-btn">
                  Suspend
                </button>

                <button className="delete-btn">
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default FanTable;