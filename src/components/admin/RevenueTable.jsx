import { useMemo, useState } from "react";
import {
  FaEye,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const revenueData = [
  {
    id: 1,
    creator: "Emma Wilson",
    amount: "$4,250",
    type: "Subscription",
    date: "Jan 12, 2025",
    status: "Completed",
  },
  {
    id: 2,
    creator: "Alex Brown",
    amount: "$2,180",
    type: "Tips",
    date: "Jan 13, 2025",
    status: "Pending",
  },
  {
    id: 3,
    creator: "Sophia Carter",
    amount: "$6,420",
    type: "Premium Content",
    date: "Jan 15, 2025",
    status: "Completed",
  },
  {
    id: 4,
    creator: "James Lee",
    amount: "$1,250",
    type: "Subscription",
    date: "Jan 17, 2025",
    status: "Failed",
  },
  {
    id: 5,
    creator: "Mia Davis",
    amount: "$8,950",
    type: "Premium Content",
    date: "Jan 20, 2025",
    status: "Completed",
  },
];

function RevenueTable() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredRevenue = useMemo(() => {
    return revenueData.filter((item) => {
      const searchMatch =
        item.creator.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase());

      const filterMatch =
        filter === "All" ||
        item.status === filter;

      return searchMatch && filterMatch;
    });
  }, [search, filter]);

  return (
    <div className="admin-table-card">

      <div className="table-toolbar">

        <input
          className="table-search"
          placeholder="Search revenue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="table-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>

      </div>

      <div className="table-result">
        Showing {filteredRevenue.length} transaction(s)
      </div>

      <table className="admin-table">

        <thead>
          <tr>
            <th>Creator</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredRevenue.map((item) => (
            <tr key={item.id}>

              <td>{item.creator}</td>

              <td>{item.amount}</td>

              <td>{item.type}</td>

              <td>{item.date}</td>

              <td>
                <span
                  className={`status ${
                    item.status === "Completed"
                      ? "active"
                      : item.status === "Pending"
                      ? "pending"
                      : "suspended"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td>

                <button className="icon-btn blue">
                  <FaEye />
                </button>

                <button className="icon-btn green">
                  <FaCheck />
                </button>

                <button className="icon-btn red">
                  <FaTimes />
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RevenueTable;