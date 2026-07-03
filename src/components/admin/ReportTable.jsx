import "../../assets/css/Admin.css";

const reports = [
  {
    id: 1,
    creator: "Emily Rose",
    post: "Beach Photoshoot",
    reason: "Inappropriate Content",
    date: "2026-07-01",
    status: "Pending",
  },
  {
    id: 2,
    creator: "Sophia",
    post: "Workout Video",
    reason: "Spam",
    date: "2026-06-30",
    status: "Reviewed",
  },
  {
    id: 3,
    creator: "Olivia",
    post: "Premium Selfie",
    reason: "Copyright",
    date: "2026-06-29",
    status: "Pending",
  },
];

function ReportTable() {
  return (
    <div className="admin-table-card">

      <div className="table-header">

        <h3>🚩 Reports & Moderation</h3>

        <button className="admin-btn">
          View All Reports
        </button>

      </div>

      <table className="creator-table">

        <thead>

          <tr>
            <th>Creator</th>
            <th>Reported Post</th>
            <th>Reason</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {reports.map((report) => (

            <tr key={report.id}>

              <td>{report.creator}</td>

              <td>{report.post}</td>

              <td>{report.reason}</td>

              <td>{report.date}</td>

              <td>

                <span
                  className={`status ${
                    report.status === "Pending"
                      ? "pending"
                      : "verified"
                  }`}
                >
                  {report.status}
                </span>

              </td>

              <td>

                <div className="table-actions">

                  <button>👁</button>

                  <button>✅</button>

                  <button>❌</button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ReportTable;