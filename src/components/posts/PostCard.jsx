import { useState } from "react";

function PostCard({ post }) {
  const mediaUrl = "https://api.myfanshub.club/api/" + post.media;

  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(post.content);
  const [visibility, setVisibility] = useState(post.visibility);
  const [saving, setSaving] = useState(false);

  const savePost = async () => {
    setSaving(true);

    try {
      const response = await fetch(
        "https://api.myfanshub.club/api/update-post.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: post.id,
            content,
            visibility,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("✅ Post updated successfully!");
        window.location.reload();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update post.");
    } finally {
      setSaving(false);
    }
  };

  const deletePost = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      const response = await fetch(
        "https://api.myfanshub.club/api/delete-post.php",
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

        {editing ? (
          <>
            <textarea
              className="form-control mb-3"
              rows="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <select
              className="form-select mb-3"
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
            >
              <option value="free">Free</option>
              <option value="subscribers">
                Subscribers Only
              </option>
            </select>

            <button
              className="btn btn-success me-2"
              onClick={savePost}
              disabled={saving}
            >
              {saving ? "Saving..." : "Save"}
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h5>{post.content}</h5>

            <p>
              <strong>Visibility:</strong> {post.visibility}
            </p>

            <small>{post.createdAt}</small>

            <div className="post-actions mt-3">

              <button
                className="btn btn-primary me-2"
                onClick={() => setEditing(true)}
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
          </>
        )}

      </div>

    </div>
  );
}

export default PostCard;