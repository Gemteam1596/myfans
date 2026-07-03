function PendingApprovals() {

  const creators = [

    {
      id: 1,
      name: "Emily Rose",
      category: "Lifestyle",
    },

    {
      id: 2,
      name: "Sophia Carter",
      category: "Fitness",
    },

    {
      id: 3,
      name: "Anna Grace",
      category: "Travel",
    },

  ];

  return (

    <div className="admin-card">

      <h3>⏳ Pending Creator Approvals</h3>

      <table className="creator-table">

        <thead>

          <tr>

            <th>Name</th>

            <th>Category</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {creators.map((creator) => (

            <tr key={creator.id}>

              <td>{creator.name}</td>

              <td>{creator.category}</td>

              <td>

                <button className="edit-btn">
                  Approve
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default PendingApprovals;