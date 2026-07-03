import { useMemo, useState } from "react";
import {
  FaEye,
  FaCheck,
  FaTrash,
} from "react-icons/fa";

const reportData = [
  {
    id: 1,
    reporter: "John Smith",
    target: "Beach Photoshoot",
    type: "Post",
    reason: "Explicit Content",
    date: "Jan 12, 2025",
    status: "Pending",
  },
  {
    id: 2,
    reporter: "Emily Davis",
    target: "Emma Wilson",
    type: "Creator",
    reason: "Harassment",
    date: "Jan 14, 2025",
    status: "Resolved",
  },
  {
    id: 3,
    reporter: "Michael Lee",
    target: "Night Shoot",
    type: "Post",
    reason: "Spam",
    date: "Jan 15, 2025",
    status: "Pending",
  },
  {
    id: 4,
    reporter: "Sophia Carter",
    target: "Alex Brown",
    type: "Creator",
    reason: "Fake Profile",
    date: "Jan 16, 2025",
    status: "Rejected",
  },
  {
    id: 5,
    reporter: "David Wilson",
    target: "Premium Video",
    type: "Post",
    reason: "Copyright",
    date: "Jan 18, 2025",
    status: "Resolved",
  },
];

function ReportManagementTable() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredReports = useMemo(() => {
    return reportData.filter((report) => {
      const searchMatch =
        report.reporter.toLowerCase().includes(search.toLowerCase()) ||
        report.target.toLowerCase().includes(search.toLowerCase()) ||
        report.reason.toLowerCase().includes(search.toLowerCase());

      const filterMatch =
        filter === "All" || report.status === filter;

      return searchMatch && filterMatch;
    });
  }, [search, filter]);

  return (
    <div className="admin-table-card">

      <div className="table-toolbar">

        <input
          className="table-search"
          placeholder="Search reports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="table-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Resolved</option>
          <option>Rejected</option>
        </select>

      </div>

      <div className="table-result">
        Showing {filteredReports.length} report(s)
      </div>

      <table className="admin-table">

        <thead>
          <tr>
            <th>Reporter</th>
            <th>Target</th>
            <th>Type</th>
            <th>Reason</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredReports.map((report) => (
            <tr key={report.id}>

              <td>{report.reporter}</td>

              <td>{report.target}</td>

              <td>{report.type}</td>

              <td>{report.reason}</td>

              <td>{report.date}</td>

              <td>
                <span
                  className={`status ${
                    report.status === "Resolved"
                      ? "active"
                      : report.status === "Pending"
                      ? "pending"
                      : "suspended"
                  }`}
                >
                  {report.status}
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

export default ReportManagementTable;