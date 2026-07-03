import ProfileBanner from "../../components/profile/ProfileBanner";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileStats from "../../components/profile/ProfileStats";
import AboutCard from "../../components/profile/AboutCard";
import SubscribeCard from "../../components/profile/SubscribeCard";
import ProfileGallery from "../../components/profile/ProfileGallery";

import "./CreatorProfile.css";

function CreatorProfile() {
  return (
    <div className="container py-4">

      {/* Cover Banner */}
      <ProfileBanner />

      {/* Creator Header */}
      <ProfileHeader />

      {/* Statistics */}
      <ProfileStats />

      {/* About Creator */}
      <AboutCard />

      {/* Subscription Plans */}
      <SubscribeCard />

      {/* Creator Gallery */}
      <ProfileGallery />

    </div>
  );
}

export default CreatorProfile;