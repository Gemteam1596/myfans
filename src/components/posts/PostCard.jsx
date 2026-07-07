function PostCard({ post }) {

  const mediaUrl =
    "https://myfanshub.club/api/" + post.media;

  return (
    <div className="post-card">

      {post.mediaType === "image" && (
        <img
          src={mediaUrl}
          alt="Post"
          className="img-fluid"
        />
      )}

      {post.mediaType === "video" && (
        <video
          controls
          width="100%"
        >
          <source
            src={mediaUrl}
          />
        </video>
      )}

      <div className="post-content">

        <h5>{post.content}</h5>

        <p>
          Visibility:
          {" "}
          {post.visibility}
        </p>

        <small>
          {post.createdAt}
        </small>

        <div className="post-actions mt-3">

          <button className="btn btn-primary me-2">
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