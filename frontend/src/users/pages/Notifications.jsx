import React, { useState } from 'react';
import { FaBell, FaHeart, FaComments, FaCalendarAlt, FaStar, FaCheck } from 'react-icons/fa';
import './Notifications.css';

const Notifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [notifications] = useState([
    {
      id: 1,
      type: 'like',
      celebrity: 'Beyoncé',
      celebrityImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
      message: 'liked your comment',
      time: '2 hours ago',
      isRead: false,
      isVerified: true
    },
    {
      id: 2,
      type: 'event',
      celebrity: 'Taylor Swift',
      celebrityImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop',
      message: 'announced a new event: The Eras Tour',
      time: '5 hours ago',
      isRead: false,
      isVerified: true
    },
    {
      id: 3,
      type: 'reply',
      celebrity: 'Justin Bieber',
      celebrityImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
      message: 'replied to your comment',
      time: '1 day ago',
      isRead: true,
      isVerified: true
    },
    {
      id: 4,
      type: 'message',
      celebrity: 'Ariana Grande',
      celebrityImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop',
      message: 'sent you a message',
      time: '2 days ago',
      isRead: true,
      isVerified: true
    },
    {
      id: 5,
      type: 'event',
      celebrity: 'Lady Gaga',
      celebrityImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
      message: 'updated event details for Chromatica Ball',
      time: '3 days ago',
      isRead: true,
      isVerified: true
    }
  ]);

  const filters = [
    { id: 'all', label: 'All', icon: FaBell },
    { id: 'like', label: 'Likes', icon: FaHeart },
    { id: 'reply', label: 'Replies', icon: FaComments },
    { id: 'event', label: 'Events', icon: FaCalendarAlt }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'like':
        return <FaHeart className="notification-icon like" />;
      case 'reply':
        return <FaComments className="notification-icon reply" />;
      case 'event':
        return <FaCalendarAlt className="notification-icon event" />;
      case 'message':
        return <FaComments className="notification-icon message" />;
      default:
        return <FaBell className="notification-icon" />;
    }
  };

  const filteredNotifications = activeFilter === 'all' 
    ? notifications 
    : notifications.filter(notification => notification.type === activeFilter);

  const markAsRead = (id) => {
    // In a real app, this would update the backend
    console.log('Marking notification as read:', id);
  };

  const markAllAsRead = () => {
    // In a real app, this would update all notifications
    console.log('Marking all notifications as read');
  };

  return (
    <div className="notifications-page">
      <div className="notifications-container">
        {/* Header */}
        <div className="notifications-header">
          <h1 className="notifications-title">
            <FaBell className="title-icon" />
            Notifications
          </h1>
          <button className="mark-all-read" onClick={markAllAsRead}>
            Mark all as read
          </button>
        </div>

        {/* Filters */}
        <div className="notifications-filters">
          {filters.map(filter => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.id}
                className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <IconComponent className="filter-icon" />
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Notifications List */}
        <div className="notifications-list">
          {filteredNotifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`notification-item ${!notification.isRead ? 'unread' : ''}`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="notification-avatar">
                <img src={notification.celebrityImage} alt={notification.celebrity} />
                {notification.isVerified && <FaStar className="verified-badge" />}
              </div>
              
              <div className="notification-content">
                <div className="notification-header">
                  <h3 className="notification-celebrity">{notification.celebrity}</h3>
                  <span className="notification-time">{notification.time}</span>
                </div>
                
                <div className="notification-message">
                  {getNotificationIcon(notification.type)}
                  <p>{notification.message}</p>
                </div>
              </div>
              
              <div className="notification-actions">
                {!notification.isRead && (
                  <div className="unread-indicator"></div>
                )}
                <button className="mark-read-button">
                  <FaCheck />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <div className="empty-state">
            <FaBell className="empty-icon" />
            <h3>No notifications</h3>
            <p>You're all caught up! Check back later for new updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications; 