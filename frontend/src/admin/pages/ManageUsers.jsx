import React, { useState } from 'react';
import { FaSearch, FaFilter, FaTrash, FaEdit, FaEye, FaUserSlash, FaUserCheck } from 'react-icons/fa';
import './ManageUsers.css';

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample user data - in a real app, this would come from an API
  const [users, setUsers] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      joinDate: '2023-08-15', 
      status: 'active', 
      lastLogin: '2023-09-05T14:48:00', 
      location: 'New York, USA',
      profilePic: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane.smith@example.com', 
      joinDate: '2023-07-22', 
      status: 'active', 
      lastLogin: '2023-09-04T10:23:00',
      location: 'London, UK',
      profilePic: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    { 
      id: 3, 
      name: 'Michael Johnson', 
      email: 'michael.johnson@example.com', 
      joinDate: '2023-06-10', 
      status: 'suspended', 
      lastLogin: '2023-08-25T09:15:00',
      location: 'Toronto, Canada',
      profilePic: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    { 
      id: 4, 
      name: 'Emily Brown', 
      email: 'emily.brown@example.com', 
      joinDate: '2023-09-01', 
      status: 'active', 
      lastLogin: '2023-09-05T16:30:00',
      location: 'Sydney, Australia',
      profilePic: 'https://randomuser.me/api/portraits/women/17.jpg'
    },
    { 
      id: 5, 
      name: 'Robert Wilson', 
      email: 'robert.wilson@example.com', 
      joinDate: '2023-05-18', 
      status: 'inactive', 
      lastLogin: '2023-07-12T08:45:00',
      location: 'Berlin, Germany',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    { 
      id: 6, 
      name: 'Sarah Jackson', 
      email: 'sarah.jackson@example.com', 
      joinDate: '2023-08-05', 
      status: 'active', 
      lastLogin: '2023-09-04T21:17:00',
      location: 'Paris, France',
      profilePic: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    { 
      id: 7, 
      name: 'David Miller', 
      email: 'david.miller@example.com', 
      joinDate: '2023-07-30', 
      status: 'suspended', 
      lastLogin: '2023-08-10T15:22:00',
      location: 'Tokyo, Japan',
      profilePic: 'https://randomuser.me/api/portraits/men/91.jpg'
    },
    { 
      id: 8, 
      name: 'Lisa Taylor', 
      email: 'lisa.taylor@example.com', 
      joinDate: '2023-06-25', 
      status: 'active', 
      lastLogin: '2023-09-05T08:10:00',
      location: 'Rome, Italy',
      profilePic: 'https://randomuser.me/api/portraits/women/57.jpg'
    }
  ]);

  // Filter users based on search term and status filter
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filterStatus === 'all' || 
      user.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Calculate time since last login
  const getTimeSinceLastLogin = (lastLoginDate) => {
    const lastLogin = new Date(lastLoginDate);
    const now = new Date();
    const diffInSeconds = Math.floor((now - lastLogin) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} days ago`;
    
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} months ago`;
    
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} years ago`;
  };

  // Action handlers
  const handleViewUser = (userId) => {
    console.log(`Viewing user with ID: ${userId}`);
    // Navigate to user detail page
  };

  const handleEditUser = (userId) => {
    console.log(`Editing user with ID: ${userId}`);
    // Open edit user modal or navigate to edit page
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const handleSuspendUser = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: 'suspended' } : user
    ));
  };

  const handleActivateUser = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: 'active' } : user
    ));
  };

  return (
    <div className="admin-users-page">
      <div className="admin-page-header">
        <h1 className="admin-page-title">Manage Users</h1>
        <button className="admin-primary-btn">Add New User</button>
      </div>

      <div className="admin-users-controls">
        <div className="admin-search-container">
          <FaSearch className="admin-search-icon" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="admin-search-input"
          />
        </div>
        <div className="admin-filter-container">
          <FaFilter className="admin-filter-icon" />
          <select 
            className="admin-filter-select" 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Users</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      </div>

      <div className="admin-users-table-container">
        <table className="admin-users-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Join Date</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="admin-user-info">
                    <img 
                      src={user.profilePic} 
                      alt={user.name} 
                      className="admin-user-avatar"
                    />
                    <span className="admin-user-name">{user.name}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{formatDate(user.joinDate)}</td>
                <td>
                  <span className={`admin-status-badge ${user.status}`}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </td>
                <td>{getTimeSinceLastLogin(user.lastLogin)}</td>
                <td>{user.location}</td>
                <td>
                  <div className="admin-action-buttons">
                    <button 
                      className="admin-action-btn view-btn" 
                      onClick={() => handleViewUser(user.id)}
                      title="View User"
                    >
                      <FaEye />
                    </button>
                    <button 
                      className="admin-action-btn edit-btn" 
                      onClick={() => handleEditUser(user.id)}
                      title="Edit User"
                    >
                      <FaEdit />
                    </button>
                    {user.status === 'active' ? (
                      <button 
                        className="admin-action-btn suspend-btn" 
                        onClick={() => handleSuspendUser(user.id)}
                        title="Suspend User"
                      >
                        <FaUserSlash />
                      </button>
                    ) : (
                      <button 
                        className="admin-action-btn activate-btn" 
                        onClick={() => handleActivateUser(user.id)}
                        title="Activate User"
                      >
                        <FaUserCheck />
                      </button>
                    )}
                    <button 
                      className="admin-action-btn delete-btn" 
                      onClick={() => handleDeleteUser(user.id)}
                      title="Delete User"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-pagination">
        <span className="admin-pagination-info">Showing 1-8 of 8 users</span>
        <div className="admin-pagination-controls">
          <button className="admin-pagination-btn" disabled>Previous</button>
          <button className="admin-pagination-btn active">1</button>
          <button className="admin-pagination-btn" disabled>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
