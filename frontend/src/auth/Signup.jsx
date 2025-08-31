import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaSignInAlt, FaUserPlus, FaStar, FaCamera } from 'react-icons/fa';
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
    agreeTerms: false
  });

  const [userType, setUserType] = useState('user');
  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file' && files[0]) {
      setFormData({
        ...formData,
        [name]: files[0]
      });
      
      // Create a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Signup submitted:', formData);
      
      // For demo purposes, we'll navigate to the login page
      navigate('/login');
    }
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-content">
          {/* Left Side - Form */}
          <div className="auth-form-container">
            <div className="auth-header">
              <h1 className="auth-title">Create Account</h1>
              <p className="auth-subtitle">Join our exclusive community today</p>
            </div>

            {/* User Type Selection */}
            <div className="user-type-selector">
              <button 
                className={`user-type-button ${userType === 'user' ? 'active' : ''}`}
                onClick={() => handleUserTypeChange('user')}
              >
                <FaUser className="user-type-icon" />
                <span>Fan</span>
              </button>
              <button 
                className={`user-type-button ${userType === 'celebrity' ? 'active' : ''}`}
                onClick={() => handleUserTypeChange('celebrity')}
              >
                <FaStar className="user-type-icon" />
                <span>Celebrity</span>
              </button>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              {/* Profile Image Upload */}
              <div className="profile-upload">
                <div className="profile-image-container">
                  {previewImage ? (
                    <img src={previewImage} alt="Profile Preview" className="profile-preview" />
                  ) : (
                    <div className="profile-placeholder">
                      <FaUser />
                    </div>
                  )}
                  <label htmlFor="profileImage" className="upload-button">
                    <FaCamera />
                  </label>
                  <input
                    type="file"
                    id="profileImage"
                    name="profileImage"
                    onChange={handleChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                </div>
                <p className="upload-hint">Upload profile picture</p>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  <FaUser className="input-icon" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  <FaEnvelope className="input-icon" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  <FaLock className="input-icon" />
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="confirmPassword">
                  <FaLock className="input-icon" />
                  <span>Confirm Password</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>

              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <label htmlFor="agreeTerms">
                  I agree to the <Link to="/terms" className="terms-link">Terms & Conditions</Link> and <Link to="/privacy" className="terms-link">Privacy Policy</Link>
                </label>
                {errors.agreeTerms && <span className="error-message block-error">{errors.agreeTerms}</span>}
              </div>

              <button type="submit" className="auth-button">
                <FaUserPlus className="button-icon" />
                Create Account
              </button>

              <div className="auth-divider">
                <span>Already have an account?</span>
              </div>

              <Link to="/login" className="auth-alternate-button">
                <FaSignInAlt className="button-icon" />
                Sign In
              </Link>
            </form>
          </div>

          {/* Right Side - Image and Info */}
          <div className="auth-image-container">
            <div className="auth-overlay"></div>
            <div className="auth-image-content">
              <h2>Join Our Exclusive Platform</h2>
              <p>{userType === 'celebrity' ? 'Connect with fans and monetize your brand' : 'Connect with your favorite celebrities and create memorable experiences'}</p>
              <div className="auth-features">
                {userType === 'celebrity' ? (
                  <>
                    <div className="auth-feature">
                      <div className="feature-icon">💰</div>
                      <div className="feature-text">
                        <h3>Monetize Your Brand</h3>
                        <p>Set your own rates and booking terms</p>
                      </div>
                    </div>
                    <div className="auth-feature">
                      <div className="feature-icon">🌐</div>
                      <div className="feature-text">
                        <h3>Grow Your Audience</h3>
                        <p>Connect with fans around the world</p>
                      </div>
                    </div>
                    <div className="auth-feature">
                      <div className="feature-icon">🔒</div>
                      <div className="feature-text">
                        <h3>Secure Platform</h3>
                        <p>Verified bookings and protected payments</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="auth-feature">
                      <div className="feature-icon">⭐</div>
                      <div className="feature-text">
                        <h3>VIP Experiences</h3>
                        <p>Book unique events with your favorite stars</p>
                      </div>
                    </div>
                    <div className="auth-feature">
                      <div className="feature-icon">💬</div>
                      <div className="feature-text">
                        <h3>Direct Contact</h3>
                        <p>Message celebrities for your events</p>
                      </div>
                    </div>
                    <div className="auth-feature">
                      <div className="feature-icon">🔔</div>
                      <div className="feature-text">
                        <h3>Stay Updated</h3>
                        <p>Get notified about celebrity availability</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
