import React, { useState } from 'react';
import { FaHeart, FaStar, FaComments, FaCalendarAlt, FaTrash } from 'react-icons/fa';
import './Favorites.css';

const Favorites = () => {
  const [activeTab, setActiveTab] = useState('celebrities');
  const [favorites, setFavorites] = useState({
    celebrities: [
      {
        id: 1,
        name: 'Beyoncé',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
        category: 'Music',
        followers: '3.1M',
        isVerified: true,
        lastActive: '2 hours ago'
      },
      {
        id: 2,
        name: 'Ariana Grande',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
        category: 'Music',
        followers: '2.2M',
        isVerified: true,
        lastActive: '1 day ago'
      },
      {
        id: 3,
        name: 'Lady Gaga',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
        category: 'Music',
        followers: '2.8M',
        isVerified: true,
        lastActive: '3 hours ago'
      }
    ],
    posts: [
      {
        id: 1,
        celebrity: 'Beyoncé',
        celebrityImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
        content: 'Just finished recording my new album! Can\'t wait to share it with you all. 💫',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        likes: 125000,
        comments: 8900,
        timeAgo: '2 hours ago'
      },
      {
        id: 2,
        celebrity: 'Ariana Grande',
        celebrityImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop',
        content: 'Studio session today was incredible! New music coming soon 🎵',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
        likes: 89000,
        comments: 5600,
        timeAgo: '1 day ago'
      }
    ],
    events: [
      {
        id: 1,
        title: 'Beyoncé - Renaissance World Tour',
        date: '2024-04-20',
        location: 'Staples Center, LA',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=200&fit=crop',
        status: 'upcoming'
      },
      {
        id: 2,
        title: 'Ariana Grande - Sweetener World Tour',
        date: '2024-05-15',
        location: 'Madison Square Garden, NY',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
        status: 'upcoming'
      }
    ]
  });

  const removeFavorite = (type, id) => {
    setFavorites(prev => ({
      ...prev,
      [type]: prev[type].filter(item => item.id !== id)
    }));
  };

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        {/* Header */}
        <div className="favorites-header">
          <h1 className="favorites-title">
            <FaHeart className="title-icon" />
            My Favorites
          </h1>
          <p className="favorites-subtitle">
            Your saved celebrities, posts, and events in one place
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="favorites-tabs">
          <button 
            className={`tab-button ${activeTab === 'celebrities' ? 'active' : ''}`}
            onClick={() => setActiveTab('celebrities')}
          >
            <FaStar className="tab-icon" />
            Celebrities ({favorites.celebrities.length})
          </button>
          <button 
            className={`tab-button ${activeTab === 'posts' ? 'active' : ''}`}
            onClick={() => setActiveTab('posts')}
          >
            <FaComments className="tab-icon" />
            Posts ({favorites.posts.length})
          </button>
          <button 
            className={`tab-button ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            <FaCalendarAlt className="tab-icon" />
            Events ({favorites.events.length})
          </button>
        </div>

        {/* Content */}
        <div className="favorites-content">
          {activeTab === 'celebrities' && (
            <div className="celebrities-grid">
              {favorites.celebrities.map((celebrity) => (
                <div key={celebrity.id} className="celebrity-card">
                  <div className="celebrity-image">
                    <img src={celebrity.image} alt={celebrity.name} />
                    {celebrity.isVerified && (
                      <div className="verified-badge">
                        <FaStar />
                      </div>
                    )}
                    <button 
                      className="remove-button"
                      onClick={() => removeFavorite('celebrities', celebrity.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <div className="celebrity-info">
                    <h3 className="celebrity-name">{celebrity.name}</h3>
                    <p className="celebrity-category">{celebrity.category}</p>
                    <p className="celebrity-followers">{celebrity.followers} followers</p>
                    <p className="celebrity-last-active">Last active: {celebrity.lastActive}</p>
                  </div>
                  <div className="celebrity-actions">
                    <button className="action-button primary">Message</button>
                    <button className="action-button secondary">View Profile</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="posts-grid">
              {favorites.posts.map((post) => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <div className="post-author">
                      <img src={post.celebrityImage} alt={post.celebrity} className="author-image" />
                      <div className="author-info">
                        <h4 className="author-name">{post.celebrity}</h4>
                        <span className="post-time">{post.timeAgo}</span>
                      </div>
                    </div>
                    <button 
                      className="remove-button"
                      onClick={() => removeFavorite('posts', post.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <div className="post-content">
                    <p>{post.content}</p>
                    {post.image && (
                      <img src={post.image} alt="Post" className="post-image" />
                    )}
                  </div>
                  <div className="post-stats">
                    <span className="stat-item">
                      <FaHeart className="stat-icon" />
                      {post.likes.toLocaleString()}
                    </span>
                    <span className="stat-item">
                      <FaComments className="stat-icon" />
                      {post.comments.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'events' && (
            <div className="events-grid">
              {favorites.events.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <div className="event-date">
                      <span className="date-day">20</span>
                      <span className="date-month">APR</span>
                    </div>
                    <button 
                      className="remove-button"
                      onClick={() => removeFavorite('events', event.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <div className="event-info">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-location">{event.location}</p>
                    <div className="event-actions">
                      <button className="event-button primary">Get Tickets</button>
                      <button className="event-button secondary">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {favorites[activeTab].length === 0 && (
            <div className="empty-state">
              <FaHeart className="empty-icon" />
              <h3>No {activeTab} saved yet</h3>
              <p>Start exploring and save your favorite {activeTab} to see them here!</p>
              <button className="empty-state-button">Explore {activeTab}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites; 