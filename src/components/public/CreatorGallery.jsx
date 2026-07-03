import {
  FaHeart,
  FaComment,
  FaLock,
  FaPlay,
} from "react-icons/fa";

const posts = [
  {
    id: 1,
    image: "https://picsum.photos/600/700?random=11",
    likes: "14.2K",
    comments: "632",
    premium: false,
    type: "photo",
  },
  {
    id: 2,
    image: "https://picsum.photos/600/700?random=12",
    likes: "10.8K",
    comments: "481",
    premium: true,
    type: "photo",
  },
  {
    id: 3,
    image: "https://picsum.photos/600/700?random=13",
    likes: "18.5K",
    comments: "925",
    premium: false,
    type: "video",
  },
  {
    id: 4,
    image: "https://picsum.photos/600/700?random=14",
    likes: "9.4K",
    comments: "312",
    premium: true,
    type: "photo",
  },
  {
    id: 5,
    image: "https://picsum.photos/600/700?random=15",
    likes: "23.7K",
    comments: "1.4K",
    premium: false,
    type: "video",
  },
  {
    id: 6,
    image: "https://picsum.photos/600/700?random=16",
    likes: "15.6K",
    comments: "782",
    premium: true,
    type: "photo",
  },
];

function CreatorGallery() {
  return (
    <div className="public-card">

      <div className="gallery-header">

        <h2>Latest Content</h2>

        <p>Browse public and premium posts.</p>

      </div>

      <div className="gallery-grid">

        {posts.map((post) => (

          <div
            key={post.id}
            className="gallery-card"
          >

            <img
              src={post.image}
              alt="Creator Post"
            />

            {post.type === "video" && (
              <div className="video-badge">
                <FaPlay />
              </div>
            )}

            {post.premium && (
              <div className="premium-overlay">

                <FaLock />

                <span>Premium Content</span>

              </div>
            )}

            <div className="gallery-footer">

              <div>

                <FaHeart />

                {post.likes}

              </div>

              <div>

                <FaComment />

                {post.comments}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CreatorGallery;