
import React from 'react';
import './celebritiesHome.css';

const CelebritiesHome = () => {
  return (
    <section className="cey-home">
      <div className="cey-home-hero" role="img" aria-label="Celebrities hero">
        <div className="cey-home-hero__overlay" />
        <div className="cey-home-hero__content">
          <h1 className="cey-home-hero__title">Welcome to your Star Space!</h1>
          <p className="cey-home-hero__subtitle">
            Connect with your fans, share your latest updates, and manage your profile.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default CelebritiesHome;
