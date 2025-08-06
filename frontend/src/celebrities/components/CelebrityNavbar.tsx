import React from 'react';
import './CelebrityNavbar.css';

const CelebrityNavbar: React.FC = () => {
  return (
    <nav className="celebrity-navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1 className="brand-logo">CeyElite</h1>
        </div>
        
        <div className="navbar-menu">
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#events" className="nav-link">Events</a></li>
            <li><a href="#post" className="nav-link">Chat</a></li>
            <li><a href="#chat" className="nav-link">My Profile</a></li>
          </ul>
        </div>
        
        <div className="navbar-profile">
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="profile-icon">
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CelebrityNavbar; 