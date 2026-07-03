import {
  FaCheckCircle,
  FaEye,
  FaEdit,
  FaTrash,
  FaBan,
} from "react-icons/fa";

const creators = [
  {
    id: 1,
    name: "Emily Rose",
    username: "@emily",
    subscribers: 12840,
    earnings: "$18,420",
    status: "Verified",
    avatar: "https://i.pravatar.cc/60?img=1",
  },
  {
    id: 2,
    name: "Sophia",
    username: "@sophia",
    subscribers: 8940,
    earnings: "$11,230",
    status: "Pending",
    avatar: "https://i.pravatar.cc/60?img=5",
  },
  {
    id: 3,
    name: "Olivia",
    username: "@olivia",
    subscribers: 21350,
    earnings: "$27,540",
    status: "Verified",
    avatar: "https://i.pravatar.cc/60?img=8",
  },
  {
    id: 4,
    name: "Charlotte",
    username: "@charlotte",
    subscribers: 3240,
    earnings: "$4,220",
    status: "Suspended",
    avatar: "https://i.pravatar.cc/60?img=12",
  },
];

function CreatorTable() {
  return (
    <div className="admin-table-card">

      <div className="table-header">

        <h3>Creators Management</h3>

        <button className="admin-btn">
          + Add Creator
        </button>

      </div>

      <table className="creator-table">

        <thead>

          <tr>
            <th>Creator</th>
            <th>Subscribers</th>
            <th>Earnings</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {creators.map((creator) => (

            <tr key={creator.id}>

              <td>

                <div className="creator-info">

                  <img
                    src={creator.avatar}
                    alt={creator.name}
                  />

                  <div>

                    <h5>{creator.name}</h5>

                    <span>{creator.username}</span>

                  </div>

                </div>

              </td>

              <td>{creator.subscribers.toLocaleString()}</td>

              <td>{creator.earnings}</td>

              <td>

                <span
                  className={`status ${creator.status.toLowerCase()}`}
                >
                  {creator.status === "Verified" && (
                    <FaCheckCircle />
                  )}

                  {creator.status}

                </span>

              </td>

              <td>

                <div className="table-actions">

                  <button>
                    <FaEye />
                  </button>

                  <button>
                    <FaEdit />
                  </button>

                  <button>
                    <FaBan />
                  </button>

                  <button>
                    <FaTrash />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CreatorTable;