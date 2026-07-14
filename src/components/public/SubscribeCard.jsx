import {
  FaCheckCircle,
  FaLock,
  FaGift,
  FaCrown,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

function SubscribeCard({ creator }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubscribe = () => {
    if (!creator?.username) {
      alert("Creator profile is not available.");
      return;
    }

    navigate(`/subscribe/${creator.username}`);
  };

  // ==========================
  // Guest User
  // ==========================
  if (!user) {
    return (
      <div className="subscribe-card">

        <div className="subscribe-header">

          <FaLock className="subscribe-crown" />

          <h2>Fan Login Required</h2>

          <h1>🔒</h1>

          <p>
            Login as a Fan to subscribe and unlock premium content.
          </p>

        </div>

        <div className="subscribe-benefits">

          <div className="benefit">
            <FaCheckCircle />
            <span>View Premium Posts</span>
          </div>

          <div className="benefit">
            <FaCheckCircle />
            <span>Watch Exclusive Videos</span>
          </div>

          <div className="benefit">
            <FaCheckCircle />
            <span>Direct Creator Messages</span>
          </div>

          <div className="benefit">
            <FaCheckCircle />
            <span>Subscribe Anytime</span>
          </div>

        </div>

        <Link
          to="/login"
          className="subscribe-main-btn"
          style={{
            textDecoration: "none",
            display: "block",
            textAlign: "center",
          }}
        >
          Fan Login
        </Link>

        <Link
          to="/signup"
          className="btn btn-outline-light w-100 mt-3"
        >
          Create Fan Account
        </Link>

      </div>
    );
  }

  // ==========================
  // Logged In Fan
  // ==========================
  return (
    <div className="subscribe-card">

      <div className="subscribe-header">

        <FaCrown className="subscribe-crown" />

        <h2>Become a Subscriber</h2>

        <h1>
          {creator?.subscriptionPrice || "0"} USDT
        </h1>

        <p>Billed monthly • Cancel anytime</p>

      </div>

      <div className="subscribe-benefits">

        <div className="benefit">
          <FaCheckCircle />
          <span>Unlimited Premium Posts</span>
        </div>

        <div className="benefit">
          <FaCheckCircle />
          <span>Exclusive Photos & Videos</span>
        </div>

        <div className="benefit">
          <FaCheckCircle />
          <span>Direct Creator Updates</span>
        </div>

        <div className="benefit">
          <FaCheckCircle />
          <span>Priority Messaging</span>
        </div>

      </div>

      <button
        className="subscribe-main-btn"
        onClick={handleSubscribe}
      >
        Subscribe Now
      </button>

      <div className="locked-content">

        <FaLock />

        <span>
          Subscribe to unlock premium content.
        </span>

      </div>

      <div className="gift-box">

        <FaGift />

        <span>
          Gift a subscription to a friend.
        </span>

      </div>

    </div>
  );
}

export default SubscribeCard;