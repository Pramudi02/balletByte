import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaHeart, FaCalendarAlt, FaComments, FaBell, FaUser } from 'react-icons/fa';
import './UserNavbar.css';

const UserNavbar = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="user-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/user/home" className="navbar-logo">
          <div className="logo-text">
            <span className="logo-main">Star</span>
            <span className="logo-accent">Connect</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link 
            to="/user/home" 
            className={`nav-link ${isActive('/user/home') ? 'active' : ''}`}
          >
            <span>Home</span>
          </Link>
          
          <Link 
            to="/user/favorites" 
            className={`nav-link ${isActive('/user/favorites') ? 'active' : ''}`}
          >
            <span>Favorites</span>
          </Link>
          
          <Link 
            to="/user/events" 
            className={`nav-link ${isActive('/user/events') ? 'active' : ''}`}
          >
            <span>Events</span>
          </Link>
          
          <Link 
            to="/user/chat" 
            className={`nav-link ${isActive('/user/chat') ? 'active' : ''}`}
          >
            <span>Chat</span>
          </Link>
          
          <Link 
            to="/user/explore" 
            className={`nav-link ${isActive('/user/explore') ? 'active' : ''}`}
          >
            <span>Explore</span>
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="navbar-right">
          {/* Notifications */}
          <div className="nav-icon-container">
            <button 
              className="nav-icon-button"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            >
              <FaBell className="nav-icon" />
              <span className="notification-badge">3</span>
            </button>
            
            {isNotificationsOpen && (
              <div className="dropdown-menu notifications-dropdown">
                <div className="dropdown-header">
                  <h3>Notifications</h3>
                </div>
                <div className="dropdown-content">
                  <div className="notification-item">
                    <div className="notification-text">New event: Taylor Swift Concert</div>
                    <div className="notification-time">2 hours ago</div>
                  </div>
                  <div className="notification-item">
                    <div className="notification-text">Beyoncé liked your comment</div>
                    <div className="notification-time">5 hours ago</div>
                  </div>
                  <div className="notification-item">
                    <div className="notification-text">New message from Justin Bieber</div>
                    <div className="notification-time">1 day ago</div>
                  </div>
                </div>
                <Link to="/user/notifications" className="dropdown-footer">
                  View all notifications
                </Link>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="nav-icon-container">
            <button 
              className="nav-icon-button"
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