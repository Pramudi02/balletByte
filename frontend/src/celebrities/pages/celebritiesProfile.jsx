import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './celebritiesProfile.css';

const CelebritiesProfile = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: 'Sarah Johnson',
    username: '@sarahjohnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    bio: 'Award-winning actress and philanthropist. Passionate about storytelling and making a difference in the world.',
    location: 'Los Angeles, CA',
    website: 'www.sarahjohnson.com',
    avatar: '/1.jpg',
    socialMedia: {
      instagram: '@sarahjohnson',
      twitter: '@sarahjohnson',
      facebook: 'Sarah Johnson Official',
      youtube: 'Sarah Johnson Channel'
    },
    categories: ['Acting', 'Philanthropy', 'Fashion', 'Lifestyle'],
    achievements: [
      'Academy Award Winner 2023',
      'Golden Globe Nominee 2022',
      'Time 100 Most Influential People 2021',
      'UNICEF Goodwill Ambassador'
    ],
    stats: {
      followers: '2.5M',
      posts: '1.8K',
      events: '45'
    }
  });

  const [activeSection, setActiveSection] = useState('overview');

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.cey-profile-sidebar')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle navigation functions
  const handleEditProfile = () => {
    onClose();
    navigate('/celebrities/profile');
  };

  const handleSettings = () => {
    onClose();
    navigate('/celebrities/profile');
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="cey-profile-backdrop" onClick={onClose}></div>}
      
      {/* Profile Sidebar */}
      <div className={`cey-profile-sidebar ${isOpen ? 'cey-profile-open' : ''}`}>
        {/* Header */}
        <div className="cey-profile-header">
          <div className="cey-profile-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </div>
          <h2 className="cey-profile-title">Profile</h2>
        </div>

        {/* Profile Content */}
        <div className="cey-profile-content">
          {/* Avatar Section */}
          <div className="cey-profile-avatar-section">
            <div className="cey-profile-avatar">
              <img src={profileData.avatar} alt={profileData.name} />
              <div className="cey-profile-status">
                <i className="fas fa-circle"></i>
                <span>Online</span>
              </div>
            </div>
            <div className="cey-profile-info">
              <h3 className="cey-profile-name">{profileData.name}</h3>
              <p className="cey-profile-username">{profileData.username}</p>
              <span className="cey-profile-badge">
                <i className="fas fa-star"></i>
                Verified Celebrity
              </span>
            </div>
          </div>

                     {/* Stats Section */}
           <div className="cey-profile-stats">
             <div className="cey-stat-item cey-stat-followers">
               <span className="cey-stat-number cey-stat-followers-number">{profileData.stats.followers}</span>
               <span className="cey-stat-label cey-stat-followers-label">Followers</span>
             </div>
             
             <div className="cey-stat-item cey-stat-posts">
               <span className="cey-stat-number cey-stat-posts-number">{profileData.stats.posts}</span>
               <span className="cey-stat-label cey-stat-posts-label">Posts</span>
             </div>
             <div className="cey-stat-item cey-stat-events">
               <span className="cey-stat-number cey-stat-events-number">{profileData.stats.events}</span>
               <span className="cey-stat-label cey-stat-events-label">Events</span>
             </div>
           </div>

                     {/* Navigation Tabs */}
           <div className="cey-profile-tabs">
             <button 
               className={`cey-profile-tab cey-tab-overview ${activeSection === 'overview' ? 'active' : ''}`}
               onClick={() => setActiveSection('overview')}
             >
               <i className="fas fa-user"></i>
               Overview
             </button>
             <button 
               className={`cey-profile-tab cey-tab-social ${activeSection === 'social' ? 'active' : ''}`}
               onClick={() => setActiveSection('social')}
             >
               <i className="fas fa-share-alt"></i>
               Social
             </button>
             <button 
               className={`cey-profile-tab cey-tab-achievements ${activeSection === 'achievements' ? 'active' : ''}`}
               onClick={() => setActiveSection('achievements')}
             >
               <i className="fas fa-trophy"></i>
               Achievements
             </button>
           </div>

          {/* Content Sections */}
          <div className="cey-profile-sections">
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="cey-profile-section">
                <div className="cey-section-item">
                  <label>Bio</label>
                  <p>{profileData.bio}</p>
                </div>
                <div className="cey-section-item">
                  <label>Location</label>
                  <p><i className="fas fa-map-marker-alt"></i> {profileData.location}</p>
                </div>
                <div className="cey-section-item">
                  <label>Website</label>
                  <p><i className="fas fa-globe"></i> {profileData.website}</p>
                </div>
                <div className="cey-section-item">
                  <label>Categories</label>
                  <div className="cey-categories">
                    {profileData.categories.map(category => (
                      <span key={category} className="cey-category">{category}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Social Media Section */}
            {activeSection === 'social' && (
              <div className="cey-profile-section">
                <div className="cey-social-item">
                  <div className="cey-social-icon instagram">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="cey-social-info">
                    <label>Instagram</label>
                    <p>{profileData.socialMedia.instagram}</p>
                  </div>
                </div>
                <div className="cey-social-item">
                  <div className="cey-social-icon twitter">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div className="cey-social-info">
                    <label>Twitter</label>
                    <p>{profileData.socialMedia.twitter}</p>
                  </div>
                </div>
                <div className="cey-social-item">
                  <div className="cey-social-icon facebook">
                    <i className="fab fa-facebook"></i>
                  </div>
                  <div className="cey-social-info">
                    <label>Facebook</label>
                    <p>{profileData.socialMedia.facebook}</p>
                  </div>
                </div>
                <div className="cey-social-item">
                  <div className="cey-social-icon youtube">
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div className="cey-social-info">
                    <label>YouTube</label>
                    <p>{profileData.socialMedia.youtube}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Section */}
            {activeSection === 'achievements' && (
              <div className="cey-profile-section">
                <div className="cey-achievements">
                  {profileData.achievements.map((achievement, index) => (
                    <div key={index} className="cey-achievement">
                      <i className="fas fa-trophy"></i>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="cey-profile-actions">
            <button className="cey-btn cey-btn--primary" onClick={handleEditProfile}>
              <i className="fas fa-edit"></i>
              Edit Profile
            </button>
            <button className="cey-btn cey-btn--secondary" onClick={handleSettings}>
              <i className="fas fa-cog"></i>
              Settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CelebritiesProfile;
