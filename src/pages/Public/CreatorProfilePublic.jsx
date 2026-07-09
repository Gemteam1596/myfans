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
      console.log("========== PUBLIC PROFILE ==========");
      console.log("Username:", username);

      const response = await fetch(
        "https://myfanshub.club/api/get-profile.php",
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

      console.log("HTTP Status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }

      const result = await response.json();

      console.log("API Response:", result);

      if (result.success && result.user) {
        console.log("Creator Loaded Successfully");
        console.log(result.user);

        setCreator(result.user);
      } else {
        console.error("API ERROR:", result);

        alert(
          "API ERROR\n\n" +
          JSON.stringify(result, null, 2)
        );

        setCreator(null);
      }
    } catch (error) {
      console.error("Fetch Error:", error);

      alert(error.message);

      setCreator(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
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

        <p>
          Open Developer Console (F12 → Console)
          and send me the API response.
        </p>
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