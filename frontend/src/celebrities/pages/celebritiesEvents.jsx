import React, { useState } from 'react';
import './celebritiesEvents.css'

const CelebritiesEvents = () => {
  const [events, setEvents] = useState([
    {
      title: 'Charity Gala Night',
      date: '2025-09-15',
      location: 'Grand Ballroom, City Hotel',
      description: 'A glamorous evening to support local charities.'
    },
    {
      title: 'Meet & Greet',
      date: '2025-10-01',
      location: 'Downtown Studio',
      description: 'Exclusive fan meet-up and Q&A session.'
    }
  ]);
  const [form, setForm] = useState({ title: '', date: '', location: '', description: '' });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (form.title && form.date && form.location) {
      setEvents([
        { ...form },
        ...events
      ]);
      setForm({ title: '', date: '', location: '', description: '' });
      setShowForm(false);
    }
  };

  return (
    <section className="cey-events-gold-page">
      <div className="cey-events-gold-header">
        <h2 className="cey-events-gold-title">🎉 Celebrity Events</h2>
        <button className="cey-events-gold-add-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add New Event'}
        </button>
      </div>

      {showForm && (
        <form className="cey-events-gold-form" onSubmit={handleAddEvent}>
          <input
            className="cey-events-gold-input"
            type="text"
            name="title"
            placeholder="Event Title"
            value={form.title}
            onChange={handleInputChange}
            required
          />
          <input
            className="cey-events-gold-input"
            type="date"
            name="date"
            value={form.date}
            onChange={handleInputChange}
            required
          />
          <input
            className="cey-events-gold-input"
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleInputChange}
            required
          />
          <textarea
            className="cey-events-gold-input cey-events-gold-textarea"
            name="description"
            placeholder="Description (optional)"
            value={form.description}
            onChange={handleInputChange}
          />
          <button className="cey-events-gold-submit" type="submit">Add Event</button>
        </form>
      )}

      <div className="cey-events-gold-list">
        <h3 className="cey-events-gold-subtitle">Upcoming Events</h3>
        {events.length === 0 ? (
          <p className="cey-events-gold-empty">No events yet. Add your first event!</p>
        ) : (
          <ul className="cey-events-gold-ul">
            {events.map((event, idx) => (
              <li className="cey-events-gold-item" key={idx}>
                <div className="cey-events-gold-item-header">
                  <span className="cey-events-gold-item-title">{event.title}</span>
                  <span className="cey-events-gold-item-date">{event.date}</span>
                </div>
                <div className="cey-events-gold-item-location">📍 {event.location}</div>
                {event.description && <div className="cey-events-gold-item-desc">{event.description}</div>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CelebritiesEvents;
