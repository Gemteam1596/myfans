import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

function CreatorAbout({ creator }) {
  return (
    <div className="public-card">

      <h2>About Me</h2>

      <p className="creator-bio">
        {creator.bio && creator.bio.trim() !== ""
          ? creator.bio
          : "This creator hasn't added a bio yet."}
      </p>

      <div className="social-links">

        {creator.instagram && (
          <a
            href={creator.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>
        )}

        {creator.twitter && (
          <a
            href={creator.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
            Twitter
          </a>
        )}

        {creator.youtube && (
          <a
            href={creator.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
            YouTube
          </a>
        )}

        {creator.website && (
          <a
            href={creator.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
            Website
          </a>
        )}

        {!creator.instagram &&
          !creator.twitter &&
          !creator.youtube &&
          !creator.website && (
            <p className="text-muted">
              No social links available.
            </p>
          )}

      </div>

    </div>
  );
}

export default CreatorAbout;