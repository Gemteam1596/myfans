import { useMemo, useState } from "react";
import { FaEye, FaEdit, FaBan, FaTrash } from "react-icons/fa";

const creatorData = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/60?img=1",
    name: "Emma Wilson",
    email: "emma@myfans.com",
    joined: "Jan 12, 2025",
    subscribers: 2842,
    earnings: 14220,
    status: "Active",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/60?img=2",
    name: "Alex Brown",
    email: "alex@myfans.com",
    joined: "Feb 02, 2025",
    subscribers: 5112,
    earnings: 28400,
    status: "Active",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/60?img=3",
    name: "Mia Davis",
    email: "mia@myfans.com",
    joined: "Mar 18, 2025",
    subscribers: 821,
    earnings: 3240,
    status: "Pending",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/60?img=4",
    name: "James Lee",
    email: "james@myfans.com",
    joined: "Apr 09, 2025",
    subscribers: 1445,
    earnings: 9820,
    status: "Suspended",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/60?img=5",
    name: "Sophia Carter",
    email: "sophia@myfans.com",
    joined: "May 18, 2025",
    subscribers: 7210,
    earnings: 44100,
    status: "Active",
  },
];

function CreatorManagementTable() {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredCreators = useMemo(() => {
    return creatorData.filter((creator) => {
      const matchName =
        creator.name.toLowerCase().includes(search.toLowerCase()) ||
        creator.email.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        status === "All" || creator.status === status;

      return matchName && matchStatus;
    });
  }, [search, status]);

  return (
    <div className="admin-table-card">

      <div className="table-toolbar">

        <input
          type="text"
          placeholder="Search creators..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="table-search"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="table-filter"
        >
          <option>All</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Suspended</option>
        </select>

      </div>

      <div className="table-result">

        Showing {filteredCreators.length} creator(s)

      </div>

      <table className="admin-table">

        <thead>

          <tr>
            <th>Creator</th>
            <th>Joined</th>
            <th>Subscribers</th>
            <th>Earnings</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {filteredCreators.map((creator) => (

            <tr key={creator.id}>

              <td>

                <div className="creator-user">

                  <img
                    src={creator.avatar}
                    className="creator-avatar"
                    alt={creator.name}
                  />

                  <div>

                    <strong>{creator.name}</strong>

                    <div className="creator-email">
                      {creator.email}
                    </div>

                  </div>

                </div>

              </td>

              <td>{creator.joined}</td>

              <td>{creator.subscribers.toLocaleString()}</td>

              <td>${creator.earnings.toLocaleString()}</td>

              <td>
                <span className={`status ${creator.status.toLowerCase()}`}>
                  {creator.status}
                </span>
              </td>

              <td>

                <button className="icon-btn blue">
                  <FaEye />
                </button>

                <button className="icon-btn purple">
                  <FaEdit />
                </button>

                <button className="icon-btn orange">
                  <FaBan />
                </button>

                <button className="icon-btn red">
                  <FaTrash />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CreatorManagementTable;