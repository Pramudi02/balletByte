import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaComments, FaCreditCard, FaCalendarAlt, FaUsers, FaCrown } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-quote">
            <h1>"Love, faith and respect are what makes a true star!"</h1>
            <p className="quote-author">- Yousra</p>
          </div>
          <div className="hero-description">
            <h2>Welcome to StarConnect</h2>
            <p>
              The premier platform connecting fans with their favorite celebrities. 
              Experience exclusive behind-the-scenes content, direct messaging, 
              and unforgettable events with the stars you love.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Celebrities</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore-section">
        <div className="section-content">
          <div className="section-text">
            <h2>
              <FaStar className="section-icon" />
              Discover Celebrities
            </h2>
            <p>
              Explore our extensive collection of verified celebrities from music, film, sports, 
              and entertainment. Connect with your idols and discover new stars to follow.
            </p>
            <ul className="feature-list">
              <li>Direct messaging with celebrities</li>
              <li>Exclusive behind-the-scenes content</li>
              <li>Verified celebrity profiles</li>
              <li>Real-time updates and notifications</li>
            </ul>
            <Link to="/user/explore" className="cta-button">
              Explore Celebrities
            </Link>
          </div>
          <div className="section-image">
            <img src="/images/explore-celebrities.jpg" alt="Celebrities" />
          </div>
        </div>
      </section>

      {/* Chat & Payments Section */}
      <section className="chat-payments-section">
        <div className="section-content reverse">
          <div className="section-image">
            <img src="/images/chat-payments.jpg" alt="Chat and Payments" />
          </div>
          <div className="section-text">
            <h2>
              <FaComments className="section-icon" />
              Chat & Payments
            </h2>
            <p>
              Connect directly with celebrities through our secure messaging system. 
              Book appearances, request personalized messages, and make secure payments 
              for exclusive celebrity services.
            </p>
            <ul className="feature-list">
              <li>Secure direct messaging</li>
              <li>Celebrity booking services</li>
              <li>Secure payment processing</li>
              <li>Personalized video messages</li>
            </ul>
            <Link to="/user/chat" className="cta-button">
              Start Chatting
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="section-content">
          <div className="section-text">
            <h2>
              <FaCalendarAlt className="section-icon" />
              Exclusive Events
            </h2>
            <p>
              Attend exclusive events, concerts, meet-and-greets, and private parties 
              with your favorite celebrities. Get early access to tickets and VIP experiences.
            </p>
            <ul className="feature-list">
              <li>Exclusive event access</li>
              <li>VIP meet-and-greet packages</li>
              <li>Early ticket notifications</li>
              <li>Private celebrity parties</li>
            </ul>
            <Link to="/user/events" className="cta-button">
              Browse Events
            </Link>
          </div>
          <div className="section-image">
            <img src="/images/events.jpg" alt="Events" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Connect with Stars?</h2>
          <p>Join thousands of fans already connecting with their favorite celebrities</p>
          <div className="cta-buttons">
            <Link to="/user/explore" className="cta-button primary">
              <FaUsers className="button-icon" />
              Explore Celebrities
            </Link>
            <Link to="/user/chat" className="cta-button secondary">
              <FaComments className="button-icon" />
              Start Chatting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 