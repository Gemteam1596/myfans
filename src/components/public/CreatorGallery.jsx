import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaComment,
  FaLock,
  FaPlay,
} from "react-icons/fa";

function CreatorGallery({ creator }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Check if a fan is logged in
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!creator?.uid) {
      setLoading(false);
      return;
    }

    // Don't load posts until the fan logs in
    if (!user) {
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

  if (!user) {
    return (
      <div className="public-card">

        <div className="gallery-header">
          <h2>Creator Content</h2>
          <p>Login as a Fan to view this creator's content.</p>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "70px 20px",
          }}
        >
          <div style={{ fontSize: "70px" }}>🔒</div>

          <h2 style={{ marginTop: "20px" }}>
            Login Required
          </h2>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "15px",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Please login as a Fan to view photos,
            videos and premium content from this creator.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "35px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/login"
              className="btn btn-primary"
            >
              Fan Login
            </Link>

            <Link
              to="/signup"
              className="btn btn-outline-light"
            >
              Create Fan Account
            </Link>
          </div>
        </div>

      </div>
    );
  }

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
            ? `https://api.myfanshub.club/api/${post.media}`
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

              {post.mediaType === "image" && mediaUrl && (
                <div style={{ position: "relative" }}>

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
                      }}
                    >
                      <FaLock size={48} color="#fff" />

                      <h2
                        style={{
                          color: "#fff",
                          marginTop: 20,
                        }}
                      >
                        Premium Content
                      </h2>

                      <p
                        style={{
                          color: "#dbeafe",
                          marginTop: 10,
                        }}
                      >
                        Subscribe to unlock this post
                      </p>
                    </div>
                  )}

                </div>
              )}

              {post.mediaType === "video" && mediaUrl && (
                <div style={{ position: "relative" }}>

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
                      }}
                    >
                      <FaLock size={48} color="#fff" />
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