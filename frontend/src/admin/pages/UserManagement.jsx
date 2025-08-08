import React, { useState } from 'react';
import { FaUser, FaCrown, FaTrash } from 'react-icons/fa';
import '../components/adminNavbar.jsx';
import './UserManagement.css';

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', type: 'user' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', type: 'user' },
  { id: 3, name: 'Chris Star', email: 'star@celeb.com', type: 'celebrity' },
  { id: 4, name: 'Lily Fame', email: 'lily@celeb.com', type: 'celebrity' },
];

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [users, setUsers] = useState(mockUsers);

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const filtered = users.filter((u) =>
    activeTab === 'user' ? u.type === 'user' : u.type === 'celebrity'
  );

  return (
    <div className="admin-user-management-page">
      <h1 className="aum-title">User Management</h1>
      <div className="aum-tabs">
        <button
          className={`aum-tab ${activeTab === 'user' ? 'active' : ''}`}
          onClick={() => setActiveTab('user')}
        >
          <FaUser /> Users
        </button>
        <button
          className={`aum-tab ${activeTab === 'celebrity' ? 'active' : ''}`}
          onClick={() => setActiveTab('celebrity')}
        >
          <FaCrown /> Celebrities
        </button>
      </div>
      <div className="aum-table-container">
        <table className="aum-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan="4" className="aum-empty">No {activeTab}s found.</td></tr>
            ) : (
              filtered.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.type === 'user' ? 'User' : 'Celebrity'}</td>
                  <td>
                    <button className="aum-delete" onClick={() => handleDelete(u.id)}>
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
