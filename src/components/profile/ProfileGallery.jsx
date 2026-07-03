const gallery = [
  {
    id: 1,
    image: "https://picsum.photos/600/600?random=1",
    likes: "2.4K",
    comments: 182,
    premium: false,
    type: "photo",
  },
  {
    id: 2,
    image: "https://picsum.photos/600/600?random=2",
    likes: "5.8K",
    comments: 421,
    premium: true,
    type: "photo",
  },
  {
    id: 3,
    image: "https://picsum.photos/600/600?random=3",
    likes: "3.2K",
    comments: 201,
    premium: false,
    type: "video",
  },
  {
    id: 4,
    image: "https://picsum.photos/600/600?random=4",
    likes: "6.5K",
    comments: 601,
    premium: true,
    type: "photo",
  },
  {
    id: 5,
    image: "https://picsum.photos/600/600?random=5",
    likes: "1.9K",
    comments: 89,
    premium: false,
    type: "video",
  },
  {
    id: 6,
    image: "https://picsum.photos/600/600?random=6",
    likes: "7.1K",
    comments: 932,
    premium: true,
    type: "photo",
  },
];

function ProfileGallery() {
  return (
    <section className="gallery-section">

      <h2 className="section-title">
        📸 Creator Gallery
      </h2>

      <div className="gallery-grid">

        {gallery.map((item) => (

          <div
            key={item.id}
            className="gallery-card"
          >

            <img
              src={item.image}
              alt=""
            />

            <div className="gallery-overlay">

              <div className="gallery-top">

                {item.premium && (
                  <span className="premium-badge">
                    🔒 Premium
                  </span>
                )}

                {item.type === "video" && (
                  <span className="video-badge">
                    ▶ Video
                  </span>
                )}

              </div>

              <div className="gallery-bottom">

                <span>
                  ❤️ {item.likes}
                </span>

                <span>
                  💬 {item.comments}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ProfileGallery;