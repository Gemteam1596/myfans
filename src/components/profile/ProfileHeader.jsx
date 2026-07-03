function ProfileHeader() {
  return (
    <div className="profile-header">

      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Creator"
        className="creator-avatar"
      />

      <div className="profile-info">

        <h2>
          Emily Rose
          <span className="verified">✔</span>
        </h2>

        <p>@emilyrose</p>

        <span className="creator-badge">
          Top 2% Creator
        </span>

      </div>

      <button className="follow-btn">
        Subscribe • $14.99/mo
      </button>

    </div>
  );
}

export default ProfileHeader;