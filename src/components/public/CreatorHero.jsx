import { FaCheckCircle, FaHeart, FaUserFriends } from "react-icons/fa";

function CreatorHero({ creator }) {
  return (
    <div className="creator-hero">

      {/* Cover Image */}
      <div
        className="creator-cover"
        style={{
          backgroundImage: creator.coverImage
            ? `url(${creator.coverImage})`
            : "linear-gradient(135deg,#1f2937,#111827)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="creator-hero-content">

        {/* Avatar */}
        <img
          src={
            creator.profileImage ||
            "https://i.pravatar.cc/200?img=12"
          }
          alt={creator.fullName}
          className="creator-avatar-large"
        />

        {/* Profile Info */}
        <div className="creator-info">

          <h1>
            {creator.fullName || "Creator"}

            <FaCheckCircle className="verified-icon" />
          </h1>

          <p className="creator-category">
            @{creator.username}
          </p>

          <div className="creator-numbers">

            <div>
              <strong>{creator.followers ?? 0}</strong>
              <span>Followers</span>
            </div>

            <div>
              <strong>{creator.posts ?? 0}</strong>
              <span>Posts</span>
            </div>

            <div>
              <strong>{creator.subscribers ?? 0}</strong>
              <span>Subscribers</span>
            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="creator-actions">

          <button className="subscribe-btn">
            Subscribe ${creator.subscriptionPrice || "0"}
          </button>

          <button className="follow-btn">
            <FaUserFriends />
            Follow
          </button>

          <button className="like-btn">
            <FaHeart />
          </button>

        </div>

      </div>

    </div>
  );
}

export default CreatorHero;