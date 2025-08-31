import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    // Here you would send the reset request to your backend
    console.log('Reset password for:', email);
    
    // For demo purposes, we'll just show the success message
    setIsSubmitted(true);
    setError('');
  };

  return (
    <div className="auth-page">
      <div className="auth-container" style={{ maxWidth: '500px' }}>
        <div className="auth-content" style={{ flexDirection: 'column' }}>
          {/* Form Container */}
          <div className="auth-form-container">
            <div className="auth-header">
              <h1 className="auth-title">Reset Password</h1>
              <p className="auth-subtitle">
                {!isSubmitted 
                  ? 'Enter your email to receive password reset instructions' 
                  : 'Check your email for reset instructions'}
              </p>
            </div>

            {!isSubmitted ? (
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    <FaEnvelope className="input-icon" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${error ? 'error' : ''}`}
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && <span className="error-message">{error}</span>}
                </div>

                <button type="submit" className="auth-button">
                  Send Reset Link
                </button>

                <div className="auth-divider">
                  <span>Or</span>
                </div>

                <Link to="/login" className="auth-alternate-button">
                  <FaArrowLeft className="button-icon" />
                  Back to Login
                </Link>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Reset Link Sent</h3>
                <p>
                  We've sent a password reset link to <strong>{email}</strong>. 
                  Please check your inbox and follow the instructions to reset your password.
                </p>
                <p className="note">
                  If you don't see the email, please check your spam folder or
                  try requesting a new reset link after some time.
                </p>
                <Link to="/login" className="auth-button" style={{ marginTop: '20px' }}>
                  <FaArrowLeft className="button-icon" />
                  Return to Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
