function PostCard({ post }) {
  return (
    <div className="post-card">

      <img
        src={post.image}
        alt={post.title}
      />

      <div className="post-content">

        <h5>{post.title}</h5>

        <p>{post.caption}</p>

        <div className="post-stats">

          <span>❤️ {post.likes}</span>

          <span>💬 {post.comments}</span>

          <span>👁 {post.views}</span>

        </div>

        <div className="post-actions">

          <button className="btn btn-primary">
            Edit
          </button>

          <button className="btn btn-danger">
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default PostCard;
