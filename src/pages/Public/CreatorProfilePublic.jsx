import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CreatorHero from "../../components/public/CreatorHero";
import CreatorAbout from "../../components/public/CreatorAbout";
import CreatorStats from "../../components/public/CreatorStats";
import SubscribeCard from "../../components/public/SubscribeCard";
import CreatorGallery from "../../components/public/CreatorGallery";

import "../../assets/css/PublicProfile.css";

function CreatorProfilePublic() {
  const { username } = useParams();

  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      loadCreator();
    }
  }, [username]);

  const loadCreator = async () => {
    try {
      const response = await fetch(
        "https://api.myfanshub.club/api/get-profile.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.trim(),
          }),
        }
      );

      const result = await response.json();

      if (result.success && result.user) {
        setCreator(result.user);
      } else {
        setCreator(null);
      }
    } catch (error) {
      console.error(error);
      setCreator(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#fff",
        }}
      >
        Loading Creator...
      </h2>
    );
  }

  if (!creator) {
    return (
      <div
        style={{
          color: "#fff",
          textAlign: "center",
          padding: "60px",
        }}
      >
        <h2>Creator not found</h2>
      </div>
    );
  }

  return (
    <div className="public-profile">

      <CreatorHero creator={creator} />

      <div className="public-container">

        <div className="public-left">
          <CreatorAbout creator={creator} />
          <CreatorStats creator={creator} />
          <CreatorGallery creator={creator} />
        </div>

        <div className="public-right">
          <SubscribeCard creator={creator} />
        </div>

      </div>

    </div>
  );
}

export default CreatorProfilePublic;