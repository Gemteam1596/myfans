import { useEffect, useState } from "react";
import {
  FaHeart,
  FaComment,
  FaLock,
  FaPlay,
} from "react-icons/fa";

function CreatorGallery({ creator }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!creator?.uid) {
      setLoading(false);
      return;
    }

    loadPosts();
  }, [creator]);

  const loadPosts = async () => {
    try {
      const response = await fetch(
        "https://myfanshub.club/api/get-posts.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: creator.uid,
          }),
        }
      );

      const result = await response.json();

      console.log("Posts API:", result);

      if (result.success) {
        setPosts(result.posts || []);
      } else {
        console.error(result.message);
      }

    } catch (error) {
      console.error("Load Posts Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="public-card">
        <h3>Loading posts...</h3>
      </div>
    );
  }

  return (
    <div className="public-card">

      <div className="gallery-header">
        <h2>Latest Content</h2>
        <p>Browse free and premium posts.</p>
      </div>

      <div className="gallery-grid">

        {posts.length === 0 && (
          <h4>No posts available.</h4>
        )}

        {posts.map((post) => {

          const mediaUrl =
            post.media
              ? `https://myfanshub.club/api/${post.media}`
              : "";

          const isPremium =
            post.visibility === "premium" ||
            post.visibility === "subscribers";

          return (

            <div
              key={post.id}
              className="gallery-card"
            >

              {post.mediaType === "image" && mediaUrl && (
                <img
                  src={mediaUrl}
                  alt="Creator Post"
                />
              )}

              {post.mediaType === "video" && mediaUrl && (
                <>
                  <video
                    src={mediaUrl}
                    muted
                    controls={false}
                  />

                  <div className="video-badge">
                    <FaPlay />
                  </div>
                </>
              )}

              {isPremium && (
                <div className="premium-overlay">
                  <FaLock />
                  <span>Premium Content</span>
                </div>
              )}

              <div className="gallery-footer">

                <div>
                  <FaHeart />
                  <span>{post.likes || 0}</span>
                </div>

                <div>
                  <FaComment />
                  <span>{post.comments || 0}</span>
                </div>

              </div>

            </div>

          );
        })}

      </div>

    </div>
  );
}

export default CreatorGallery;