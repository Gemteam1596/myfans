import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    title: "Morning Workout",
    caption: "Starting the day 💪",
    image: "https://picsum.photos/500?1",
    likes: "2.3K",
    comments: 123,
    views: "15K",
  },
  {
    id: 2,
    title: "Beach Shoot",
    caption: "Summer vibes ☀️",
    image: "https://picsum.photos/500?2",
    likes: "5.8K",
    comments: 521,
    views: "42K",
  },
  {
    id: 3,
    title: "Behind The Scenes",
    caption: "Exclusive content 🔥",
    image: "https://picsum.photos/500?3",
    likes: "3.9K",
    comments: 298,
    views: "24K",
  },
];

function PostGrid() {
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