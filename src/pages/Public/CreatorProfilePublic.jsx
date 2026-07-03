import { useParams } from "react-router-dom";

import CreatorHero from "../../components/public/CreatorHero";
import CreatorAbout from "../../components/public/CreatorAbout";
import CreatorStats from "../../components/public/CreatorStats";
import SubscribeCard from "../../components/public/SubscribeCard";
import CreatorGallery from "../../components/public/CreatorGallery";

import "../../assets/css/PublicProfile.css";

function CreatorProfilePublic() {
  const { username } = useParams();

  // Dummy creator data (replace with Firebase later)
  const creator = {
    username,
    name: "Emma Wilson",
    verified: true,
    category: "Fitness • Lifestyle • Travel",
    avatar: "https://i.pravatar.cc/250?img=32",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600",
    followers: "15.4K",
    subscribers: "1.2K",
    posts: 284,
    likes: "92K",
    bio: `Hi 👋

I'm Emma.

I share exclusive fitness content, travel adventures and premium behind-the-scenes content every week.

Subscribe to unlock exclusive photos, videos and private updates.`,
    subscriptionPrice: "$14.99/month",
  };

  return (
    <div className="public-profile">

      <CreatorHero creator={creator} />

      <div className="public-container">

        <div className="public-left">

          <CreatorAbout creator={creator} />

          <CreatorStats creator={creator} />

          <CreatorGallery />

        </div>

        <div className="public-right">

          <SubscribeCard creator={creator} />

        </div>

      </div>

    </div>
  );
}

export default CreatorProfilePublic;