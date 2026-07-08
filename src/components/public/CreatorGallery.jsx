import { useEffect, useState } from "react";
import {
  FaHeart,
  FaComment,
  FaLock,
  FaPlay,
} from "react-icons/fa";

function CreatorGallery({ creator }) {

  const [posts, setPosts] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!creator) return;

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

      const data = await response.json();

      if (data.success) {
        setPosts(data.posts);
      }

    } catch (error) {
      console.error(error);
    }

    setLoading(false);

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
            "https://myfanshub.club/api/" + post.media;

          return (

            <div
              key={post.id}
              className="gallery-card"
            >

              {post.mediaType === "image" && (
                <img
                  src={mediaUrl}
                  alt="Creator Post"
                />
              )}

              {post.mediaType === "video" && (
                <>
                  <video
                    src={mediaUrl}
                    muted
                  />

                  <div className="video-badge">
                    <FaPlay />
                  </div>
                </>
              )}

              {post.visibility === "premium" && (
                <div className="premium-overlay">

                  <FaLock />

                  <span>Premium Content</span>

                </div>
              )}

              <div className="gallery-footer">

                <div>

                  <FaHeart />

                  0

                </div>

                <div>

                  <FaComment />

                  0

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