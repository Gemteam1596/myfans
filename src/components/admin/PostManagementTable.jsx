import { useMemo, useState } from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const postData = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/80/80?random=1",
    creator: "Emma Wilson",
    title: "Beach Photoshoot",
    type: "Premium",
    views: 24892,
    likes: 8421,
    comments: 521,
    status: "Published",
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/80/80?random=2",
    creator: "Alex Brown",
    title: "Gym Routine",
    type: "Free",
    views: 18345,
    likes: 6210,
    comments: 384,
    status: "Published",
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/80/80?random=3",
    creator: "Sophia Carter",
    title: "Travel Vlog",
    type: "Premium",
    views: 32450,
    likes: 11422,
    comments: 895,
    status: "Scheduled",
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/80/80?random=4",
    creator: "James Lee",
    title: "Behind The Scenes",
    type: "Free",
    views: 6520,
    likes: 1524,
    comments: 96,
    status: "Reported",
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/80/80?random=5",
    creator: "Mia Davis",
    title: "Night Shoot",
    type: "Premium",
    views: 42891,
    likes: 16542,
    comments: 1324,
    status: "Published",
  },
];

function PostManagementTable() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredPosts = useMemo(() => {

    return postData.filter((post) => {

      const matchSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.creator.toLowerCase().includes(search.toLowerCase());

      const matchFilter =
        filter === "All" ||
        post.type === filter ||
        post.status === filter;

      return matchSearch && matchFilter;

    });

  }, [search, filter]);

  return (

    <div className="admin-table-card">

      <div className="table-toolbar">

        <input
          className="table-search"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="table-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Premium</option>
          <option>Free</option>
          <option>Published</option>
          <option>Scheduled</option>
          <option>Reported</option>
        </select>

      </div>

      <div className="table-result">
        Showing {filteredPosts.length} post(s)
      </div>

      <table className="admin-table">

        <thead>

          <tr>
            <th>Post</th>
            <th>Creator</th>
            <th>Type</th>
            <th>Views</th>
            <th>Likes</th>
            <th>Comments</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {filteredPosts.map((post) => (

            <tr key={post.id}>

              <td>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >

                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 12,
                      objectFit: "cover",
                    }}
                  />

                  <strong>{post.title}</strong>

                </div>

              </td>

              <td>{post.creator}</td>

              <td>

                <span
                  className={`status ${
                    post.type === "Premium"
                      ? "pending"
                      : "active"
                  }`}
                >
                  {post.type}
                </span>

              </td>

              <td>{post.views.toLocaleString()}</td>

              <td>{post.likes.toLocaleString()}</td>

              <td>{post.comments.toLocaleString()}</td>

              <td>

                <span
                  className={`status ${
                    post.status === "Published"
                      ? "active"
                      : post.status === "Scheduled"
                      ? "pending"
                      : "suspended"
                  }`}
                >
                  {post.status}
                </span>

              </td>

              <td>

                <button className="icon-btn blue">
                  <FaEye />
                </button>

                <button className="icon-btn purple">
                  <FaEdit />
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

export default PostManagementTable;