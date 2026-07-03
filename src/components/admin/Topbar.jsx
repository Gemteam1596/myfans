import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

import "../../assets/css/Admin.css";

function Topbar() {
  return (
    <header className="admin-topbar">

      {/* Search */}

      <div className="admin-search">

        <FaSearch />

        <input
          type="text"
          placeholder="Search creators, fans, posts..."
        />

      </div>

      {/* Right Section */}

      <div className="admin-right">

        <div className="admin-icon">

          <FaBell />

          <span>5</span>

        </div>

        <div className="admin-icon">

          <FaEnvelope />

          <span>12</span>

        </div>

        <div className="admin-profile">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="admin"
          />

          <div>

            <h5>Admin</h5>

            <small>Super Admin</small>

          </div>

          <FaChevronDown />

        </div>

      </div>

    </header>
  );
}

export default Topbar;