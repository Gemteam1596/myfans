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
        {creator.bio}
      </p>

      <div className="social-links">

        <a href="#">
          <FaInstagram />
          Instagram
        </a>

        <a href="#">
          <FaTwitter />
          Twitter
        </a>

        <a href="#">
          <FaYoutube />
          YouTube
        </a>

        <a href="#">
          <FaGlobe />
          Website
        </a>

      </div>

    </div>
  );
}

export default CreatorAbout;