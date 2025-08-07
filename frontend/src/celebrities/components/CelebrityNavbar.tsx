import React, { useState } from 'react';
import './CelebrityNavbar.css';

const CelebrityNavbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Handle search functionality here
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

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
          <div className="search-container">
            <div className={`search-bar ${isSearchOpen ? 'search-open' : ''}`}>
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="search-input"
                />
              </form>
            </div>
            <div className="search-icon" onClick={handleSearchClick}>
              <i className={`fas ${isSearchOpen ? 'fa-times' : 'fa-search'}`}></i>
            </div>
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