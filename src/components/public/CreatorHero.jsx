import { FaCheckCircle, FaHeart, FaUserFriends } from "react-icons/fa";

function CreatorHero({ creator }) {
  return (
    <div className="creator-hero">

      {/* Cover Image */}
      <div
        className="creator-cover"
        style={{
          backgroundImage: `url(${creator.cover})`,
        }}
      ></div>

      <div className="creator-hero-content">

        {/* Avatar */}
        <img
          src={creator.avatar}
          alt={creator.name}
          className="creator-avatar-large"
        />

        {/* Profile Info */}
        <div className="creator-info">

          <h1>

            {creator.name}

            {creator.verified && (
              <FaCheckCircle className="verified-icon" />
            )}

          </h1>

          <p className="creator-category">
            {creator.category}
          </p>

          <div className="creator-numbers">

            <div>
              <strong>{creator.followers}</strong>
              <span>Followers</span>
            </div>

            <div>
              <strong>{creator.posts}</strong>
              <span>Posts</span>
            </div>

            <div>
              <strong>{creator.subscribers}</strong>
              <span>Subscribers</span>
            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="creator-actions">

          <button className="subscribe-btn">
            Subscribe
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