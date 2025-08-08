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

      {/* ENHANCED SECTIONS BELOW */}
      <div className="cey-home-sections">
        {/* Quick Actions - Now with animated cards */}
        <section className="cey-section cey-actions">
          <div className="cey-section__head">
            <h3 className="cey-title">Quick actions</h3>
            <p className="cey-sub">Everything you need at your fingertips</p>
          </div>
          <div className="cey-actions__grid">
            <a className="cey-card cey-card--gallery" href="/celebrities/gallery">
              <div className="cey-card__icon-wrapper">
                <i className="fa-solid fa-images cey-card__icon" />
                <div className="cey-card__glow" />
              </div>
              <h4 className="cey-card__title">Open Gallery</h4>
              <p className="cey-card__desc">Upload shoots and build your portfolio</p>
              <div className="cey-card__accent" />
            </a>
            <a className="cey-card cey-card--events" href="/celebrities/events">
              <div className="cey-card__icon-wrapper">
                <i className="fa-solid fa-calendar-star cey-card__icon" />
                <div className="cey-card__glow" />
              </div>
              <h4 className="cey-card__title">Manage Events</h4>
              <p className="cey-card__desc">Create, update and promote your events</p>
              <div className="cey-card__accent" />
            </a>
            <a className="cey-card cey-card--chat" href="/celebrities/chat">
              <div className="cey-card__icon-wrapper">
                <i className="fa-solid fa-comments cey-card__icon" />
                <div className="cey-card__glow" />
              </div>
              <h4 className="cey-card__title">Chat</h4>
              <p className="cey-card__desc">Message your team and engage with fans</p>
              <div className="cey-card__accent" />
            </a>
            <a className="cey-card cey-card--profile" href="/celebrities/profile">
              <div className="cey-card__icon-wrapper">
                <i className="fa-solid fa-user-gear cey-card__icon" />
                <div className="cey-card__glow" />
              </div>
              <h4 className="cey-card__title">My Profile</h4>
              <p className="cey-card__desc">Keep your availability and bio up to date</p>
              <div className="cey-card__accent" />
            </a>
          </div>
        </section>

        {/* Spotlight - Now with floating elements and particles */}
        <section className="cey-section cey-spotlight">
          <div className="cey-spotlight__bg-pattern" />
          <div className="cey-spotlight__content">
            <div className="cey-spotlight__badge">
              <i className="fa-solid fa-star" />
              <span>Featured</span>
            </div>
            <h3 className="cey-title cey-spotlight__title">This week's spotlight</h3>
            <p className="cey-sub">Promote a new release, milestone or upcoming show</p>
            <div className="cey-cta-row">
              <a className="cey-btn cey-btn--gold cey-btn--pulse" href="/celebrities/events">
                <i className="fa-solid fa-plus" />
                Create event
              </a>
              <a className="cey-btn cey-btn--ghost cey-btn--hover-fill" href="/celebrities/gallery">
                <i className="fa-solid fa-images" />
                Add to gallery
              </a>
            </div>
          </div>
          <div className="cey-spotlight__decorative">
            <div className="cey-floating-element cey-floating-element--1">
              <i className="fa-solid fa-sparkles" />
            </div>
            <div className="cey-floating-element cey-floating-element--2">
              <i className="fa-solid fa-star" />
            </div>
            <div className="cey-floating-element cey-floating-element--3">
              <i className="fa-solid fa-gem" />
            </div>
          </div>
        </section>

        {/* Activity Feed - Now with timeline design and animations */}
        <section className="cey-section cey-feed">
          <div className="cey-section__head">
            <h3 className="cey-title">Latest updates</h3>
            <p className="cey-sub">A glimpse of what's new in your world</p>
          </div>
          <div className="cey-timeline">
            <div className="cey-timeline__line" />
            <div className="cey-feed__item cey-feed__item--partnership">
              <div className="cey-timeline__marker">
                <i className="fa-solid fa-handshake" />
              </div>
              <div className="cey-feed__content">
                <div className="cey-feed__category">Partnerships</div>
                <h4 className="cey-feed__title">Signed with brand partner Aurum</h4>
                <p className="cey-feed__meta">
                  <i className="fa-solid fa-clock" />
                  Just now
                </p>
              </div>
            </div>
            <div className="cey-feed__item cey-feed__item--gallery">
              <div className="cey-timeline__marker">
                <i className="fa-solid fa-camera" />
              </div>
              <div className="cey-feed__content">
                <div className="cey-feed__category">Gallery</div>
                <h4 className="cey-feed__title">New photoshoot added to the gallery</h4>
                <p className="cey-feed__meta">
                  <i className="fa-solid fa-clock" />
                  2 hrs ago
                </p>
              </div>
            </div>
            <div className="cey-feed__item cey-feed__item--event">
              <div className="cey-timeline__marker">
                <i className="fa-solid fa-calendar-check" />
              </div>
              <div className="cey-feed__content">
                <div className="cey-feed__category">Events</div>
                <h4 className="cey-feed__title">Meet & Greet in Colombo announced</h4>
                <p className="cey-feed__meta">
                  <i className="fa-solid fa-clock" />
                  Yesterday
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - New addition */}
        <section className="cey-section cey-stats">
          <div className="cey-section__head">
            <h3 className="cey-title">Your Impact</h3>
            <p className="cey-sub">See how your star power is growing</p>
          </div>
          <div className="cey-stats__grid">
            <div className="cey-stat-card cey-stat-card--followers">
              <div className="cey-stat-card__icon">
                <i className="fa-solid fa-users" />
              </div>
              <div className="cey-stat-card__number" data-target="142500">0</div>
              <div className="cey-stat-card__label">Total Followers</div>
              <div className="cey-stat-card__change">+12.5% this month</div>
            </div>
            <div className="cey-stat-card cey-stat-card--engagement">
              <div className="cey-stat-card__icon">
                <i className="fa-solid fa-heart" />
              </div>
              <div className="cey-stat-card__number" data-target="87.2">0</div>
              <div className="cey-stat-card__label">Engagement Rate</div>
              <div className="cey-stat-card__change">+5.8% this week</div>
            </div>
            <div className="cey-stat-card cey-stat-card--events">
              <div className="cey-stat-card__icon">
                <i className="fa-solid fa-calendar-days" />
              </div>
              <div className="cey-stat-card__number" data-target="24">0</div>
              <div className="cey-stat-card__label">Events This Month</div>
              <div className="cey-stat-card__change">+3 upcoming</div>
            </div>
          </div>
        </section>

        {/* Final CTA - Now with split layout and visual enhancements */}
        <section className="cey-section cey-final-cta">
          <div className="cey-final-cta__container">
            <div className="cey-final-cta__content">
              <div className="cey-final-cta__badge">
                <i className="fa-solid fa-crown" />
                <span>VIP Access</span>
              </div>
              <h3 className="cey-title">Ready to shine brighter?</h3>
              <p className="cey-sub">Keep your audience engaged and your brand growing with powerful tools designed for stars like you.</p>
              <div className="cey-cta-row">
                <a className="cey-btn cey-btn--gold cey-btn--large" href="/celebrities/profile">
                  <i className="fa-solid fa-user-pen" />
                  Update profile
                </a>
                <a className="cey-btn cey-btn--ghost cey-btn--large" href="/celebrities/chat">
                  <i className="fa-solid fa-comment-dots" />
                  Open chat
                </a>
              </div>
            </div>
            <div className="cey-final-cta__visual">
              <div className="cey-final-cta__orb cey-final-cta__orb--1" />
              <div className="cey-final-cta__orb cey-final-cta__orb--2" />
              <div className="cey-final-cta__orb cey-final-cta__orb--3" />
              <div className="cey-final-cta__shine" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CelebritiesHome;