import React, { useState, useRef } from 'react';
import './celebritiesMyprofile.css';

const CelebritiesMyprofile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'Sarah Johnson',
    username: '@sarahjohnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    bio: 'Award-winning actress and philanthropist. Passionate about storytelling and making a difference in the world.',
    location: 'Los Angeles, CA',
    website: 'www.sarahjohnson.com',
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
    ]
  });
  const [isEditing, setIsEditing] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState('/1.jpg');
  const fileInputRef = useRef(null);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAvatarPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialMediaChange = (platform, value) => {
    setProfileData(prev => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: value
      }
    }));
  };

  const addCategory = (category) => {
    if (category && !profileData.categories.includes(category)) {
      setProfileData(prev => ({
        ...prev,
        categories: [...prev.categories, category]
      }));
    }
  };

  const removeCategory = (category) => {
    setProfileData(prev => ({
      ...prev,
      categories: prev.categories.filter(c => c !== category)
    }));
  };

  const addAchievement = (achievement) => {
    if (achievement && !profileData.achievements.includes(achievement)) {
      setProfileData(prev => ({
        ...prev,
        achievements: [...prev.achievements, achievement]
      }));
    }
  };

  const removeAchievement = (achievement) => {
    setProfileData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(a => a !== achievement)
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Profile saved:', profileData);
  };

  return (
    <section className="cey-myprofile">
      <header className="cey-myprofile__header">
        <div className="cey-myprofile__titles">
          <h2 className="cey-myprofile__title">My Profile</h2>
          <p className="cey-myprofile__subtitle">Manage your celebrity profile and settings</p>
        </div>
        <div className="cey-myprofile__actions">
          {!isEditing ? (
            <button 
              className="cey-btn cey-btn--primary"
              onClick={() => setIsEditing(true)}
            >
              <i className="fa-solid fa-edit" />
              Edit Profile
            </button>
          ) : (
            <div className="cey-myprofile__edit-actions">
              <button 
                className="cey-btn cey-btn--secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button 
                className="cey-btn cey-btn--primary"
                onClick={handleSave}
              >
                <i className="fa-solid fa-save" />
                Save Changes
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="cey-myprofile__container">
        {/* Navigation Tabs */}
        <div className="cey-myprofile__tabs">
          <button 
            className={`cey-myprofile__tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <i className="fa-solid fa-user" />
            Profile Info
          </button>
          <button 
            className={`cey-myprofile__tab ${activeTab === 'social' ? 'active' : ''}`}
            onClick={() => setActiveTab('social')}
          >
            <i className="fa-solid fa-share-alt" />
            Social Media
          </button>
          <button 
            className={`cey-myprofile__tab ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            <i className="fa-solid fa-trophy" />
            Achievements
          </button>
          <button 
            className={`cey-myprofile__tab ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <i className="fa-solid fa-cog" />
            Settings
          </button>
        </div>

        {/* Content Area */}
        <div className="cey-myprofile__content">
          {activeTab === 'profile' && (
            <div className="cey-myprofile__section">
              <div className="cey-myprofile__avatar-section">
                <div className="cey-myprofile__avatar">
                  <img src={avatarPreview} alt="Profile" />
                  {isEditing && (
                    <div className="cey-myprofile__avatar-overlay">
                      <button 
                        className="cey-btn cey-btn--icon"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <i className="fa-solid fa-camera" />
                      </button>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  hidden
                />
                <div className="cey-myprofile__avatar-info">
                  <h3>{profileData.name}</h3>
                  <p>{profileData.username}</p>
                  <span className="cey-myprofile__status">
                    <i className="fa-solid fa-circle" />
                    Verified Celebrity
                  </span>
                </div>
              </div>

              <div className="cey-myprofile__form">
                <div className="cey-myprofile__field-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    disabled={!isEditing}
                    className="cey-myprofile__input"
                  />
                </div>

                <div className="cey-myprofile__field-group">
                  <label>Username</label>
                  <input
                    type="text"
                    value={profileData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    disabled={!isEditing}
                    className="cey-myprofile__input"
                  />
                </div>

                <div className="cey-myprofile__field-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!isEditing}
                    className="cey-myprofile__input"
                  />
                </div>

                <div className="cey-myprofile__field-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    disabled={!isEditing}
                    className="cey-myprofile__input"
                  />
                </div>

                <div className="cey-myprofile__field-group">
                  <label>Bio</label>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    disabled={!isEditing}
                    className="cey-myprofile__textarea"
                    rows="4"
                  />
                </div>

                <div className="cey-myprofile__field-group">
                  <label>Location</label>
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    disabled={!isEditing}
                    className="cey-myprofile__input"
                  />
                </div>

                <div className="cey-myprofile__field-group">
                  <label>Website</label>
                  <input
                    type="url"
                    value={profileData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    disabled={!isEditing}
                    className="cey-myprofile__input"
                  />
                </div>

                <div className="cey-myprofile__field-group">
                  <label>Categories</label>
                  <div className="cey-myprofile__categories">
                    {profileData.categories.map(category => (
                      <span key={category} className="cey-myprofile__category">
                        {category}
                        {isEditing && (
                          <button 
                            onClick={() => removeCategory(category)}
                            className="cey-myprofile__category-remove"
                          >
                            <i className="fa-solid fa-times" />
                          </button>
                        )}
                      </span>
                    ))}
                    {isEditing && (
                      <input
                        type="text"
                        placeholder="Add category..."
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            addCategory(e.target.value);
                            e.target.value = '';
                          }
                        }}
                        className="cey-myprofile__category-input"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="cey-myprofile__section">
              <h3 className="cey-myprofile__section-title">Social Media Links</h3>
              <div className="cey-myprofile__social-grid">
                <div className="cey-myprofile__social-item">
                  <div className="cey-myprofile__social-icon">
                    <i className="fa-brands fa-instagram" />
                  </div>
                  <div className="cey-myprofile__social-content">
                    <label>Instagram</label>
                    <input
                      type="text"
                      value={profileData.socialMedia.instagram}
                      onChange={(e) => handleSocialMediaChange('instagram', e.target.value)}
                      disabled={!isEditing}
                      className="cey-myprofile__input"
                    />
                  </div>
                </div>

                <div className="cey-myprofile__social-item">
                  <div className="cey-myprofile__social-icon">
                    <i className="fa-brands fa-twitter" />
                  </div>
                  <div className="cey-myprofile__social-content">
                    <label>Twitter</label>
                    <input
                      type="text"
                      value={profileData.socialMedia.twitter}
                      onChange={(e) => handleSocialMediaChange('twitter', e.target.value)}
                      disabled={!isEditing}
                      className="cey-myprofile__input"
                    />
                  </div>
                </div>

                <div className="cey-myprofile__social-item">
                  <div className="cey-myprofile__social-icon">
                    <i className="fa-brands fa-facebook" />
                  </div>
                  <div className="cey-myprofile__social-content">
                    <label>Facebook</label>
                    <input
                      type="text"
                      value={profileData.socialMedia.facebook}
                      onChange={(e) => handleSocialMediaChange('facebook', e.target.value)}
                      disabled={!isEditing}
                      className="cey-myprofile__input"
                    />
                  </div>
                </div>

                <div className="cey-myprofile__social-item">
                  <div className="cey-myprofile__social-icon">
                    <i className="fa-brands fa-youtube" />
                  </div>
                  <div className="cey-myprofile__social-content">
                    <label>YouTube</label>
                    <input
                      type="text"
                      value={profileData.socialMedia.youtube}
                      onChange={(e) => handleSocialMediaChange('youtube', e.target.value)}
                      disabled={!isEditing}
                      className="cey-myprofile__input"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="cey-myprofile__section">
              <h3 className="cey-myprofile__section-title">Achievements & Awards</h3>
              <div className="cey-myprofile__achievements">
                {profileData.achievements.map(achievement => (
                  <div key={achievement} className="cey-myprofile__achievement">
                    <i className="fa-solid fa-trophy" />
                    <span>{achievement}</span>
                    {isEditing && (
                      <button 
                        onClick={() => removeAchievement(achievement)}
                        className="cey-myprofile__achievement-remove"
                      >
                        <i className="fa-solid fa-times" />
                      </button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <div className="cey-myprofile__add-achievement">
                    <input
                      type="text"
                      placeholder="Add new achievement..."
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addAchievement(e.target.value);
                          e.target.value = '';
                        }
                      }}
                      className="cey-myprofile__input"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="cey-myprofile__section">
              <h3 className="cey-myprofile__section-title">Account Settings</h3>
              <div className="cey-myprofile__settings">
                <div className="cey-myprofile__setting-item">
                  <div className="cey-myprofile__setting-info">
                    <h4>Email Notifications</h4>
                    <p>Receive notifications about new messages and events</p>
                  </div>
                  <label className="cey-myprofile__toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="cey-myprofile__toggle-slider" />
                  </label>
                </div>

                <div className="cey-myprofile__setting-item">
                  <div className="cey-myprofile__setting-info">
                    <h4>Push Notifications</h4>
                    <p>Get instant notifications on your device</p>
                  </div>
                  <label className="cey-myprofile__toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="cey-myprofile__toggle-slider" />
                  </label>
                </div>

                <div className="cey-myprofile__setting-item">
                  <div className="cey-myprofile__setting-info">
                    <h4>Profile Visibility</h4>
                    <p>Make your profile visible to all users</p>
                  </div>
                  <label className="cey-myprofile__toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="cey-myprofile__toggle-slider" />
                  </label>
                </div>

                <div className="cey-myprofile__setting-item">
                  <div className="cey-myprofile__setting-info">
                    <h4>Two-Factor Authentication</h4>
                    <p>Add an extra layer of security to your account</p>
                  </div>
                  <button className="cey-btn cey-btn--secondary">
                    Enable
                  </button>
                </div>

                <div className="cey-myprofile__setting-item">
                  <div className="cey-myprofile__setting-info">
                    <h4>Change Password</h4>
                    <p>Update your account password</p>
                  </div>
                  <button className="cey-btn cey-btn--secondary">
                    Change
                  </button>
                </div>

                <div className="cey-myprofile__setting-item">
                  <div className="cey-myprofile__setting-info">
                    <h4>Delete Account</h4>
                    <p>Permanently delete your account and all data</p>
                  </div>
                  <button className="cey-btn cey-btn--danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CelebritiesMyprofile;
