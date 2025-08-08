import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaSignOutAlt } from 'react-icons/fa';
import './adminNavbar.css';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-logo">
        <span className="admin-navbar-title">Admin Panel</span>
      </div>
      <ul className="admin-navbar-links">
        <li>
          <Link to="/admin/user-management">
            <FaUsers /> User Management
          </Link>
        </li>
        {/* Add more admin links here */}
        <li>
          <button className="admin-navbar-logout">
            <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
