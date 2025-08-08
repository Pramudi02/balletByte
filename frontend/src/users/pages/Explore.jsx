import React, { useState } from 'react';
import { FaStar, FaHeart, FaSearch, FaFilter } from 'react-icons/fa';
import './Explore.css';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const celebrities = [
    {
      id: 1,
      name: 'Taylor Swift',
      image: '/images/celebrities/taylor-swift.jpg',
      category: 'Music',
      followers: '2.5M',
      isVerified: true,
      isFavorite: false
    },
    {
      id: 2,
      name: 'Beyoncé',
      image: '/images/celebrities/beyonce.jpg',
      category: 'Music',
      followers: '3.1M',
      isVerified: true,
      isFavorite: true
    },
    {
      id: 3,
      name: 'Justin Bieber',
      image: '/images/celebrities/justin-bieber.jpg',
      category: 'Music',
      followers: '1.8M',
      isVerified: true,
      isFavorite: false
    },
    {
      id: 4,
      name: 'Ariana Grande',
      image: '/images/celebrities/ariana-grande.jpg',
      category: 'Music',
      followers: '2.2M',
      isVerified: true,
      isFavorite: true
    },
    {
      id: 5,
      name: 'Tom Hanks',
      image: '/images/celebrities/tom-hanks.jpg',
      category: 'Film',
      followers: '1.5M',
      isVerified: true,
      isFavorite: false
    },
    {
      id: 6,
      name: 'Emma Watson',
      image: '/images/celebrities/emma-watson.jpg',
      category: 'Film',
      followers: '2.8M',
      isVerified: true,
      isFavorite: false
    }
  ];

  const categories = ['all', 'music', 'film', 'sports', 'business', 'influencer'];

  const filteredCelebrities = celebrities.filter(celebrity => {
    const matchesSearch = celebrity.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === 'all' || celebrity.category.toLowerCase() === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1 className="explore-title">
          <FaStar className="title-icon" />
          Explore Celebrities
        </h1>
        <p className="explore-subtitle">
          Discover and connect with your favorite stars from around the world
        </p>
      </div>

      {/* Search and Filters */}
      <div className="explore-controls">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search celebrities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="results-info">
        <span className="results-count">
          {filteredCelebrities.length} celebrities found
        </span>
      </div>

      {/* Celebrities Grid */}
      <div className="celebrities-grid">
        {filteredCelebrities.map((celebrity) => (
          <div key={celebrity.id} className="celebrity-card">
            <div className="celebrity-image">
              <img src={celebrity.image} alt={celebrity.name} />
              <button className="favorite-button">
                <FaHeart className={celebrity.isFavorite ? 'favorited' : ''} />
              </button>
              {celebrity.isVerified && (
                <div className="verified-badge">
                  <FaStar />
                </div>
              )}
            </div>
            <div className="celebrity-info">
              <h3 className="celebrity-name">{celebrity.name}</h3>
              <p className="celebrity-category">{celebrity.category}</p>
              <p className="celebrity-followers">{celebrity.followers} followers</p>
            </div>
            <div className="celebrity-actions">
              <button className="action-button primary">Follow</button>
              <button className="action-button secondary">Message</button>
            </div>
          </div>
        ))}
      </div>

      {filteredCelebrities.length === 0 && (
        <div className="empty-state">
          <h3>No celebrities found</h3>
          <p>Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
};

export default Explore; 