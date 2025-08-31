import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaHeart, FaCalendarAlt, FaComments, FaSearch, FaUser } from 'react-icons/fa';
import './UserNavbar.css';

const UserNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="user-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/user/home" className="navbar-logo">
          <div className="logo-text">
            <span className="logo-main">CeyElite</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <ul className="nav-links-list">
            <li><Link to="/user/home" className={`nav-link ${isActive('/user/home') ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/user/favorites" className={`nav-link ${isActive('/user/favorites') ? 'active' : ''}`}>Favorites</Link></li>
            <li><Link to="/user/events" className={`nav-link ${isActive('/user/events') ? 'active' : ''}`}>Events</Link></li>
            <li><Link to="/user/chat" className={`nav-link ${isActive('/user/chat') ? 'active' : ''}`}>Chat</Link></li>
            <li><Link to="/user/explore" className={`nav-link ${isActive('/user/explore') ? 'active' : ''}`}>Explore</Link></li>
          </ul>
        </div>

        {/* Right Side Icons */}
        <div className="navbar-right">
          {/* Search */}
          <div className="nav-icon-container">
            <button 
              className="nav-icon-button search-button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FaSearch className="nav-icon" />
            </button>
            
            {isSearchOpen && (
              <div className="search-dropdown">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Search celebrities..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                  />
                </form>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="nav-icon-container">
            <button 
              className="nav-icon-button profile-button"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <FaUser className="nav-icon" />
            </button>
            
            {isProfileOpen && (
              <div className="dropdown-menu profile-dropdown">
                <div className="dropdown-content">
                  <Link to="/user/profile" className="dropdown-item">
                    <FaUser className="dropdown-icon" />
                    <span>Profile</span>
                  </Link>
                  <div className="dropdown-item">
                    <span>Settings</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item">
                    <span>Logout</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar; 