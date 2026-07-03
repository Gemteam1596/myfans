function AboutCard() {
  return (
    <div className="about-card">

      <h3>👤 About Me</h3>

      <p>
        Hi! I'm Emily, a lifestyle and fitness creator sharing exclusive
        behind-the-scenes content, travel adventures, daily vlogs and premium
        photos with my subscribers.
      </p>

      <div className="about-grid">

        <div className="about-item">
          <span>📍 Location</span>
          <strong>Los Angeles, USA</strong>
        </div>

        <div className="about-item">
          <span>🌎 Country</span>
          <strong>United States</strong>
        </div>

        <div className="about-item">
          <span>🎂 Age</span>
          <strong>25</strong>
        </div>

        <div className="about-item">
          <span>📅 Joined</span>
          <strong>January 2023</strong>
        </div>

        <div className="about-item">
          <span>⚡ Response Time</span>
          <strong>Within 1 Hour</strong>
        </div>

        <div className="about-item">
          <span>🌐 Website</span>
          <strong>www.emilyrose.com</strong>
        </div>

      </div>

    </div>
  );
}

export default AboutCard;