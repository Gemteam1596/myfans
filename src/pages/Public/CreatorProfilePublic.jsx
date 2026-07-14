import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CreatorHero from "../../components/public/CreatorHero";
import CreatorGallery from "../../components/public/CreatorGallery";

import "../../assets/css/PublicProfile.css";

function CreatorProfilePublic() {
  const { username } = useParams();

  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if a fan is logged in
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (username) {
      loadCreator();
    }
  }, [username]);

  // Save the current creator page so Login.jsx
  // can return the fan here after login.
  useEffect(() => {
    if (!user) {
      localStorage.setItem(
        "redirectAfterLogin",
        window.location.pathname
      );
    }
  }, [user]);

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

      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          padding: "0 20px",
        }}
      >
        <CreatorGallery creator={creator} />
      </div>
    </div>
  );
}

export default CreatorProfilePublic;