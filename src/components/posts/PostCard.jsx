function PostCard({ post }) {

  const mediaUrl = "https://myfanshub.club/api/" + post.media;

  const deletePost = async () => {

    const confirmDelete = window.confirm("Are you sure you want to delete this post?");

    if (!confirmDelete) return;

    try {

      const response = await fetch(
        "https://myfanshub.club/api/delete-post.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: post.id,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Post deleted successfully!");
        window.location.reload();
      } else {
        alert(result.message);
      }

    } catch (error) {
      console.error(error);
      alert("Failed to delete post.");
    }

  };

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
        <video controls width="100%">
          <source src={mediaUrl} />
        </video>
      )}

      <div className="post-content">

        <h5>{post.content}</h5>

        <p>
          <strong>Visibility:</strong> {post.visibility}
        </p>

        <small>{post.createdAt}</small>

        <div className="post-actions mt-3">

          <button
            className="btn btn-primary me-2"
          >
            Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={deletePost}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default PostCard;