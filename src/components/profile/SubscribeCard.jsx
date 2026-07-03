function SubscribeCard() {
  return (
    <div className="subscribe-section">

      <h2 className="section-title">
        💎 Choose Your Membership
      </h2>

      <div className="plans-grid">

        {/* Basic */}

        <div className="plan-card">

          <h3>Basic</h3>

          <h1>$9.99</h1>

          <small>/month</small>

          <ul>

            <li>✔ Exclusive Photos</li>

            <li>✔ Creator Feed</li>

            <li>✔ Comment Access</li>

            <li>✖ Direct Messages</li>

          </ul>

          <button className="plan-btn">
            Subscribe
          </button>

        </div>

        {/* Premium */}

        <div className="plan-card featured">

          <span className="popular-tag">
            MOST POPULAR
          </span>

          <h3>Premium</h3>

          <h1>$19.99</h1>

          <small>/month</small>

          <ul>

            <li>✔ Everything in Basic</li>

            <li>✔ HD Videos</li>

            <li>✔ Direct Messages</li>

            <li>✔ Weekly Livestreams</li>

          </ul>

          <button className="plan-btn">
            Subscribe
          </button>

        </div>

        {/* VIP */}

        <div className="plan-card">

          <h3>VIP</h3>

          <h1>$49.99</h1>

          <small>/month</small>

          <ul>

            <li>✔ Everything Included</li>

            <li>✔ Private Chat</li>

            <li>✔ Custom Requests</li>

            <li>✔ VIP Badge</li>

          </ul>

          <button className="plan-btn">
            Subscribe
          </button>

        </div>

      </div>

    </div>
  );
}

export default SubscribeCard;