import React, { useState } from 'react';
import { FaStar, FaHeart, FaSearch, FaFilter, FaMusic, FaFilm, FaTrophy, FaUserTie, FaInstagram } from 'react-icons/fa';
import './Explore.css';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const celebrities = [
    {
      id: 1,
      name: 'Dinakshi Prayasad',
      image: 'https://i.pinimg.com/736x/5e/96/d9/5e96d951e3097e9fa49c7d3da2b8ef99.jpg',
      category: 'Film & Television',
      followers: '850K',
      isVerified: true,
      isFavorite: false,
      description: 'Award-winning Sri Lankan actress known for her versatile performances in cinema and television.',
      rating: 4.8,
      price: 'From $2,500',
      availability: 'Available for events',
      specialties: ['Film', 'Television', 'Brand Endorsements', 'Corporate Events']
    },
    {
      id: 2,
      name: 'Hemal Ranasinghe',
      image: 'https://i.pinimg.com/736x/a0/0c/58/a00c5880737dcc85915e08fdddf86de2.jpg',
      category: 'Film & Television',
      followers: '1.2M',
      isVerified: true,
      isFavorite: true,
      description: 'Renowned Sri Lankan actor and director with extensive experience in the entertainment industry.',
      rating: 4.9,
      price: 'From $3,000',
      availability: 'Available for events',
      specialties: ['Acting', 'Directing', 'Film Production', 'Corporate Events']
    },
    {
      id: 3,
      name: 'Kumar Sangakkara',
      image: 'https://i.pinimg.com/1200x/9b/0d/77/9b0d7728bb62a423c155bf5bf060270f.jpg',
      category: 'Sports',
      followers: '5.2M',
      isVerified: true,
      isFavorite: false,
      description: 'Legendary Sri Lankan cricketer and former captain, ICC Hall of Famer and cricket commentator.',
      rating: 5.0,
      price: 'From $8,000',
      availability: 'Limited availability',
      specialties: ['Cricket', 'Sports Events', 'Corporate Speaking', 'Brand Endorsements']
    },
    {
      id: 4,
      name: 'Saranga Disasekara',
      image: 'https://lakwimana.com/images/Personalized-Video-Message-from-Saranga-Disasekara.jpg',
      category: 'Film & Television',
      followers: '680K',
      isVerified: true,
      isFavorite: false,
      description: 'Popular Sri Lankan actor and television personality known for his charismatic screen presence.',
      rating: 4.7,
      price: 'From $2,000',
      availability: 'Available for events',
      specialties: ['Acting', 'Television', 'Personal Appearances', 'Corporate Events']
    },
    {
      id: 5,
      name: 'Sarith & Surith',
      image: 'https://yt3.googleusercontent.com/cGqJb_2FSsTFYR1OvEy2yH70aXNq1BQTrkArBVH9OIct4rgOnzoilyt7ZSDkI2LJEQnMomhbaA=s900-c-k-c0x00ffffff-no-rj',
      category: 'Music',
      followers: '2.1M',
      isVerified: true,
      isFavorite: true,
      description: 'Dynamic Sri Lankan musical duo known for their innovative fusion of traditional and contemporary music.',
      rating: 4.9,
      price: 'From $4,500',
      availability: 'Available for events',
      specialties: ['Live Music', 'Concerts', 'Weddings', 'Corporate Events', 'Music Production']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: <FaStar /> },
    { id: 'music', name: 'Music', icon: <FaMusic /> },
    { id: 'film', name: 'Film & TV', icon: <FaFilm /> },
    { id: 'sports', name: 'Sports', icon: <FaTrophy /> },
    { id: 'business', name: 'Business', icon: <FaUserTie /> },
    { id: 'influencer', name: 'Influencers', icon: <FaInstagram /> }
  ];

  const filteredCelebrities = celebrities.filter(celebrity => {
    const matchesSearch = celebrity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         celebrity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         celebrity.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = activeTab === 'all' || celebrity.category.toLowerCase().includes(activeTab);
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (celebrityId) => {
    // In a real app, this would update the backend
    console.log('Toggling favorite for celebrity:', celebrityId);
  };

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1 className="explore-title">
          <FaStar className="title-icon" />
          Discover Sri Lankan Talent
        </h1>
        <p className="explore-subtitle">
          Connect with the finest celebrities, artists, and personalities from Sri Lanka for your next event
        </p>
      </div>

      {/* Search and Filters */}
      <div className="explore-controls">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search celebrities, categories, or specialties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="results-info">
        <span className="results-count">
          {filteredCelebrities.length} celebrities found
        </span>
        {searchTerm && (
          <span className="search-term">
            for "{searchTerm}"
          </span>
        )}
      </div>

      {/* Celebrities Grid */}
      <div className="celebrities-grid">
        {filteredCelebrities.map((celebrity) => (
          <div key={celebrity.id} className="celebrity-card">
            <div className="celebrity-image">
              <img src={celebrity.image} alt={celebrity.name} />
              <button 
                className={`favorite-button ${celebrity.isFavorite ? 'favorited' : ''}`}
                onClick={() => toggleFavorite(celebrity.id)}
              >
                <FaHeart className={celebrity.isFavorite ? 'favorited' : ''} />
              </button>
              {celebrity.isVerified && (
                <div className="verified-badge">
                  <FaStar />
                </div>
              )}
              <div className="celebrity-rating">
                <FaStar />
                <span>{celebrity.rating}</span>
              </div>
            </div>
            
            <div className="celebrity-info">
              <h3 className="celebrity-name">{celebrity.name}</h3>
              <p className="celebrity-category">{celebrity.category}</p>
              <p className="celebrity-description">{celebrity.description}</p>
              <p className="celebrity-followers">{celebrity.followers} followers</p>
              
              <div className="celebrity-specialties">
                {celebrity.specialties.slice(0, 3).map((specialty, index) => (
                  <span key={index} className="specialty-tag">
                    {specialty}
                  </span>
                ))}
                {celebrity.specialties.length > 3 && (
                  <span className="specialty-tag more">
                    +{celebrity.specialties.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="celebrity-pricing">
                <span className="price">{celebrity.price}</span>
                <span className="availability">{celebrity.availability}</span>
              </div>
            </div>
            
            <div className="celebrity-actions">
              <button className="action-button primary">
                <FaStar />
                Book Now
              </button>
              <button className="action-button secondary">
                <FaSearch />
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCelebrities.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">
            <FaSearch />
          </div>
          <h3>No celebrities found</h3>
          <p>Try adjusting your search terms or browse all categories</p>
          <button 
            className="empty-state-button"
            onClick={() => {
              setActiveTab('all');
              setSearchTerm('');
            }}
          >
            Browse All Celebrities
          </button>
        </div>
      )}

      {/* Featured Categories Section */}
      <div className="featured-categories">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {categories.slice(1).map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon-large">
                {category.icon}
              </div>
              <h3>{category.name}</h3>
              <p>Discover amazing talent in {category.name.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore; 