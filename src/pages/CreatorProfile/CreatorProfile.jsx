import "./CreatorProfile.css";

function CreatorProfile() {
  return (
    <div className="creator-profile-page">

      {/* Cover */}
      <div className="cover-photo"></div>

      <div className="container">

        {/* Profile Header */}
        <div className="profile-header">

          <img
            src="https://i.pravatar.cc/200"
            alt="profile"
            className="profile-image"
          />

          <div className="profile-info">

            <h2>
              Emily Rose
              <span className="verified">✔</span>
            </h2>

            <p className="username">@emilyrose</p>

            <p className="bio">
              Lifestyle Creator • Travel • Fitness • Premium Content
            </p>

            <div className="stats">

              <div>
                <h4>128</h4>
                <span>Posts</span>
              </div>

              <div>
                <h4>18.4K</h4>
                <span>Followers</span>
              </div>

              <div>
                <h4>315</h4>
                <span>Following</span>
              </div>

            </div>

            <div className="profile-buttons">

              <button className="subscribe-btn">
                Subscribe $14.99/mo
              </button>

              <button className="message-btn">
                Message
              </button>

            </div>

          </div>

        </div>

        {/* Tabs */}

        <div className="tabs">

          <button className="active">Photos</button>

          <button>Videos</button>

          <button>About</button>

        </div>

        {/* Gallery */}

        <div className="gallery">

          {[1,2,3,4,5,6,7,8,9].map((item)=>(
            <div className="gallery-item" key={item}>
              <img
                src={`https://picsum.photos/400?random=${item}`}
                alt=""
              />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default CreatorProfile;