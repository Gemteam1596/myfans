import "./CreatorProfile.css";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

function CreatorProfile() {
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    fullName: "",
    username: "",
    bio: "",
    subscriptionPrice: "14.99",
    profileImage: "https://i.pravatar.cc/200",
    coverImage: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const user = auth.currentUser;

    if (!user) return;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProfile({
        ...profile,
        ...docSnap.data(),
      });
    }

    setLoading(false);
  }

  async function saveProfile() {
  const user = auth.currentUser;

  if (!user) return;

  await setDoc(
    doc(db, "users", user.uid),
    {
      uid: user.uid,
      email: user.email,
      fullName: profile.fullName,
      username: profile.username,
      bio: profile.bio,
      subscriptionPrice: profile.subscriptionPrice,
      profileImage: profile.profileImage,
      coverImage: profile.coverImage,
    },
    { merge: true }
  );

  // Update localStorage
  const currentUser =
    JSON.parse(localStorage.getItem("user") || "{}");

  localStorage.setItem(
    "user",
    JSON.stringify({
      ...currentUser,
      uid: user.uid,
      email: user.email,
      fullName: profile.fullName,
      username: profile.username,
      subscriptionPrice: profile.subscriptionPrice,
      profileImage: profile.profileImage,
      coverImage: profile.coverImage,
      bio: profile.bio,
    })
  );

  alert("Profile updated successfully.");

  // Refresh so dashboard uses new username
  window.location.reload();
}

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="creator-profile-page">
      <div
        className="cover-photo"
        style={{
          backgroundImage: profile.coverImage
            ? `url(${profile.coverImage})`
            : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container">
        <div className="profile-header">
          <img
            src={profile.profileImage}
            alt="profile"
            className="profile-image"
          />

          <div className="profile-info">

            <input
              className="form-control mb-2"
              placeholder="Full Name"
              value={profile.fullName}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  fullName: e.target.value,
                })
              }
            />

            <input
              className="form-control mb-2"
              placeholder="Username"
              value={profile.username}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  username: e.target.value,
                })
              }
            />

            <textarea
              className="form-control mb-2"
              rows="3"
              placeholder="Bio"
              value={profile.bio}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  bio: e.target.value,
                })
              }
            />

            <input
              className="form-control mb-3"
              placeholder="Subscription Price"
              value={profile.subscriptionPrice}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  subscriptionPrice: e.target.value,
                })
              }
            />

            <button
              className="subscribe-btn"
              onClick={saveProfile}
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorProfile;