import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import {
  FaBars,
  FaBell,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

function Topbar({ toggleSidebar = () => {} }) {
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);

      localStorage.removeItem("user");

      navigate("/", { replace: true });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="topbar">

      <div className="topbar-left">

        <button
          className="menu-btn"
          onClick={() => toggleSidebar()}
        >
          <FaBars />
        </button>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search posts, fans, messages..."
          />
        </div>

      </div>

      <div className="topbar-right">

        <div className="top-icon">
          <FaBell />
          <span>4</span>
        </div>

        <div className="top-icon">
          <FaEnvelope />
          <span>7</span>
        </div>

        <div
          className="profile-area"
          onClick={() => setProfileOpen(!profileOpen)}
        >

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Profile"
          />

          <div className="profile-info">
            <h6>Marvin</h6>
            <small>Creator</small>
          </div>

          <FaChevronDown />

          {profileOpen && (
            <div className="profile-dropdown">

              <button>👤 My Profile</button>

              <button>⚙ Settings</button>

              <button>💳 Billing</button>

              <button
                className="logout-red"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}

export default Topbar;