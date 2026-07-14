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
        "https://api.myfanshub.club/api/get-posts.php",
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

      if (result.success) {
        setPosts(result.posts || []);
      }
    } catch (err) {
      console.error(err);
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

          const mediaUrl = post.media
              ? `https://www.myfanshub.club/${post.media}`
              : "";
          const isPremium =
            post.visibility === "premium" ||
            post.visibility === "subscribers";

          return (
            <div
              key={post.id}
              className="gallery-card"
              style={{
                overflow: "hidden",
                borderRadius: "20px",
                position: "relative",
              }}
            >

              {/* IMAGE */}

              {post.mediaType === "image" && mediaUrl && (

                <div
                  style={{
                    position: "relative",
                  }}
                >

                  <img
                    src={mediaUrl}
                    alt="Creator Post"
                    style={{
                      width: "100%",
                      display: "block",
                      transition: ".35s",
                      filter: isPremium
                        ? "blur(18px) brightness(.35)"
                        : "none",
                      transform: isPremium
                        ? "scale(1.08)"
                        : "scale(1)",
                    }}
                  />

                  {isPremium && (

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        background:
                          "linear-gradient(to bottom,rgba(8,25,80,.20),rgba(8,25,80,.55),rgba(0,0,0,.85))",
                        backdropFilter: "blur(3px)",
                      }}
                    >

                      <FaLock
                        size={48}
                        color="#fff"
                      />

                      <h2
                        style={{
                          color: "#fff",
                          marginTop: 20,
                          fontSize: 30,
                          fontWeight: 700,
                        }}
                      >
                        Premium Content
                      </h2>

                      <p
                        style={{
                          color: "#dbeafe",
                          marginTop: 8,
                        }}
                      >
                        Subscribe to unlock this post
                      </p>

                      <button
                        style={{
                          marginTop: 25,
                          padding: "14px 40px",
                          border: "none",
                          borderRadius: 14,
                          cursor: "pointer",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: 17,
                          background:
                            "linear-gradient(90deg,#2563eb,#4f46e5,#2563eb)",
                          boxShadow:
                            "0 12px 30px rgba(37,99,235,.45)",
                        }}
                      >
                        Unlock Now
                      </button>

                    </div>

                  )}

                </div>

              )}

              {/* VIDEO */}

              {post.mediaType === "video" && mediaUrl && (

                <div
                  style={{
                    position: "relative",
                  }}
                >

                  <video
                    src={mediaUrl}
                    muted
                    controls={false}
                    style={{
                      width: "100%",
                      filter: isPremium
                        ? "blur(18px) brightness(.35)"
                        : "none",
                    }}
                  />

                  <div className="video-badge">
                    <FaPlay />
                  </div>

                  {isPremium && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background:
                          "linear-gradient(to bottom,rgba(8,25,80,.20),rgba(8,25,80,.55),rgba(0,0,0,.85))",
                        backdropFilter: "blur(3px)",
                      }}
                    >
                      <FaLock
                        size={48}
                        color="#fff"
                      />
                    </div>
                  )}

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