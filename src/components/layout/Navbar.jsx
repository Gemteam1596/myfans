import { Link } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
      <div className="container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center logo-text"
        >
          <img
            src={logo}
            alt="MYFANS Logo"
            className="logo-image"
          />

          <span className="ms-3">MYFANS</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#membership" className="nav-link">
                Membership
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link to="/login" className="btn btn-outline-light px-4">
                Login
              </Link>
            </li>

            <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
              <Link to="/signup" className="btn btn-danger px-4">
                Join Now
              </Link>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <FaUserCircle size={32} />
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;