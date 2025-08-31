import React, { useState, useRef, useEffect } from 'react';
import './celebritiesChat.css';

const CelebritiesChat = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [chatType, setChatType] = useState('one-to-one'); // 'one-to-one' or 'group'
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Sample data
  const [chats, setChats] = useState([
    {
      id: 1,
      type: 'one-to-one',
      name: 'Dinakshi Prayasad',
      avatar: 'https://i.pinimg.com/736x/5e/96/d9/5e96d951e3097e9fa49c7d3da2b8ef99.jpg',
      lastMessage: 'Thank you for the amazing fashion show!',
      lastMessageTime: '2 min ago',
      unreadCount: 3,
      status: 'online',
      messages: [
        {
          id: 1,
          sender: 'fan',
          text: 'Hi! I loved your latest fashion collection!',
          time: '10:30 AM',
          status: 'seen',
          type: 'text'
        },
        {
          id: 2,
          sender: 'celebrity',
          text: 'Thank you so much! I\'m glad you enjoyed it 😊',
          time: '10:32 AM',
          status: 'seen',
          type: 'text'
        },
        {
          id: 3,
          sender: 'fan',
          text: 'Thank you for the amazing fashion show!',
          time: '10:35 AM',
          status: 'delivered',
          type: 'text'
        }
      ]
    },
    {
      id: 2,
      type: 'one-to-one',
      name: 'Hemal Ranasinghe',
      avatar: 'https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Factor%2F8590814%2Fphoto%2F65e6899bf04ff.jpg&w=640&q=75',
      lastMessage: 'Can\'t wait for your next movie!',
      lastMessageTime: '1 hour ago',
      unreadCount: 0,
      status: 'offline',
      messages: [
        {
          id: 1,
          sender: 'fan',
          text: 'Can\'t wait for your next movie!',
          time: '9:15 AM',
          status: 'seen',
          type: 'text'
        }
      ]
    },
    {
      id: 3,
      type: 'group',
      name: 'Sri Lankan Cinema Fan Club',
      avatar: 'https://i.pinimg.com/1200x/9b/0d/77/9b0d7728bb62a423c155bf5bf060270f.jpg',
      lastMessage: 'Welcome everyone to today\'s Q&A session!',
      lastMessageTime: '5 min ago',
      unreadCount: 12,
      status: 'live',
      participants: 156,
      messages: [
        {
          id: 1,
          sender: 'celebrity',
          text: 'Welcome everyone to today\'s Q&A session! 🎉',
          time: '10:00 AM',
          status: 'seen',
          type: 'text',
          pinned: true
        },
        {
          id: 2,
          sender: 'fan',
          text: 'Hi! So excited to be here!',
          time: '10:01 AM',
          status: 'seen',
          type: 'text',
          senderName: 'Emma'
        },
        {
          id: 3,
          sender: 'fan',
          text: 'Love your work! ❤️',
          time: '10:02 AM',
          status: 'seen',
          type: 'text',
          senderName: 'Alex'
        }
      ]
    }
  ]);

  const [pendingRequests, setPendingRequests] = useState([
    {
      id: 1,
      name: 'Kumara Silva',
      avatar: 'https://i.pinimg.com/736x/5e/96/d9/5e96d951e3097e9fa49c7d3da2b8ef99.jpg',
      message: 'Hi! I\'m a huge fan and would love to chat with you.',
      time: '5 min ago'
    },
    {
      id: 2,
      name: 'Nimali Perera',
      avatar: 'https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Factor%2F8590814%2Fphoto%2F65e6899bf04ff.jpg&w=640&q=75',
      message: 'Hello! I have some questions about your upcoming project.',
      time: '15 min ago'
    }
  ]);

  const emojis = ['😊', '❤️', '🎉', '🔥', '👏', '💯', '✨', '🎵', '📸', '🌟'];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat]);

  const handleSendMessage = () => {
    if (!message.trim() || !activeChat) return;

    const newMessage = {
      id: Date.now(),
      sender: 'celebrity',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
      type: 'text'
    };

    setChats(prev => prev.map(chat => 
      chat.id === activeChat.id 
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    ));

    setMessage('');
    setIsTyping(false);

    // Simulate message delivery
    setTimeout(() => {
      setChats(prev => prev.map(chat => 
        chat.id === activeChat.id 
          ? { 
              ...chat, 
              messages: chat.messages.map(msg => 
                msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
              )
            }
          : chat
      ));
    }, 1000);

    // Simulate message seen
    setTimeout(() => {
      setChats(prev => prev.map(chat => 
        chat.id === activeChat.id 
          ? { 
              ...chat, 
              messages: chat.messages.map(msg => 
                msg.id === newMessage.id ? { ...msg, status: 'seen' } : msg
              )
            }
          : chat
      ));
    }, 2000);
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    if (!isTyping) {
      setIsTyping(true);
    }
  };

  const addEmoji = (emoji) => {
    setMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && activeChat) {
      const newMessage = {
        id: Date.now(),
        sender: 'celebrity',
        text: file.name,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent',
        type: file.type.startsWith('image/') ? 'image' : 'file',
        file: URL.createObjectURL(file)
      };

      setChats(prev => prev.map(chat => 
        chat.id === activeChat.id 
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      ));

      setShowFileUpload(false);
    }
  };

  const acceptChatRequest = (requestId) => {
    const request = pendingRequests.find(r => r.id === requestId);
    if (request) {
      const newChat = {
        id: Date.now(),
        type: 'one-to-one',
        name: request.name,
        avatar: request.avatar,
        lastMessage: request.message,
        lastMessageTime: 'Just now',
        unreadCount: 0,
        status: 'online',
        messages: [
          {
            id: 1,
            sender: 'fan',
            text: request.message,
            time: request.time,
            status: 'seen',
            type: 'text'
          }
        ]
      };

      setChats(prev => [newChat, ...prev]);
      setPendingRequests(prev => prev.filter(r => r.id !== requestId));
      setActiveChat(newChat);
    }
  };

  const declineChatRequest = (requestId) => {
    setPendingRequests(prev => prev.filter(r => r.id !== requestId));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return '#4ade80';
      case 'offline': return '#6b7280';
      case 'live': return '#fbbf24';
      default: return '#6b7280';
    }
  };

  const getMessageStatusIcon = (status) => {
    switch (status) {
      case 'sent': return 'fa-check';
      case 'delivered': return 'fa-check-double';
      case 'seen': return 'fa-check-double';
      default: return 'fa-clock';
    }
  };

  return (
    <section className="celebrities-chat-container">
      <header className="celebrities-chat-header">
        <div className="celebrities-chat-titles">
          <h2 className="celebrities-chat-title">Celebrities Chat</h2>
          <p className="celebrities-chat-subtitle">Connect with your fans in real-time</p>
        </div>
        <div className="celebrities-chat-actions">
          <div className="celebrities-chat-type-toggle">
            <button 
              className={`celebrities-chat-toggle-btn ${chatType === 'one-to-one' ? 'active' : ''}`}
              onClick={() => setChatType('one-to-one')}
            >
              <i className="fa-solid fa-user" />
              One-to-One
            </button>
            <button 
              className={`celebrities-chat-toggle-btn ${chatType === 'group' ? 'active' : ''}`}
              onClick={() => setChatType('group')}
            >
              <i className="fa-solid fa-users" />
              Group Chat
            </button>
          </div>
        </div>
      </header>

      <div className="celebrities-chat-main-container">
        {/* Chat List Sidebar */}
        <div className="celebrities-chat-sidebar">
          {/* Pending Requests */}
          {pendingRequests.length > 0 && (
            <div className="celebrities-chat-section">
              <h3 className="celebrities-chat-section-title">
                <i className="fa-solid fa-clock" />
                Pending Requests ({pendingRequests.length})
              </h3>
              <div className="celebrities-chat-requests">
                {pendingRequests.map(request => (
                  <div key={request.id} className="celebrities-chat-request">
                    <div className="celebrities-chat-request-avatar">
                      <img src={request.avatar} alt={request.name} />
                    </div>
                    <div className="celebrities-chat-request-content">
                      <h4 className="celebrities-chat-request-name">{request.name}</h4>
                      <p className="celebrities-chat-request-message">{request.message}</p>
                      <span className="celebrities-chat-request-time">{request.time}</span>
                    </div>
                    <div className="celebrities-chat-request-actions">
                      <button 
                        className="celebrities-chat-btn-accept"
                        onClick={() => acceptChatRequest(request.id)}
                      >
                        <i className="fa-solid fa-check" />
                      </button>
                      <button 
                        className="celebrities-chat-btn-decline"
                        onClick={() => declineChatRequest(request.id)}
                      >
                        <i className="fa-solid fa-times" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat List */}
          <div className="celebrities-chat-section">
            <h3 className="celebrities-chat-section-title">
              <i className="fa-solid fa-comments" />
              {chatType === 'one-to-one' ? 'Individual Chats' : 'Group Chats'}
            </h3>
            <div className="celebrities-chat-list">
              {chats
                .filter(chat => chat.type === chatType)
                .map(chat => (
                  <div 
                    key={chat.id} 
                    className={`celebrities-chat-item ${activeChat?.id === chat.id ? 'active' : ''}`}
                    onClick={() => setActiveChat(chat)}
                  >
                    <div className="celebrities-chat-item-avatar">
                      <img src={chat.avatar} alt={chat.name} />
                      <div 
                        className="celebrities-chat-item-status"
                        style={{ backgroundColor: getStatusColor(chat.status) }}
                      />
                    </div>
                    <div className="celebrities-chat-item-content">
                      <div className="celebrities-chat-item-header">
                        <h4 className="celebrities-chat-item-name">{chat.name}</h4>
                        <span className="celebrities-chat-item-time">{chat.lastMessageTime}</span>
                      </div>
                      <p className="celebrities-chat-item-message">{chat.lastMessage}</p>
                      {chat.participants && (
                        <span className="celebrities-chat-item-participants">
                          {chat.participants} participants
                        </span>
                      )}
                    </div>
                    {chat.unreadCount > 0 && (
                      <div className="celebrities-chat-item-badge">{chat.unreadCount}</div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Chat Main Area */}
        <div className="celebrities-chat-main">
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div className="celebrities-chat-main-header">
                <div className="celebrities-chat-main-user">
                  <div className="celebrities-chat-main-avatar">
                    <img src={activeChat.avatar} alt={activeChat.name} />
                    <div 
                      className="celebrities-chat-main-status"
                      style={{ backgroundColor: getStatusColor(activeChat.status) }}
                    />
                  </div>
                  <div className="celebrities-chat-main-info">
                    <h3 className="celebrities-chat-main-name">{activeChat.name}</h3>
                    <span className="celebrities-chat-main-status-text">
                      {activeChat.status === 'live' ? 'Live Now' : 
                       activeChat.status === 'online' ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
                <div className="celebrities-chat-main-actions">
                  <button className="celebrities-chat-btn-icon">
                    <i className="fa-solid fa-phone" />
                  </button>
                  <button className="celebrities-chat-btn-icon">
                    <i className="fa-solid fa-video" />
                  </button>
                  <button 
                    className="celebrities-chat-btn-icon"
                    onClick={() => setShowProfilePanel(!showProfilePanel)}
                  >
                    <i className="fa-solid fa-ellipsis-v" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="cey-chat__messages">
                {activeChat.messages.map(msg => (
                  <div 
                    key={msg.id} 
                    className={`cey-message ${msg.sender === 'celebrity' ? 'cey-message--own' : 'cey-message--other'} ${msg.pinned ? 'cey-message--pinned' : ''}`}
                  >
                    {msg.pinned && (
                      <div className="cey-message__pin">
                        <i className="fa-solid fa-thumbtack" />
                        Pinned Message
                      </div>
                    )}
                    <div className="cey-message__content">
                      {msg.sender === 'fan' && msg.senderName && (
                        <span className="cey-message__sender">{msg.senderName}</span>
                      )}
                      {msg.type === 'text' && (
                        <div className="cey-message__text">{msg.text}</div>
                      )}
                      {msg.type === 'image' && (
                        <div className="cey-message__image">
                          <img src={msg.file} alt="Shared image" />
                        </div>
                      )}
                      {msg.type === 'file' && (
                        <div className="cey-message__file">
                          <i className="fa-solid fa-file" />
                          <span>{msg.text}</span>
                        </div>
                      )}
                      <div className="cey-message__meta">
                        <span className="cey-message__time">{msg.time}</span>
                        {msg.sender === 'celebrity' && (
                          <i className={`fa-solid ${getMessageStatusIcon(msg.status)}`} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="cey-message cey-message--other">
                    <div className="cey-message__content">
                      <div className="cey-message__typing">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="cey-chat__input">
                <div className="cey-chat__input-actions">
                  <button 
                    className="cey-btn cey-btn--icon"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  >
                    <i className="fa-solid fa-smile" />
                  </button>
                  <button 
                    className="cey-btn cey-btn--icon"
                    onClick={() => setShowFileUpload(!showFileUpload)}
                  >
                    <i className="fa-solid fa-paperclip" />
                  </button>
                  <button className="cey-btn cey-btn--icon">
                    <i className="fa-solid fa-microphone" />
                  </button>
                </div>
                
                <div className="cey-chat__input-main">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={handleTyping}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="cey-chat__input-field"
                  />
                  <button 
                    className="cey-btn cey-btn--send"
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                  >
                    <i className="fa-solid fa-paper-plane" />
                  </button>
                </div>

                {/* Emoji Picker */}
                {showEmojiPicker && (
                  <div className="cey-chat__emoji-picker">
                    {emojis.map(emoji => (
                      <button
                        key={emoji}
                        className="cey-chat__emoji"
                        onClick={() => addEmoji(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}

                {/* File Upload */}
                {showFileUpload && (
                  <div className="cey-chat__file-upload">
                    <button 
                      className="cey-btn cey-btn--upload"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <i className="fa-solid fa-image" />
                      Upload Image
                    </button>
                    <button className="cey-btn cey-btn--upload">
                      <i className="fa-solid fa-file" />
                      Upload File
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      hidden
                    />
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="cey-chat__empty">
              <div className="cey-chat__empty-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <h3>Select a chat to start messaging</h3>
              <p>Choose from your individual chats or group conversations</p>
            </div>
          )}

          {/* Profile Panel */}
          {showProfilePanel && activeChat && (
            <div className="cey-chat__profile-panel">
              <div className="cey-chat__profile-header">
                <h3>Profile Details</h3>
                <button 
                  className="cey-btn cey-btn--icon"
                  onClick={() => setShowProfilePanel(false)}
                >
                  <i className="fa-solid fa-times" />
                </button>
              </div>
              
              <div className="cey-chat__profile-content">
                <div className="cey-chat__profile-avatar-section">
                  <div className="cey-chat__profile-avatar">
                    <img src={activeChat.avatar} alt={activeChat.name} />
                    <div 
                      className="cey-chat__profile-status"
                      style={{ backgroundColor: getStatusColor(activeChat.status) }}
                    />
                  </div>
                  <div className="cey-chat__profile-info">
                    <h4 className="cey-chat__profile-name">{activeChat.name}</h4>
                    <p className="cey-chat__profile-status-text">
                      {activeChat.status === 'live' ? 'Live Now' : 
                       activeChat.status === 'online' ? 'Online' : 'Offline'}
                    </p>
                    {activeChat.participants && (
                      <p className="cey-chat__profile-participants">
                        {activeChat.participants} participants
                      </p>
                    )}
                  </div>
                </div>

                <div className="cey-chat__profile-actions">
                  <button className="cey-btn cey-btn--profile-action">
                    <i className="fa-solid fa-phone" />
                    Voice Call
                  </button>
                  <button className="cey-btn cey-btn--profile-action">
                    <i className="fa-solid fa-video" />
                    Video Call
                  </button>
                  <button className="cey-btn cey-btn--profile-action">
                    <i className="fa-solid fa-search" />
                    Search Messages
                  </button>
                </div>

                <div className="cey-chat__profile-sections">
                  <div className="cey-chat__profile-section">
                    <div className="cey-chat__profile-section-header">
                      <i className="fa-solid fa-image" />
                      <span>Shared Media</span>
                    </div>
                  </div>
                  <div className="cey-chat__profile-section">
                    <div className="cey-chat__profile-section-header">
                      <i className="fa-solid fa-file" />
                      <span>Shared Files</span>
                    </div>
                  </div>
                  <div className="cey-chat__profile-section">
                    <div className="cey-chat__profile-section-header">
                      <i className="fa-solid fa-link" />
                      <span>Shared Links</span>
                    </div>
                  </div>
                  <div className="cey-chat__profile-section">
                    <div className="cey-chat__profile-section-header">
                     
                    </div>
                  </div>
                  <div className="cey-chat__profile-section">
                    <div className="cey-chat__profile-section-header">
                      <i className="fa-solid fa-trash" />
                      <span>Clear Chat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CelebritiesChat;
