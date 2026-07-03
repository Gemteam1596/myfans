import { useMemo, useState } from "react";
import {
  FaEye,
  FaEdit,
  FaBan,
  FaTrash,
} from "react-icons/fa";

const fans = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/60?img=11",
    name: "John Smith",
    email: "john@email.com",
    joined: "Jan 12, 2025",
    following: 18,
    spent: 420,
    status: "Active",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/60?img=12",
    name: "Sarah Parker",
    email: "sarah@email.com",
    joined: "Feb 20, 2025",
    following: 7,
    spent: 95,
    status: "Premium",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/60?img=13",
    name: "Daniel Ross",
    email: "dan@email.com",
    joined: "Mar 15, 2025",
    following: 24,
    spent: 860,
    status: "Active",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/60?img=14",
    name: "Emily Clark",
    email: "emily@email.com",
    joined: "Apr 28, 2025",
    following: 2,
    spent: 35,
    status: "Banned",
  },
];

function FanManagementTable() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return fans.filter((fan) => {
      const match =
        fan.name.toLowerCase().includes(search.toLowerCase()) ||
        fan.email.toLowerCase().includes(search.toLowerCase());

      const statusMatch =
        status === "All" || fan.status === status;

      return match && statusMatch;
    });
  }, [search, status]);

  return (
    <div className="admin-table-card">

      <div className="table-toolbar">

        <input
          className="table-search"
          placeholder="Search fans..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="table-filter"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All</option>
          <option>Active</option>
          <option>Premium</option>
          <option>Banned</option>
        </select>

      </div>

      <div className="table-result">
        Showing {filtered.length} fan(s)
      </div>

      <table className="admin-table">

        <thead>

          <tr>
            <th>Fan</th>
            <th>Joined</th>
            <th>Following</th>
            <th>Total Spent</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {filtered.map((fan) => (

            <tr key={fan.id}>

              <td>

                <div className="creator-user">

                  <img
                    src={fan.avatar}
                    className="creator-avatar"
                    alt={fan.name}
                  />

                  <div>
                    <strong>{fan.name}</strong>

                    <div className="creator-email">
                      {fan.email}
                    </div>

                  </div>

                </div>

              </td>

              <td>{fan.joined}</td>

              <td>{fan.following}</td>

              <td>${fan.spent}</td>

              <td>
                <span className={`status ${fan.status.toLowerCase()}`}>
                  {fan.status}
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

export default FanManagementTable;