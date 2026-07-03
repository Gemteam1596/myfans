import {
  FaCheckCircle,
  FaLock,
  FaGift,
  FaCrown,
} from "react-icons/fa";

function SubscribeCard({ creator }) {
  return (
    <div className="subscribe-card">

      <div className="subscribe-header">

        <FaCrown className="subscribe-crown" />

        <h2>Become a Subscriber</h2>

        <h1>{creator.subscriptionPrice}</h1>

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

      <button className="subscribe-main-btn">
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