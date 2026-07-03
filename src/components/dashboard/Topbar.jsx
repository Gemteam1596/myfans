import { useState } from "react";
import {
  FaBars,
  FaBell,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">

      <div className="topbar-left">

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
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

        <div className="profile-area">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Profile"
          />

          <div className="profile-info">

            <h6>Marvin</h6>

            <small>Creator</small>

          </div>

          <FaChevronDown />

          {open && (

            <div className="profile-dropdown">

              <button>👤 My Profile</button>

              <button>⚙ Settings</button>

              <button>💳 Billing</button>

              <button className="logout-red">
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