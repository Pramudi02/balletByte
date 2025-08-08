import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './celebritiesNavbar.css';

const CelebrityNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const isActive = (subPath) => {
    const target = `/celebrities/${subPath}`.replace(/\/$/, '');
    const current = location.pathname.replace(/\/$/, '');
    return current === target;
  };

  return (
    <nav className="cey-navbar">
      <div className="cey-navbar-container">
        <div className="cey-navbar-brand">
          <h1 className="cey-brand-logo">CeyElite</h1>
        </div>
        
        <div className="cey-navbar-menu">
          <ul className="cey-nav-links">
            <li><Link to="/celebrities/home" className={`cey-nav-link ${isActive('home') ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/celebrities/gallery" className={`cey-nav-link ${isActive('gallery') ? 'active' : ''}`}>Gallery</Link></li>
            <li><Link to="/celebrities/events" className={`cey-nav-link ${isActive('events') ? 'active' : ''}`}>Events</Link></li>
            <li><Link to="/celebrities/chat" className={`cey-nav-link ${isActive('chat') ? 'active' : ''}`}>Chat</Link></li>
            <li><Link to="/celebrities/profile" className={`cey-nav-link ${isActive('profile') ? 'active' : ''}`}>My Profile</Link></li>
          </ul>
        </div>
        
        <div className="cey-navbar-profile">
          <div className="cey-search-container">
            <div className={`cey-search-bar ${isSearchOpen ? 'cey-search-open' : ''}`}>
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="cey-search-input"
                />
              </form>
            </div>
            <div className="cey-search-icon" onClick={handleSearchClick}>
              <i className={`fas ${isSearchOpen ? 'fa-times' : 'fa-search'}`}></i>
            </div>
          </div>
          <div className="cey-profile-icon">
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CelebrityNavbar; 