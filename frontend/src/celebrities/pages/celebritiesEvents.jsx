import React, { useState, useRef } from 'react';
import './celebritiesEvents.css';

const CelebritiesEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Dinakshi Prayasad - Fashion Show & Meet & Greet',
      description: 'Join Sri Lankan fashion icon Dinakshi Prayasad for an exclusive fashion showcase and intimate meet & greet session. Experience the latest trends and get a chance to meet the style queen herself.',
      date: '2025-09-15',
      time: '19:00',
      venue: 'Cinnamon Grand Hotel, Colombo',
      venueType: 'offline',
      eventType: 'meet-greet',
      banner: 'https://i.pinimg.com/736x/5e/96/d9/5e96d951e3097e9fa49c7d3da2b8ef99.jpg',
      ticketing: {
        type: 'paid',
        price: 5000,
        currency: 'LKR'
      },
      status: 'upcoming',
      createdAt: '2024-12-01',
      celebrity: 'Dinakshi Prayasad'
    },
    {
      id: 2,
      title: 'Hemal Ranasinghe - Charity Gala Night',
      description: 'A glamorous evening with Sri Lankan actor Hemal Ranasinghe to support local children\'s charities. Enjoy live performances, auctions, and exclusive meet & greet opportunities.',
      date: '2025-10-01',
      time: '18:30',
      venue: 'Galle Face Hotel, Colombo',
      venueType: 'offline',
      eventType: 'charity',
      banner: 'https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Factor%2F8590814%2Fphoto%2F65e6899bf04ff.jpg&w=640&q=75',
      ticketing: {
        type: 'paid',
        price: 7500,
        currency: 'LKR'
      },
      status: 'upcoming',
      createdAt: '2024-12-02',
      celebrity: 'Hemal Ranasinghe'
    },
    {
      id: 3,
      title: 'Kumar Sangakkara - Cricket Masterclass',
      description: 'Learn from the legendary Sri Lankan cricketer Kumar Sangakkara in this exclusive cricket workshop. Perfect for aspiring cricketers and fans who want to improve their game.',
      date: '2025-08-20',
      time: '14:00',
      venue: 'SSC Cricket Ground, Colombo',
      venueType: 'offline',
      eventType: 'workshop',
      banner: 'https://i.pinimg.com/1200x/9b/0d/77/9b0d7728bb62a423c155bf5bf060270f.jpg',
      ticketing: {
        type: 'paid',
        price: 3000,
        currency: 'LKR'
      },
      status: 'completed',
      createdAt: '2024-11-15',
      celebrity: 'Kumar Sangakkara'
    },
    {
      id: 4,
      title: 'Dinakshi Prayasad - Live Instagram Q&A',
      description: 'Join fashion influencer Dinakshi Prayasad for an intimate online Q&A session where she answers your questions about fashion, lifestyle, and her journey in the industry.',
      date: '2025-09-25',
      time: '20:00',
      venue: 'Instagram Live',
      venueType: 'online',
      eventType: 'live-qa',
      banner: 'https://i.pinimg.com/736x/5e/96/d9/5e96d951e3097e9fa49c7d3da2b8ef99.jpg',
      ticketing: {
        type: 'free'
      },
      status: 'upcoming',
      createdAt: '2024-12-05',
      celebrity: 'Dinakshi Prayasad'
    },
    {
      id: 5,
      title: 'Hemal Ranasinghe - Movie Premiere Night',
      description: 'Be among the first to watch Hemal Ranasinghe\'s latest film at this exclusive premiere event. Includes red carpet experience and post-screening Q&A session.',
      date: '2025-11-10',
      time: '19:30',
      venue: 'Liberty Cinema, Colombo',
      venueType: 'offline',
      eventType: 'premiere',
      banner: 'https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Factor%2F8590814%2Fphoto%2F65e6899bf04ff.jpg&w=640&q=75',
      ticketing: {
        type: 'paid',
        price: 2500,
        currency: 'LKR'
      },
      status: 'upcoming',
      createdAt: '2024-12-10',
      celebrity: 'Hemal Ranasinghe'
    },
    {
      id: 6,
      title: 'Kumar Sangakkara - Book Launch & Signing',
      description: 'Join cricket legend Kumar Sangakkara for the launch of his autobiography. Get your copy signed and enjoy an evening of cricket stories and insights.',
      date: '2025-10-15',
      time: '16:00',
      venue: 'Barefoot Bookstore, Colombo',
      venueType: 'offline',
      eventType: 'meet-greet',
      banner: 'https://i.pinimg.com/1200x/9b/0d/77/9b0d7728bb62a423c155bf5bf060270f.jpg',
      ticketing: {
        type: 'free'
      },
      status: 'upcoming',
      createdAt: '2024-12-12',
      celebrity: 'Kumar Sangakkara'
    }
  ]);

  const [form, setForm] = useState({
    title: '',
    celebrity: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    venueType: 'offline',
    eventType: 'meet-greet',
    ticketing: {
      type: 'free',
      price: 0,
      currency: 'LKR'
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');
  const [celebrityFilter, setCelebrityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [bannerPreview, setBannerPreview] = useState(null);
  const fileInputRef = useRef(null);

  const eventTypes = [
    { value: 'concert', label: 'Concert', icon: 'fa-music' },
    { value: 'meet-greet', label: 'Meet & Greet', icon: 'fa-handshake' },
    { value: 'live-qa', label: 'Live Q&A', icon: 'fa-comments' },
    { value: 'charity', label: 'Charity', icon: 'fa-heart' },
    { value: 'premiere', label: 'Movie Premiere', icon: 'fa-film' },
    { value: 'workshop', label: 'Workshop', icon: 'fa-graduation-cap' },
    { value: 'photoshoot', label: 'Photoshoot', icon: 'fa-camera' },
    { value: 'fashion-show', label: 'Fashion Show', icon: 'fa-tshirt' },
    { value: 'book-launch', label: 'Book Launch', icon: 'fa-book' },
    { value: 'cricket-clinic', label: 'Cricket Clinic', icon: 'fa-baseball-ball' },
    { value: 'dance-performance', label: 'Dance Performance', icon: 'fa-music' },
    { value: 'other', label: 'Other', icon: 'fa-star' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('ticketing.')) {
      const ticketingField = name.split('.')[1];
      setForm(prev => ({
        ...prev,
        ticketing: {
          ...prev.ticketing,
          [ticketingField]: value
        }
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setBannerPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (form.title && form.celebrity && form.date && form.venue) {
      const newEvent = {
        id: Date.now(),
        ...form,
        banner: bannerPreview || '/1.jpg',
        status: 'upcoming',
        createdAt: new Date().toISOString().split('T')[0]
      };
      
      setEvents(prev => [newEvent, ...prev]);
      setForm({
        title: '',
        celebrity: '',
        description: '',
        date: '',
        time: '',
        venue: '',
        venueType: 'offline',
        eventType: 'meet-greet',
        ticketing: {
          type: 'free',
          price: 0,
          currency: 'LKR'
        }
      });
      setBannerPreview(null);
      setShowForm(false);
    }
  };

  const updateEventStatus = (eventId, newStatus) => {
    setEvents(prev => prev.map(event => 
      event.id === eventId ? { ...event, status: newStatus } : event
    ));
  };

  const deleteEvent = (eventId) => {
    setEvents(prev => prev.filter(event => event.id !== eventId));
  };

  const filteredAndSortedEvents = events
    .filter(event => {
      // Filter by status
      const statusMatch = filter === 'all' || event.status === filter;
      
      // Filter by celebrity
      const celebrityMatch = celebrityFilter === 'all' || event.celebrity === 'Dinakshi Prayasad';
      
      return statusMatch && celebrityMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'created':
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return 0;
      }
    });

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return '#4ade80';
      case 'ongoing': return '#fbbf24';
      case 'completed': return '#6b7280';
      case 'cancelled': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getEventTypeIcon = (type) => {
    const eventType = eventTypes.find(et => et.value === type);
    return eventType ? eventType.icon : 'fa-star';
  };

  return (
    <section className="cey-events">
      <header className="cey-events__header">
        <div className="cey-events__titles">
          <h2 className="cey-events__title">Sri Lankan Celebrities Events</h2>
          <p className="cey-events__subtitle">Create, manage and promote your events with Sri Lankan celebrities</p>
        </div>
        <div className="cey-events__actions">
          <button 
            className="cey-btn cey-btn--gold" 
            onClick={() => setShowForm(!showForm)}
          >
            <i className="fa-solid fa-plus" />
          {showForm ? 'Cancel' : 'Add New Event'}
        </button>
      </div>
      </header>

      {/* Enhanced Form */}
      {showForm && (
        <div className="cey-events__form-container">
          <form className="cey-events__form" onSubmit={handleAddEvent}>
            <div className="cey-events__form-grid">
              <div className="cey-events__form-main">
                <div className="cey-field-group">
                  <label className="cey-field">
                    <span className="cey-field__label">
                      <i className="fa-solid fa-heading" />
                      Event Title
                    </span>
          <input
                      className="cey-input cey-input--enhanced"
            type="text"
            name="title"
            value={form.title}
            onChange={handleInputChange}
                      placeholder="Enter event title"
            required
          />
                  </label>

                  <label className="cey-field">
                    <span className="cey-field__label">
                      <i className="fa-solid fa-user" />
                      Celebrity Name
                    </span>
                    <input
                      className="cey-input cey-input--enhanced"
                      type="text"
                      name="celebrity"
                      value={form.celebrity}
                      onChange={handleInputChange}
                      placeholder="e.g., Dinakshi Prayasad, Hemal Ranasinghe, Kumar Sangakkara"
                      required
                    />
                  </label>

                  <label className="cey-field">
                    <span className="cey-field__label">
                      <i className="fa-solid fa-align-left" />
                      Description
                    </span>
                    <textarea
                      className="cey-input cey-input--enhanced"
                      name="description"
                      value={form.description}
                      onChange={handleInputChange}
                      placeholder="Describe your event..."
                      rows="4"
                    />
                  </label>
                </div>

                <div className="cey-field-group">
                  <div className="cey-field-row">
                    <label className="cey-field">
                      <span className="cey-field__label">
                        <i className="fa-solid fa-calendar" />
                        Date
                      </span>
          <input
                        className="cey-input cey-input--enhanced"
            type="date"
            name="date"
            value={form.date}
            onChange={handleInputChange}
            required
          />
                    </label>

                    <label className="cey-field">
                      <span className="cey-field__label">
                        <i className="fa-solid fa-clock" />
                        Time
                      </span>
          <input
                        className="cey-input cey-input--enhanced"
                        type="time"
                        name="time"
                        value={form.time}
            onChange={handleInputChange}
            required
          />
                    </label>
                  </div>

                  <div className="cey-field-row">
                    <label className="cey-field">
                      <span className="cey-field__label">
                        <i className="fa-solid fa-map-marker-alt" />
                        Venue
                      </span>
                      <input
                        className="cey-input cey-input--enhanced"
                        type="text"
                        name="venue"
                        value={form.venue}
                        onChange={handleInputChange}
                        placeholder="Enter venue name or URL"
                        required
                      />
                    </label>

                    <label className="cey-field">
                      <span className="cey-field__label">
                        <i className="fa-solid fa-globe" />
                        Venue Type
                      </span>
                      <div className="cey-select-enhanced">
                        <select
                          name="venueType"
                          value={form.venueType}
                          onChange={handleInputChange}
                        >
                          <option value="offline">Offline</option>
                          <option value="online">Online</option>
                          <option value="hybrid">Hybrid</option>
                        </select>
                        <i className="fa-solid fa-chevron-down" />
                      </div>
                    </label>
                  </div>
                </div>

                <div className="cey-field-group">
                  <label className="cey-field">
                    <span className="cey-field__label">
                      <i className="fa-solid fa-tag" />
                      Event Type
                    </span>
                    <div className="cey-select-enhanced">
                      <select
                        name="eventType"
                        value={form.eventType}
                        onChange={handleInputChange}
                      >
                        {eventTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <i className="fa-solid fa-chevron-down" />
                    </div>
                  </label>

                  <div className="cey-field-row">
                    <label className="cey-field">
                      <span className="cey-field__label">
                        <i className="fa-solid fa-ticket" />
                        Ticketing
                      </span>
                      <div className="cey-select-enhanced">
                        <select
                          name="ticketing.type"
                          value={form.ticketing.type}
                          onChange={handleInputChange}
                        >
                          <option value="free">Free</option>
                          <option value="paid">Paid</option>
                        </select>
                        <i className="fa-solid fa-chevron-down" />
                      </div>
                    </label>

                    {form.ticketing.type === 'paid' && (
                      <>
                        <label className="cey-field">
                          <span className="cey-field__label">
                            <i className="fa-solid fa-dollar-sign" />
                            Price
                          </span>
                          <input
                            className="cey-input cey-input--enhanced"
                            type="number"
                            name="ticketing.price"
                            value={form.ticketing.price}
                            onChange={handleInputChange}
                            min="0"
                            step="0.01"
                            placeholder="0.00"
                          />
                        </label>

                        <label className="cey-field">
                          <span className="cey-field__label">
                            <i className="fa-solid fa-money-bill" />
                            Currency
                          </span>
                          <div className="cey-select-enhanced">
                            <select
                              name="ticketing.currency"
                              value={form.ticketing.currency}
            onChange={handleInputChange}
                            >
                              <option value="LKR">LKR (Sri Lankan Rupee)</option>
                              <option value="USD">USD (US Dollar)</option>
                              <option value="EUR">EUR (Euro)</option>
                              <option value="GBP">GBP (British Pound)</option>
                            </select>
                            <i className="fa-solid fa-chevron-down" />
                          </div>
                        </label>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="cey-events__form-sidebar">
                <div className="cey-field">
                  <span className="cey-field__label">
                    <i className="fa-solid fa-image" />
                    Event Banner
                  </span>
                  <div className="cey-banner-upload">
                    {bannerPreview ? (
                      <div className="cey-banner-preview">
                        <img src={bannerPreview} alt="Banner preview" />
                        <button 
                          type="button" 
                          className="cey-btn cey-btn--small"
                          onClick={() => {
                            setBannerPreview(null);
                            if (fileInputRef.current) fileInputRef.current.value = '';
                          }}
                        >
                          <i className="fa-solid fa-times" />
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div 
                        className="cey-banner-drop"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <i className="fa-solid fa-cloud-upload-alt" />
                        <p>Click to upload banner</p>
                        <span>Recommended: 1200x600px</span>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleBannerUpload}
                      hidden
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="cey-events__form-actions">
              <button type="button" className="cey-btn cey-btn--outline" onClick={() => setShowForm(false)}>
                <i className="fa-solid fa-times" />
                Cancel
              </button>
              <button type="submit" className="cey-btn cey-btn--gold">
                <i className="fa-solid fa-check" />
                Create Event
              </button>
            </div>
        </form>
        </div>
      )}

      {/* Enhanced Controls */}
      <div className="cey-controls">
        <div className="cey-controls__left">
          {/* Event Type Filter Buttons */}
          <div className="cey-filter-buttons">
            <button 
              className={`cey-filter-btn ${celebrityFilter === 'all' ? 'cey-filter-btn--active' : ''}`}
              onClick={() => setCelebrityFilter('all')}
            >
              <i className="fa-solid fa-globe" />
              All Events
            </button>
            <button 
              className={`cey-filter-btn ${celebrityFilter === 'my' ? 'cey-filter-btn--active' : ''}`}
              onClick={() => setCelebrityFilter('my')}
            >
              <i className="fa-solid fa-user" />
              My Events
            </button>
          </div>
          
          {/* Status Filter */}
          <div className="cey-select-wrap">
            <i className="fa-solid fa-filter" />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          
          <div className="cey-select-wrap">
            <i className="fa-solid fa-sort" />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="date">Date</option>
              <option value="title">Title A-Z</option>
              <option value="created">Recently Created</option>
            </select>
          </div>

          <div className="cey-stats">
            <span className="cey-stat">
              <i className="fa-solid fa-calendar-days" />
              {filteredAndSortedEvents.length} events
            </span>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="cey-events__grid">
        {filteredAndSortedEvents.length === 0 ? (
          <div className="cey-empty">
            <div className="cey-empty__icon">
              <i className="fa-regular fa-calendar" />
            </div>
            <div className="cey-empty__content">
              <h3>No events found</h3>
              <p>
                {celebrityFilter === 'my' 
                  ? 'No events found for Dinakshi Prayasad' 
                  : filter !== 'all' 
                    ? 'No events match your current filter' 
                    : 'Create your first event to get started'
                }
              </p>
              {celebrityFilter === 'all' && filter === 'all' && (
                <button className="cey-btn cey-btn--gold" onClick={() => setShowForm(true)}>
                  <i className="fa-solid fa-plus" />
                  Create Event
                </button>
              )}
            </div>
          </div>
        ) : (
          filteredAndSortedEvents.map((event) => (
            <article key={event.id} className="cey-event-card">
              <div className="cey-event-card__image-container">
                <img src={event.banner} alt={event.title} />
                <div className="cey-event-card__status" style={{ backgroundColor: getStatusColor(event.status) }}>
                  {event.status}
                </div>
                <div className="cey-event-card__overlay">
                  <div className="cey-event-card__actions">
                    <button 
                      className="cey-action-btn cey-action-btn--primary"
                      onClick={() => updateEventStatus(event.id, 'ongoing')}
                      disabled={event.status === 'completed' || event.status === 'cancelled'}
                    >
                      <i className="fa-solid fa-play" />
                      Start
                    </button>
                    <button 
                      className="cey-action-btn cey-action-btn--secondary"
                      onClick={() => updateEventStatus(event.id, 'completed')}
                      disabled={event.status === 'cancelled'}
                    >
                      <i className="fa-solid fa-check" />
                      Complete
                    </button>
                    <button 
                      className="cey-action-btn cey-action-btn--danger"
                      onClick={() => updateEventStatus(event.id, 'cancelled')}
                      disabled={event.status === 'completed'}
                    >
                      <i className="fa-solid fa-times" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="cey-event-card__content">
                <div className="cey-event-card__header">
                  <div className="cey-event-card__type">
                    <i className={`fa-solid ${getEventTypeIcon(event.eventType)}`} />
                    {eventTypes.find(et => et.value === event.eventType)?.label}
                  </div>
                  <div className="cey-event-card__ticketing">
                    {event.ticketing.type === 'free' ? (
                      <span className="cey-chip cey-chip--free">Free</span>
                    ) : (
                      <span className="cey-chip cey-chip--paid">
                        {event.ticketing.currency} {event.ticketing.price}
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="cey-event-card__title">{event.title}</h3>
                {event.celebrity && (
                  <div className="cey-event-card__celebrity">
                    <i className="fa-solid fa-star" />
                    <span>{event.celebrity}</span>
                  </div>
                )}
                <p className="cey-event-card__description">{event.description}</p>
                
                <div className="cey-event-card__details">
                  <div className="cey-event-card__detail">
                    <i className="fa-solid fa-calendar" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="cey-event-card__detail">
                    <i className="fa-solid fa-clock" />
                    <span>{event.time}</span>
                  </div>
                  <div className="cey-event-card__detail">
                    <i className={event.venueType === 'online' ? 'fa-solid fa-globe' : 'fa-solid fa-map-marker-alt'} />
                    <span>{event.venue}</span>
                  </div>
                </div>
                
                <div className="cey-event-card__footer">
                  <button 
                    className="cey-btn cey-btn--small cey-btn--outline"
                    onClick={() => deleteEvent(event.id)}
                  >
                    <i className="fa-solid fa-trash" />
                    Delete
                  </button>
                </div>
                </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default CelebritiesEvents;
