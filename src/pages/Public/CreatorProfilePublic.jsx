import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

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
    loadCreator();
  }, [username]);

  const loadCreator = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        setCreator(snapshot.docs[0].data());
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!creator) {
    return <h2 style={{ textAlign: "center" }}>Creator not found</h2>;
  }

  return (
    <div className="public-profile">
      <CreatorHero creator={creator} />

      <div className="public-container">
        <div className="public-left">
          <CreatorAbout creator={creator} />

          <CreatorStats creator={creator} />

          {/* Pass creator to gallery */}
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