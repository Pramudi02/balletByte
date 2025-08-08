import React, { useState } from 'react';
import { FaComments, FaPaperPlane, FaEllipsisV, FaStar } from 'react-icons/fa';
import './Chat.css';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [chats] = useState([
    {
      id: 1,
      celebrity: 'Beyoncé',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
      lastMessage: 'Thank you for your support! 💫',
      time: '2 hours ago',
      unread: 2,
      isVerified: true,
      isOnline: true
    },
    {
      id: 2,
      celebrity: 'Taylor Swift',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop',
      lastMessage: 'New album dropping soon! 🎵',
      time: '1 day ago',
      unread: 0,
      isVerified: true,
      isOnline: false
    },
    {
      id: 3,
      celebrity: 'Justin Bieber',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
      lastMessage: 'See you at the concert!',
      time: '3 days ago',
      unread: 1,
      isVerified: true,
      isOnline: true
    }
  ]);

  const [messages] = useState({
    1: [
      { id: 1, text: 'Hi Beyoncé! I love your music so much!', sender: 'user', time: '2 hours ago' },
      { id: 2, text: 'Thank you for your support! 💫', sender: 'celebrity', time: '2 hours ago' },
      { id: 3, text: 'Will you be performing in LA soon?', sender: 'user', time: '1 hour ago' },
      { id: 4, text: 'Yes! Check my tour dates for LA shows.', sender: 'celebrity', time: '30 min ago' }
    ]
  });

  const sendMessage = () => {
    if (message.trim() && selectedChat) {
      // In a real app, this would send the message to the backend
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        {/* Chat List */}
        <div className="chat-list">
          <div className="chat-header">
            <h2 className="chat-title">
              <FaComments className="title-icon" />
              Messages
            </h2>
          </div>
          
          <div className="chat-conversations">
            {chats.map((chat) => (
              <div 
                key={chat.id} 
                className={`chat-item ${selectedChat?.id === chat.id ? 'active' : ''}`}
                onClick={() => setSelectedChat(chat)}
              >
                <div className="chat-avatar">
                  <img src={chat.image} alt={chat.celebrity} />
                  {chat.isOnline && <div className="online-indicator"></div>}
                </div>
                
                <div className="chat-info">
                  <div className="chat-header-info">
                    <h3 className="chat-name">
                      {chat.celebrity}
                      {chat.isVerified && <FaStar className="verified-icon" />}
                    </h3>
                    <span className="chat-time">{chat.time}</span>
                  </div>
                  
                  <div className="chat-preview">
                    <p className="chat-last-message">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <span className="unread-badge">{chat.unread}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          {selectedChat ? (
            <>
              <div className="messages-header">
                <div className="selected-chat-info">
                  <img src={selectedChat.image} alt={selectedChat.celebrity} />
                  <div className="chat-details">
                    <h3 className="chat-name">
                      {selectedChat.celebrity}
                      {selectedChat.isVerified && <FaStar className="verified-icon" />}
                    </h3>
                    <span className="chat-status">
                      {selectedChat.isOnline ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
                <button className="chat-options">
                  <FaEllipsisV />
                </button>
              </div>

              <div className="messages-container">
                {messages[selectedChat.id]?.map((msg) => (
                  <div key={msg.id} className={`message ${msg.sender}`}>
                    <div className="message-content">
                      <p>{msg.text}</p>
                      <span className="message-time">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="message-input">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button 
                  className="send-button"
                  onClick={sendMessage}
                  disabled={!message.trim()}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </>
          ) : (
            <div className="no-chat-selected">
              <FaComments className="no-chat-icon" />
              <h3>Select a conversation</h3>
              <p>Choose a celebrity to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat; 