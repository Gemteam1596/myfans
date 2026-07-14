import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function PostGrid() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api.myfanshub.club/api/get-posts.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: user.uid,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setPosts(result.posts);
      }

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  if (loading) {
    return <h4>Loading posts...</h4>;
  }

  if (posts.length === 0) {
    return <h4>No posts yet.</h4>;
  }

  return (
    <div className="posts-grid">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}

export default PostGrid;