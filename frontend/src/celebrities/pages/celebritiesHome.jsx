import React from 'react';
import './celebritiesHomeUnique.css';

const CelebritiesHome = () => {
  return (
    <section className="ceyhome">
      <div className="ceyhome-hero" role="img" aria-label="Celebrities hero">
        <div className="ceyhome-hero__overlay" />
        <div className="ceyhome-hero__content">
          <h1 className="ceyhome-hero__title">Welcome to your Star Space!</h1>
          <p className="ceyhome-hero__subtitle">
            Connect with your fans, share your latest updates, and manage your profile.
          </p>
          
        </div>
      </div>

      {/* ENHANCED SECTIONS BELOW */}
      <div className="ceyhome-sections">
        {/* Quick Actions - Now with animated cards */}
        <section className="ceyhome-section ceyhome-actions">
          <div className="ceyhome-section__head">
            <h3 className="ceyhome-title">Quick actions</h3>
            <p className="ceyhome-sub">Everything you need at your fingertips</p>
          </div>
          <div className="ceyhome-actions__grid">
            <a className="ceyhome-card ceyhome-card--gallery" href="/celebrities/gallery">
              <div className="ceyhome-card__icon-wrapper">
                <i className="fa-solid fa-images ceyhome-card__icon" />
                <div className="ceyhome-card__glow" />
              </div>
              <h4 className="ceyhome-card__title">Open Gallery</h4>
              <p className="ceyhome-card__desc">Upload shoots and build your portfolio</p>
              <div className="ceyhome-card__accent" />
            </a>
            <a className="ceyhome-card ceyhome-card--events" href="/celebrities/events">
              <div className="ceyhome-card__icon-wrapper">
                <i className="fa-solid fa-calendar-star ceyhome-card__icon" />
                <div className="ceyhome-card__glow" />
              </div>
              <h4 className="ceyhome-card__title">Manage Events</h4>
              <p className="ceyhome-card__desc">Create, update and promote your events</p>
              <div className="ceyhome-card__accent" />
            </a>
            <a className="ceyhome-card ceyhome-card--chat" href="/celebrities/chat">
              <div className="ceyhome-card__icon-wrapper">
                <i className="fa-solid fa-comments ceyhome-card__icon" />
                <div className="ceyhome-card__glow" />
              </div>
              <h4 className="ceyhome-card__title">Chat</h4>
              <p className="ceyhome-card__desc">Message your team and engage with fans</p>
              <div className="ceyhome-card__accent" />
            </a>
            <a className="ceyhome-card ceyhome-card--profile" href="/celebrities/profile">
              <div className="ceyhome-card__icon-wrapper">
                <i className="fa-solid fa-user-gear ceyhome-card__icon" />
                <div className="ceyhome-card__glow" />
              </div>
              <h4 className="ceyhome-card__title">My Profile</h4>
              <p className="ceyhome-card__desc">Keep your availability and bio up to date</p>
              <div className="ceyhome-card__accent" />
            </a>
          </div>
        </section>

        {/* Spotlight - Now with floating elements and particles */}
        <section className="ceyhome-section ceyhome-spotlight">
          <div className="ceyhome-spotlight__bg-pattern" />
          <div className="ceyhome-spotlight__content">
            <div className="ceyhome-spotlight__badge">
              <i className="fa-solid fa-star" />
              <span>Featured</span>
            </div>
            <h3 className="ceyhome-title ceyhome-spotlight__title">This week's spotlight</h3>
            <p className="ceyhome-sub">Promote a new release, milestone or upcoming show</p>
            <div className="ceyhome-cta-row">
              <a className="ceyhome-btn ceyhome-btn--gold ceyhome-btn--pulse" href="/celebrities/events">
                <i className="fa-solid fa-plus" />
                Create event
              </a>
              <a className="ceyhome-btn ceyhome-btn--ghost ceyhome-btn--hover-fill" href="/celebrities/gallery">
                <i className="fa-solid fa-images" />
                Add to gallery
              </a>
            </div>
          </div>
          <div className="ceyhome-spotlight__decorative">
            <div className="ceyhome-floating-element ceyhome-floating-element--1">
              <i className="fa-solid fa-sparkles" />
            </div>
            <div className="ceyhome-floating-element ceyhome-floating-element--2">
              <i className="fa-solid fa-star" />
            </div>
            <div className="ceyhome-floating-element ceyhome-floating-element--3">
              <i className="fa-solid fa-gem" />
            </div>
          </div>
        </section>

        {/* Activity Feed - Now with timeline design and animations */}
        <section className="ceyhome-section ceyhome-feed">
          <div className="ceyhome-section__head">
            <h3 className="ceyhome-title">Latest updates</h3>
            <p className="ceyhome-sub">A glimpse of what's new in your world</p>
          </div>
          <div className="ceyhome-timeline">
            <div className="ceyhome-timeline__line" />
            <div className="ceyhome-feed__item ceyhome-feed__item--partnership">
              <div className="ceyhome-timeline__marker">
                <i className="fa-solid fa-handshake" />
              </div>
              <div className="ceyhome-feed__content">
                <div className="ceyhome-feed__category">Partnerships</div>
                <h4 className="ceyhome-feed__title">Signed with brand partner Aurum</h4>
                <p className="ceyhome-feed__meta">
                  <i className="fa-solid fa-clock" />
                  Just now
                </p>
              </div>
            </div>
            <div className="ceyhome-feed__item ceyhome-feed__item--gallery">
              <div className="ceyhome-timeline__marker">
                <i className="fa-solid fa-camera" />
              </div>
              <div className="ceyhome-feed__content">
                <div className="ceyhome-feed__category">Gallery</div>
                <h4 className="ceyhome-feed__title">New photoshoot added to the gallery</h4>
                <p className="ceyhome-feed__meta">
                  <i className="fa-solid fa-clock" />
                  2 hrs ago
                </p>
              </div>
            </div>
            <div className="ceyhome-feed__item ceyhome-feed__item--event">
              <div className="ceyhome-timeline__marker">
                <i className="fa-solid fa-calendar-check" />
              </div>
              <div className="ceyhome-feed__content">
                <div className="ceyhome-feed__category">Events</div>
                <h4 className="ceyhome-feed__title">Meet & Greet in Colombo announced</h4>
                <p className="ceyhome-feed__meta">
                  <i className="fa-solid fa-clock" />
                  Yesterday
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - New addition */}
        <section className="ceyhome-section ceyhome-stats">
          <div className="ceyhome-section__head">
            <h3 className="ceyhome-titles">Your Impact</h3>
            <p className="ceyhome-sub">See how your star power is growing</p>
          </div>
          <div className="ceyhome-stats__grid">
            <div className="ceyhome-stat-card ceyhome-stat-card--followers">
              <div className="ceyhome-stat-card__icon">
                <i className="fa-solid fa-users" />
              </div>
              <div className="ceyhome-stat-card__number" data-target="142500">0</div>
              <div className="ceyhome-stat-card__label">Total Followers</div>
              <div className="ceyhome-stat-card__change">+12.5% this month</div>
            </div>
            <div className="ceyhome-stat-card ceyhome-stat-card--engagement">
              <div className="ceyhome-stat-card__icon">
                <i className="fa-solid fa-heart" />
              </div>
              <div className="ceyhome-stat-card__number" data-target="87.2">0</div>
              <div className="ceyhome-stat-card__label">Engagement Rate</div>
              <div className="ceyhome-stat-card__change">+5.8% this week</div>
            </div>
            <div className="ceyhome-stat-card ceyhome-stat-card--events">
              <div className="ceyhome-stat-card__icon">
                <i className="fa-solid fa-calendar-days" />
              </div>
              <div className="ceyhome-stat-card__number" data-target="24">0</div>
              <div className="ceyhome-stat-card__label">Events This Month</div>
              <div className="ceyhome-stat-card__change">+3 upcoming</div>
            </div>
          </div>
        </section>

        {/* Final CTA - Now with split layout and visual enhancements */}
        <section className="ceyhome-section ceyhome-final-cta">
          <div className="ceyhome-final-cta__container">
            <div className="ceyhome-final-cta__content">
              <div className="ceyhome-final-cta__badge">
                <i className="fa-solid fa-crown" />
                <span>VIP Access</span>
              </div>
              <h3 className="ceyhome-title">Ready to shine brighter?</h3>
              <p className="ceyhome-sub">Keep your audience engaged and your brand growing with powerful tools designed for stars like you.</p>
              <div className="ceyhome-cta-row">
                <a className="ceyhome-btn ceyhome-btn--gold ceyhome-btn--large" href="/celebrities/profile">
                  <i className="fa-solid fa-user-pen" />
                  Update profile
                </a>
                <a className="ceyhome-btn ceyhome-btn--ghost ceyhome-btn--large" href="/celebrities/chat">
                  <i className="fa-solid fa-comment-dots" />
                  Open chat
                </a>
              </div>
            </div>
            <div className="ceyhome-final-cta__visual">
              <div className="ceyhome-final-cta__orb ceyhome-final-cta__orb--1" />
              <div className="ceyhome-final-cta__orb ceyhome-final-cta__orb--2" />
              <div className="ceyhome-final-cta__orb ceyhome-final-cta__orb--3" />
              <div className="ceyhome-final-cta__shine" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CelebritiesHome;