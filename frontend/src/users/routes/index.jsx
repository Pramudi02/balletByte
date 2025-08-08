import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Events from '../pages/Events';
import Chat from '../pages/Chat';
import Explore from '../pages/Explore';
import Notifications from '../pages/Notifications';
import Profile from '../pages/Profile';

const UserRoutes = () => {
  return (
    <div className="user-app">
      <UserNavbar />
      <main className="main-content">
        <Routes>
          {/* Root paths */}
          <Route path="/" element={<Home />} />

          {/* Optional namespaced user paths */}
          <Route path="/user/home" element={<Home />} />
          <Route path="/user/favorites" element={<Favorites />} />
          <Route path="/user/events" element={<Events />} />
          <Route path="/user/chat" element={<Chat />} />
          <Route path="/user/explore" element={<Explore />} />
          <Route path="/user/notifications" element={<Notifications />} />
          <Route path="/user/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default UserRoutes; 