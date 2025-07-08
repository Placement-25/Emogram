import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaEnvelope,
  FaHeart,
  FaUserCircle,
  FaBookmark,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menus on navigation
  const handleNavClick = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to="/" className="brand" onClick={handleNavClick}>
            <span className="brand-gradient">Emogram</span>
          </Link>
        </div>
        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`navbar-links${menuOpen ? " open" : ""}`}>
          <Link to="/" title="Home" onClick={handleNavClick}>
            <FaHome />
          </Link>
          <Link to="/explore" title="Explore" onClick={handleNavClick}>
            <FaCompass />
          </Link>
          <Link to="/messages" title="Messages" onClick={handleNavClick}>
            <FaEnvelope />
          </Link>
          <Link
            to="/notifications"
            title="Notifications"
            onClick={handleNavClick}
          >
            <FaHeart />
          </Link>
          <div
            className="profile-menu"
            tabIndex={0}
            onBlur={() => setProfileOpen(false)}
          >
            <button
              className="profile-btn"
              onClick={() => setProfileOpen((v) => !v)}
              aria-label="Profile"
              type="button"
            >
              <FaUserCircle />
            </button>
            {profileOpen && (
              <div className="profile-dropdown">
                <Link to="/profile" onClick={handleNavClick}>
                  <FaUserCircle /> View Profile
                </Link>
                <Link to="/saved" onClick={handleNavClick}>
                  <FaBookmark /> Saved Posts
                </Link>
                <Link to="/settings" onClick={handleNavClick}>
                  <FaCog /> Settings
                </Link>
                <button className="logout-btn" type="button">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
