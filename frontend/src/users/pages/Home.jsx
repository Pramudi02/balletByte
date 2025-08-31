import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaComments, FaCreditCard, FaCalendarAlt, FaUsers, FaCrown, FaSearch, FaHeart, FaShieldAlt } from 'react-icons/fa';
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
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Verified Celebrities</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Successful Bookings</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose StarConnect?</h2>
          <p>Experience the difference with our premium celebrity booking platform</p>
        </div>
        
        <div className="features-grid">
          
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h3>Secure Booking</h3>
            <p>All transactions are protected with industry-standard security measures</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaComments />
            </div>
            <h3>Direct Communication</h3>
            <p>Chat directly with celebrities or their managers to discuss requirements</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaCreditCard />
            </div>
            <h3>Flexible Payments</h3>
            <p>Multiple payment options with transparent pricing and clear terms</p>
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
              <FaSearch className="button-icon" />
              Find Talent
            </Link>
          </div>
          <div className="section-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmp7EzZajNjmLHI23VV4j4zU5kGH7vh-lXPlIPetjKCBiNpxLANcps45CLYoaM1d3aeX8&usqp=CAU" alt="Celebrities and Talent" />
          </div>
        </div>
      </section>

      {/* Chat & Payments Section */}
      <section className="chat-payments-section">
        <div className="section-content reverse">
          <div className="section-image">
            <img src="https://static.toiimg.com/thumb/msid-110360852,width-1070,height-580,imgsize-69270,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" alt="Communication and Payments" />
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
              <FaComments className="button-icon" />
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
              <FaCalendarAlt className="button-icon" />
              Browse Events
            </Link>
          </div>
          <div className="section-image">
            <img src="https://yt3.googleusercontent.com/cGqJb_2FSsTFYR1OvEy2yH70aXNq1BQTrkArBVH9OIct4rgOnzoilyt7ZSDkI2LJEQnMomhbaA=s900-c-k-c0x00ffffff-no-rj" alt="Events and Celebrations" />
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="gallery-section">
        <div className="section-header">
          <h2>Featured Events & Celebrities</h2>
          <p>Take a look at some of our recent successful bookings</p>
        </div>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/4.jpg" alt="Corporate Event" />
            <div className="gallery-overlay">
              <h4>Corporate Launch</h4>
              <p>Tech company product launch with celebrity endorsement</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src="/5.jpg" alt="Wedding Celebration" />
            <div className="gallery-overlay">
              <h4>Wedding Entertainment</h4>
              <p>Luxury wedding with live celebrity performance</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src="/1.jpg" alt="Brand Campaign" />
            <div className="gallery-overlay">
              <h4>Brand Campaign</h4>
              <p>Fashion brand campaign with top influencer</p>
            </div>
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