import React, { useState } from 'react';
import { FaUser, FaCog, FaHeart, FaCalendarAlt, FaComments, FaSignOutAlt, FaEdit, FaCamera } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    bio: 'Music lover and concert enthusiast. Always looking for the next great show!',
    location: 'New York, NY',
    joinedDate: 'January 2023',
    followers: 1250,
    following: 89,
    favoriteCelebrities: 15,
    upcomingEvents: 3
  });

  const [settings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    privacy: {
      profilePublic: true,
      showLocation: false,
      allowMessages: true
    }
  });

  const stats = [
    { label: 'Followers', value: user.followers, icon: FaUser },
    { label: 'Following', value: user.following, icon: FaUser },
    { label: 'Favorites', value: user.favoriteCelebrities, icon: FaHeart },
    { label: 'Events', value: user.upcomingEvents, icon: FaCalendarAlt }
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              <img src={user.avatar} alt={user.name} />
              <button className="avatar-edit">
                <FaCamera />
              </button>
            </div>
            <div className="profile-info">
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-email">{user.email}</p>
              <p className="profile-location">{user.location}</p>
              <p className="profile-joined">Joined {user.joinedDate}</p>
            </div>
            <button className="edit-profile-button">
              <FaEdit />
              Edit Profile
            </button>
          </div>

          {/* Stats */}
          <div className="profile-stats">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="stat-item">
                  <IconComponent className="stat-icon" />
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Profile Bio */}
        <div className="profile-bio">
          <h3>About</h3>
          <p>{user.bio}</p>
        </div>

        {/* Tab Navigation */}
        <div className="profile-tabs">
          <button 
            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser className="tab-icon" />
            Profile
          </button>
          <button 
            className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <FaCog className="tab-icon" />
            Settings
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'profile' && (
            <div className="profile-content">
              <div className="profile-section">
                <h3>Personal Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <label>Full Name</label>
                    <span>{user.name}</span>
                  </div>
                  <div className="info-item">
                    <label>Email</label>
                    <span>{user.email}</span>
                  </div>
                  <div className="info-item">
                    <label>Location</label>
                    <span>{user.location}</span>
                  </div>
                  <div className="info-item">
                    <label>Member Since</label>
                    <span>{user.joinedDate}</span>
                  </div>
                </div>
              </div>

              <div className="profile-section">
                <h3>Activity</h3>
                <div className="activity-grid">
                  <div className="activity-item">
                    <FaHeart className="activity-icon" />
                    <div className="activity-info">
                      <h4>Favorite Celebrities</h4>
                      <p>{user.favoriteCelebrities} celebrities</p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <FaCalendarAlt className="activity-icon" />
                    <div className="activity-info">
                      <h4>Upcoming Events</h4>
                      <p>{user.upcomingEvents} events</p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <FaComments className="activity-icon" />
                    <div className="activity-info">
                      <h4>Active Chats</h4>
                      <p>3 conversations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-content">
              <div className="settings-section">
                <h3>Notifications</h3>
                <div className="setting-item">
                  <div className="setting-info">
                    <label>Email Notifications</label>
                    <p>Receive updates via email</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" checked={settings.notifications.email} />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <label>Push Notifications</label>
                    <p>Receive push notifications</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" checked={settings.notifications.push} />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <label>SMS Notifications</label>
                    <p>Receive SMS updates</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" checked={settings.notifications.sms} />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>

              <div className="settings-section">
                <h3>Privacy</h3>
                <div className="setting-item">
                  <div className="setting-info">
                    <label>Public Profile</label>
                    <p>Allow others to view your profile</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" checked={settings.privacy.profilePublic} />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <label>Show Location</label>
                    <p>Display your location to others</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" checked={settings.privacy.showLocation} />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <label>Allow Messages</label>
                    <p>Let celebrities send you messages</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" checked={settings.privacy.allowMessages} />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>

              <div className="settings-section">
                <h3>Account</h3>
                <button className="danger-button">
                  <FaSignOutAlt />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile; 