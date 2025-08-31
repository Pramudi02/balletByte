import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaStar, 
  FaCalendarAlt, 
  FaChartBar, 
  FaCog, 
  FaBell, 
  FaSignOutAlt, 
  FaUserCircle,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import './AdminNavbar.css';

const AdminNavbar = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === `/admin/${path}` || 
           (path === 'dashboard' && location.pathname === '/admin');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Top Navigation */}
      <header className="admin-header">
        <div className="admin-header-container">
          <div className="admin-header-left">
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="admin-logo">
              <span className="logo-main">Star</span>
              <span className="logo-accent">Connect</span>
              <span className="admin-badge">Admin</span>
            </div>
          </div>
          
          <div className="admin-header-right">
            {/* Notifications */}
            <div className="admin-nav-icon-container">
              <button 
                className="admin-nav-icon-button"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <FaBell className="admin-nav-icon" />
                <span className="admin-notification-badge">5</span>
              </button>
              
              {notificationsOpen && (
                <div className="admin-dropdown-menu admin-notifications-dropdown">
                  <div className="admin-dropdown-header">
                    <h3>Notifications</h3>
                  </div>
                  <div className="admin-dropdown-content">
                    <div className="admin-notification-item">
                      <div className="admin-notification-text">New celebrity registration request</div>
                      <div className="admin-notification-time">10 mins ago</div>
                    </div>
                    <div className="admin-notification-item">
                      <div className="admin-notification-text">User reported inappropriate content</div>
                      <div className="admin-notification-time">1 hour ago</div>
                    </div>
                    <div className="admin-notification-item">
                      <div className="admin-notification-text">Event booking dispute requires review</div>
                      <div className="admin-notification-time">3 hours ago</div>
                    </div>
                    <div className="admin-notification-item">
                      <div className="admin-notification-text">System update scheduled for tonight</div>
                      <div className="admin-notification-time">5 hours ago</div>
                    </div>
                    <div className="admin-notification-item">
                      <div className="admin-notification-text">Monthly report generated</div>
                      <div className="admin-notification-time">1 day ago</div>
                    </div>
                  </div>
                  <div className="admin-dropdown-footer">
                    View all notifications
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="admin-nav-icon-container">
              <button 
                className="admin-nav-icon-button admin-profile-button"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <FaUserCircle className="admin-nav-icon" />
                <span className="admin-profile-name">Admin</span>
              </button>
              
              {profileOpen && (
                <div className="admin-dropdown-menu admin-profile-dropdown">
                  <div className="admin-dropdown-content">
                    <div className="admin-dropdown-item">
                      <FaUserCircle className="admin-dropdown-icon" />
                      <span>My Profile</span>
                    </div>
                    <div className="admin-dropdown-item">
                      <FaCog className="admin-dropdown-icon" />
                      <span>Settings</span>
                    </div>
                    <div className="admin-dropdown-divider"></div>
                    <Link to="/login" className="admin-dropdown-item">
                      <FaSignOutAlt className="admin-dropdown-icon" />
                      <span>Logout</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <nav className="admin-sidebar-nav">
          <ul className="admin-nav-list">
            <li className="admin-nav-item">
              <Link 
                to="/admin/dashboard" 
                className={`admin-nav-link ${isActive('dashboard') ? 'active' : ''}`}
              >
                <FaTachometerAlt className="admin-nav-icon" />
                <span className="admin-nav-text">Dashboard</span>
              </Link>
            </li>
            <li className="admin-nav-item">
              <Link 
                to="/admin/users" 
                className={`admin-nav-link ${isActive('users') ? 'active' : ''}`}
              >
                <FaUsers className="admin-nav-icon" />
                <span className="admin-nav-text">Manage Users</span>
              </Link>
            </li>
            <li className="admin-nav-item">
              <Link 
                to="/admin/celebrities" 
                className={`admin-nav-link ${isActive('celebrities') ? 'active' : ''}`}
              >
                <FaStar className="admin-nav-icon" />
                <span className="admin-nav-text">Manage Celebrities</span>
              </Link>
            </li>
            <li className="admin-nav-item">
              <Link 
                to="/admin/events" 
                className={`admin-nav-link ${isActive('events') ? 'active' : ''}`}
              >
                <FaCalendarAlt className="admin-nav-icon" />
                <span className="admin-nav-text">Events</span>
              </Link>
            </li>
            <li className="admin-nav-item">
              <Link 
                to="/admin/reports" 
                className={`admin-nav-link ${isActive('reports') ? 'active' : ''}`}
              >
                <FaChartBar className="admin-nav-icon" />
                <span className="admin-nav-text">Reports</span>
              </Link>
            </li>
            <li className="admin-nav-item">
              <Link 
                to="/admin/settings" 
                className={`admin-nav-link ${isActive('settings') ? 'active' : ''}`}
              >
                <FaCog className="admin-nav-icon" />
                <span className="admin-nav-text">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="admin-sidebar-footer">
          <Link to="/login" className="admin-logout-button">
            <FaSignOutAlt className="admin-nav-icon" />
            <span className="admin-nav-text">Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default AdminNavbar;
