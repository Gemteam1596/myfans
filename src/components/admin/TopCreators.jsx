function TopCreators() {

  const creators = [

    {
      id: 1,
      name: "Emily Rose",
      subscribers: 4210,
      revenue: "$12,450",
    },

    {
      id: 2,
      name: "Sophia Carter",
      subscribers: 3850,
      revenue: "$10,800",
    },

    {
      id: 3,
      name: "Anna Grace",
      subscribers: 3405,
      revenue: "$9,760",
    },

  ];

  return (

    <div className="admin-card">

      <h3>👑 Top Creators</h3>

      <table className="creator-table">

        <thead>

          <tr>

            <th>Name</th>

            <th>Subscribers</th>

            <th>Revenue</th>

          </tr>

        </thead>

        <tbody>

          {creators.map((creator) => (

            <tr key={creator.id}>

              <td>{creator.name}</td>

              <td>{creator.subscribers}</td>

              <td>{creator.revenue}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default TopCreators;