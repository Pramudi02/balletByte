import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt, FaHeart, FaShare } from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [events] = useState([
    {
      id: 1,
      title: 'Taylor Swift - The Eras Tour',
      date: '2024-03-15',
      time: '8:00 PM',
      location: 'Madison Square Garden, NY',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      category: 'Music',
      price: '$150-500',
      isFavorite: true,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Beyoncé - Renaissance World Tour',
      date: '2024-04-20',
      time: '7:30 PM',
      location: 'Staples Center, LA',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
      category: 'Music',
      price: '$200-800',
      isFavorite: false,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Justin Bieber - Justice World Tour',
      date: '2024-05-10',
      time: '8:30 PM',
      location: 'MetLife Stadium, NJ',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      category: 'Music',
      price: '$120-400',
      isFavorite: true,
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Ariana Grande - Sweetener World Tour',
      date: '2024-06-05',
      time: '7:00 PM',
      location: 'SoFi Stadium, LA',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop',
      category: 'Music',
      price: '$180-600',
      isFavorite: false,
      status: 'upcoming'
    }
  ]);

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'music', label: 'Music' },
    { id: 'comedy', label: 'Comedy' },
    { id: 'sports', label: 'Sports' },
    { id: 'theater', label: 'Theater' }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category.toLowerCase() === activeFilter);

  return (
    <div className="events-page">
      <div className="events-container">
        {/* Header */}
        <div className="events-header">
          <h1 className="events-title">
            <FaCalendarAlt className="title-icon" />
            Upcoming Events
          </h1>
          <p className="events-subtitle">
            Discover and book tickets for the latest celebrity events and concerts
          </p>
        </div>

        {/* Filters */}
        <div className="events-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-overlay">
                  <button className="favorite-button">
                    <FaHeart className={event.isFavorite ? 'favorited' : ''} />
                  </button>
                  <button className="share-button">
                    <FaShare />
                  </button>
                </div>
                <div className="event-date">
                  <span className="date-day">15</span>
                  <span className="date-month">MAR</span>
                </div>
              </div>
              
              <div className="event-info">
                <div className="event-header">
                  <h3 className="event-title">{event.title}</h3>
                  <span className="event-category">{event.category}</span>
                </div>
                
                <div className="event-details">
                  <div className="detail-item">
                    <FaCalendarAlt className="detail-icon" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <div className="detail-item">
                    <FaMapMarkerAlt className="detail-icon" />
                    <span>{event.location}</span>
                  </div>
                  <div className="detail-item">
                    <FaTicketAlt className="detail-icon" />
                    <span>{event.price}</span>
                  </div>
                </div>
                
                <div className="event-actions">
                  <button className="action-button primary">Get Tickets</button>
                  <button className="action-button secondary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="empty-state">
            <FaCalendarAlt className="empty-icon" />
            <h3>No events found</h3>
            <p>Try adjusting your filters or check back later for new events!</p>
            <button className="empty-state-button">View All Events</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events; 