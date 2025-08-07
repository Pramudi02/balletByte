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
            <h1>Hire Top Celebrities & Talent for Your Next Event</h1>
            <p className="quote-author">Connecting You With Stars, Effortlessly</p>
          </div>
          
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore-section">
        <div className="section-content">
          <div className="section-text">
            <h2>
              <FaStar className="section-icon" />
              Find the Perfect Celebrity
            </h2>
            <p>
              Browse our curated list of actors, musicians, sports stars, and influencers. 
              Whether it's a corporate event, wedding, brand campaign, or private party, 
              we help you connect with the right talent for your needs.
            </p>
            <ul className="feature-list">
              <li>Direct booking with verified celebrities</li>
              <li>Browse by category, budget, and availability</li>
              <li>Transparent pricing and secure contracts</li>
              <li>Personalized recommendations</li>
            </ul>
            <Link to="/user/explore" className="cta-button">
              Find Talent
            </Link>
          </div>
          <div className="section-image">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Celebrities" />
          </div>
        </div>
      </section>

      {/* Chat & Payments Section */}
      <section className="chat-payments-section">
        <div className="section-content reverse">
          <div className="section-image">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Chat and Payments" />
          </div>
          <div className="section-text">
            <h2>
              <FaComments className="section-icon" />
              Chat & Secure Payments
            </h2>
            <p>
              Message celebrities or their managers directly to discuss your requirements. 
              All payments are handled securely, with clear terms and support from our team.
            </p>
            <ul className="feature-list">
              <li>Instant messaging with talent</li>
              <li>Easy booking management</li>
              <li>Secure payment processing</li>
              <li>Dedicated customer support</li>
            </ul>
            <Link to="/user/chat" className="cta-button">
              Start Conversation
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
              Book for Any Occasion
            </h2>
            <p>
              From product launches and brand activations to private parties and weddings, 
              our platform makes it easy to book celebrities for any event, big or small.
            </p>
            <ul className="feature-list">
              <li>Corporate events & brand campaigns</li>
              <li>Weddings & private celebrations</li>
              <li>Concerts, meet-and-greets, and more</li>
              <li>Flexible packages for every budget</li>
            </ul>
            <Link to="/user/events" className="cta-button">
              Browse Events
            </Link>
          </div>
          <div className="section-image">
            <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80" alt="Events" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Book Your Star?</h2>
          <p>Join thousands of users who have made their events unforgettable with StarConnect.</p>
          <div className="cta-buttons">
            <Link to="/user/explore" className="cta-button primary">
              <FaUsers className="button-icon" />
              Find Talent
            </Link>
            <Link to="/user/chat" className="cta-button secondary">
              <FaComments className="button-icon" />
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;