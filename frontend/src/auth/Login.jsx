import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt, FaUserPlus, FaStar } from 'react-icons/fa';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [userType, setUserType] = useState('user');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials({
      ...credentials,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!credentials.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!credentials.password) {
      newErrors.password = 'Password is required';
    } else if (credentials.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the credentials to your backend
      console.log('Login submitted:', credentials);
      
      // For demo purposes, we'll navigate to the respective home page
      if (userType === 'celebrity') {
        navigate('/celebrities/home');
      } else {
        navigate('/user/home');
      }
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
              <h1 className="auth-title">Welcome Back</h1>
              <p className="auth-subtitle">Sign in to continue your extraordinary journey</p>
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
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  <FaUser className="input-icon" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter your email"
                  value={credentials.email}
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
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={handleChange}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={credentials.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="auth-button">
                <FaSignInAlt className="button-icon" />
                Sign In
              </button>

              <div className="auth-divider">
                <span>Don't have an account?</span>
              </div>

              <Link to="/signup" className="auth-alternate-button">
                <FaUserPlus className="button-icon" />
                Create Account
              </Link>
            </form>
          </div>

          {/* Right Side - Image and Info */}
          <div className="auth-image-container">
            <div className="auth-overlay"></div>
            <div className="auth-image-content">
              <h2>Connect With Top Celebrities</h2>
              <p>Book for events, chat directly, and create unforgettable experiences</p>
              <div className="auth-features">
                <div className="auth-feature">
                  <div className="feature-icon">⭐</div>
                  <div className="feature-text">
                    <h3>Exclusive Access</h3>
                    <p>Connect with top talent around the world</p>
                  </div>
                </div>
                <div className="auth-feature">
                  <div className="feature-icon">💬</div>
                  <div className="feature-text">
                    <h3>Direct Messaging</h3>
                    <p>Chat with celebrities and their teams</p>
                  </div>
                </div>
                <div className="auth-feature">
                  <div className="feature-icon">📅</div>
                  <div className="feature-text">
                    <h3>Easy Booking</h3>
                    <p>Book talent for your events seamlessly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
