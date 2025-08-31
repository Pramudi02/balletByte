import React, { useState } from 'react';
import { 
  FaCog, FaUser, FaLock, FaBell, FaPalette, 
  FaGlobe, FaEnvelope, FaShieldAlt, FaSave
} from 'react-icons/fa';
import './Settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    siteName: 'BalletByte',
    siteDescription: 'Connect with your favorite celebrities',
    adminEmail: 'admin@balletbyte.com',
    enableRegistration: true,
    requireEmailVerification: true,
    maintenanceMode: false,
    notifyNewUsers: true,
    notifyNewCelebrities: true,
    notifyNewEvents: true,
    theme: 'dark',
    primaryColor: '#ffd700',
    smtpHost: 'smtp.example.com',
    smtpPort: '587',
    smtpUsername: 'admin@balletbyte.com',
    smtpPassword: '********',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings saved:', formData);
    // In a real app, you would send this data to your API
    alert('Settings saved successfully!');
  };

  const handleColorSelect = (color) => {
    setFormData({
      ...formData,
      primaryColor: color
    });
  };

  return (
    <div className="admin-settings-page">
      <h1 className="admin-page-title">Settings</h1>
      
      <div className="admin-settings-container">
        {/* Settings Navigation */}
        <div className="admin-settings-nav">
          <h2 className="admin-settings-nav-title">Settings Menu</h2>
          <ul className="admin-settings-nav-list">
            <li className="admin-settings-nav-item">
              <a 
                href="#general" 
                className={`admin-settings-nav-link ${activeTab === 'general' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab('general'); }}
              >
                <FaCog className="admin-settings-nav-icon" />
                General
              </a>
            </li>
            <li className="admin-settings-nav-item">
              <a 
                href="#appearance" 
                className={`admin-settings-nav-link ${activeTab === 'appearance' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab('appearance'); }}
              >
                <FaPalette className="admin-settings-nav-icon" />
                Appearance
              </a>
            </li>
            <li className="admin-settings-nav-item">
              <a 
                href="#notifications" 
                className={`admin-settings-nav-link ${activeTab === 'notifications' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab('notifications'); }}
              >
                <FaBell className="admin-settings-nav-icon" />
                Notifications
              </a>
            </li>
            <li className="admin-settings-nav-item">
              <a 
                href="#email" 
                className={`admin-settings-nav-link ${activeTab === 'email' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab('email'); }}
              >
                <FaEnvelope className="admin-settings-nav-icon" />
                Email Settings
              </a>
            </li>
            <li className="admin-settings-nav-item">
              <a 
                href="#security" 
                className={`admin-settings-nav-link ${activeTab === 'security' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab('security'); }}
              >
                <FaShieldAlt className="admin-settings-nav-icon" />
                Security
              </a>
            </li>
            <li className="admin-settings-nav-item">
              <a 
                href="#account" 
                className={`admin-settings-nav-link ${activeTab === 'account' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveTab('account'); }}
              >
                <FaUser className="admin-settings-nav-icon" />
                Admin Account
              </a>
            </li>
          </ul>
        </div>

        {/* Settings Content */}
        <div className="admin-settings-content">
          <form onSubmit={handleSubmit}>
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="admin-settings-section">
                <div className="admin-settings-section-header">
                  <h2 className="admin-settings-section-title">General Settings</h2>
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="siteName" className="admin-settings-label">Site Name</label>
                  <input 
                    type="text" 
                    id="siteName" 
                    name="siteName" 
                    className="admin-settings-input" 
                    value={formData.siteName} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="siteDescription" className="admin-settings-label">Site Description</label>
                  <textarea 
                    id="siteDescription" 
                    name="siteDescription" 
                    className="admin-settings-textarea" 
                    value={formData.siteDescription} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="adminEmail" className="admin-settings-label">Admin Email</label>
                  <input 
                    type="email" 
                    id="adminEmail" 
                    name="adminEmail" 
                    className="admin-settings-input" 
                    value={formData.adminEmail} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="admin-settings-form-group">
                  <div className="admin-settings-checkbox-container">
                    <input 
                      type="checkbox" 
                      id="enableRegistration" 
                      name="enableRegistration" 
                      className="admin-settings-checkbox" 
                      checked={formData.enableRegistration} 
                      onChange={handleInputChange} 
                    />
                    <label htmlFor="enableRegistration" className="admin-settings-label">Enable User Registration</label>
                  </div>
                </div>

                <div className="admin-settings-form-group">
                  <div className="admin-settings-checkbox-container">
                    <input 
                      type="checkbox" 
                      id="maintenanceMode" 
                      name="maintenanceMode" 
                      className="admin-settings-checkbox" 
                      checked={formData.maintenanceMode} 
                      onChange={handleInputChange} 
                    />
                    <label htmlFor="maintenanceMode" className="admin-settings-label">Maintenance Mode</label>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div className="admin-settings-section">
                <div className="admin-settings-section-header">
                  <h2 className="admin-settings-section-title">Appearance Settings</h2>
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="theme" className="admin-settings-label">Theme</label>
                  <select 
                    id="theme" 
                    name="theme" 
                    className="admin-settings-select" 
                    value={formData.theme} 
                    onChange={handleInputChange}
                  >
                    <option value="dark">Dark Theme</option>
                    <option value="light">Light Theme</option>
                    <option value="auto">Auto (Follow System)</option>
                  </select>
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-label">Primary Color</label>
                  <div className="admin-settings-color-picker">
                    <div 
                      className={`admin-settings-color-option ${formData.primaryColor === '#ffd700' ? 'active' : ''}`}
                      style={{ backgroundColor: '#ffd700' }}
                      onClick={() => handleColorSelect('#ffd700')}
                    ></div>
                    <div 
                      className={`admin-settings-color-option ${formData.primaryColor === '#4caf50' ? 'active' : ''}`}
                      style={{ backgroundColor: '#4caf50' }}
                      onClick={() => handleColorSelect('#4caf50')}
                    ></div>
                    <div 
                      className={`admin-settings-color-option ${formData.primaryColor === '#2196f3' ? 'active' : ''}`}
                      style={{ backgroundColor: '#2196f3' }}
                      onClick={() => handleColorSelect('#2196f3')}
                    ></div>
                    <div 
                      className={`admin-settings-color-option ${formData.primaryColor === '#f44336' ? 'active' : ''}`}
                      style={{ backgroundColor: '#f44336' }}
                      onClick={() => handleColorSelect('#f44336')}
                    ></div>
                    <div 
                      className={`admin-settings-color-option ${formData.primaryColor === '#9c27b0' ? 'active' : ''}`}
                      style={{ backgroundColor: '#9c27b0' }}
                      onClick={() => handleColorSelect('#9c27b0')}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="admin-settings-section">
                <div className="admin-settings-section-header">
                  <h2 className="admin-settings-section-title">Notification Settings</h2>
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-label">Email Notifications</label>
                  <div className="admin-settings-form-group">
                    <div className="admin-settings-checkbox-container">
                      <input 
                        type="checkbox" 
                        id="notifyNewUsers" 
                        name="notifyNewUsers" 
                        className="admin-settings-checkbox" 
                        checked={formData.notifyNewUsers} 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="notifyNewUsers" className="admin-settings-label">New User Registrations</label>
                    </div>
                  </div>
                  <div className="admin-settings-form-group">
                    <div className="admin-settings-checkbox-container">
                      <input 
                        type="checkbox" 
                        id="notifyNewCelebrities" 
                        name="notifyNewCelebrities" 
                        className="admin-settings-checkbox" 
                        checked={formData.notifyNewCelebrities} 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="notifyNewCelebrities" className="admin-settings-label">New Celebrity Requests</label>
                    </div>
                  </div>
                  <div className="admin-settings-form-group">
                    <div className="admin-settings-checkbox-container">
                      <input 
                        type="checkbox" 
                        id="notifyNewEvents" 
                        name="notifyNewEvents" 
                        className="admin-settings-checkbox" 
                        checked={formData.notifyNewEvents} 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="notifyNewEvents" className="admin-settings-label">New Event Creations</label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Email Settings */}
            {activeTab === 'email' && (
              <div className="admin-settings-section">
                <div className="admin-settings-section-header">
                  <h2 className="admin-settings-section-title">Email Settings</h2>
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="smtpHost" className="admin-settings-label">SMTP Host</label>
                  <input 
                    type="text" 
                    id="smtpHost" 
                    name="smtpHost" 
                    className="admin-settings-input" 
                    value={formData.smtpHost} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="smtpPort" className="admin-settings-label">SMTP Port</label>
                  <input 
                    type="text" 
                    id="smtpPort" 
                    name="smtpPort" 
                    className="admin-settings-input" 
                    value={formData.smtpPort} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="smtpUsername" className="admin-settings-label">SMTP Username</label>
                  <input 
                    type="text" 
                    id="smtpUsername" 
                    name="smtpUsername" 
                    className="admin-settings-input" 
                    value={formData.smtpUsername} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="smtpPassword" className="admin-settings-label">SMTP Password</label>
                  <input 
                    type="password" 
                    id="smtpPassword" 
                    name="smtpPassword" 
                    className="admin-settings-input" 
                    value={formData.smtpPassword} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="admin-settings-section">
                <div className="admin-settings-section-header">
                  <h2 className="admin-settings-section-title">Security Settings</h2>
                </div>

                <div className="admin-settings-form-group">
                  <div className="admin-settings-checkbox-container">
                    <input 
                      type="checkbox" 
                      id="requireEmailVerification" 
                      name="requireEmailVerification" 
                      className="admin-settings-checkbox" 
                      checked={formData.requireEmailVerification} 
                      onChange={handleInputChange} 
                    />
                    <label htmlFor="requireEmailVerification" className="admin-settings-label">Require Email Verification</label>
                  </div>
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-label">Two-Factor Authentication</label>
                  <div className="admin-settings-checkbox-container">
                    <label className="admin-settings-toggle">
                      <input type="checkbox" />
                      <span className="admin-settings-toggle-slider"></span>
                    </label>
                    <span className="admin-settings-label" style={{marginLeft: '10px'}}>
                      Require 2FA for Admin Accounts
                    </span>
                  </div>
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="sessionTimeout" className="admin-settings-label">Session Timeout (minutes)</label>
                  <input 
                    type="number" 
                    id="sessionTimeout" 
                    name="sessionTimeout" 
                    className="admin-settings-input" 
                    defaultValue={60} 
                    min={5}
                    max={1440}
                  />
                </div>
              </div>
            )}

            {/* Account Settings */}
            {activeTab === 'account' && (
              <div className="admin-settings-section">
                <div className="admin-settings-section-header">
                  <h2 className="admin-settings-section-title">Admin Account Settings</h2>
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="adminName" className="admin-settings-label">Admin Name</label>
                  <input 
                    type="text" 
                    id="adminName" 
                    name="adminName" 
                    className="admin-settings-input" 
                    defaultValue="Admin User" 
                  />
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="adminEmail" className="admin-settings-label">Admin Email</label>
                  <input 
                    type="email" 
                    id="adminEmail" 
                    name="adminEmail" 
                    className="admin-settings-input" 
                    value={formData.adminEmail} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="currentPassword" className="admin-settings-label">Current Password</label>
                  <input 
                    type="password" 
                    id="currentPassword" 
                    name="currentPassword" 
                    className="admin-settings-input" 
                  />
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="newPassword" className="admin-settings-label">New Password</label>
                  <input 
                    type="password" 
                    id="newPassword" 
                    name="newPassword" 
                    className="admin-settings-input" 
                  />
                </div>

                <div className="admin-settings-form-group">
                  <label htmlFor="confirmPassword" className="admin-settings-label">Confirm New Password</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    className="admin-settings-input" 
                  />
                </div>
              </div>
            )}

            <div className="admin-settings-action-buttons">
              <button type="button" className="admin-settings-cancel-btn">Cancel</button>
              <button type="submit" className="admin-settings-save-btn">
                <FaSave style={{ marginRight: '5px' }} /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
