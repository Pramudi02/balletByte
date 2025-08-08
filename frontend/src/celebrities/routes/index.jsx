import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CelebrityNavbar from '../components/celebritiesNavbar';
import Celebrities from '../pages/celebrities';
import CelebritiesHome from '../pages/celebritiesHome';
import CelebritiesGallery from '../pages/celebritiesGallery';
import CelebritiesEvents from '../pages/celebritiesEvents';
import CelebritiesChat from '../pages/celebritiesChat';
import CelebritiesMyprofile from '../pages/celebritiesMyprofile';

const CelebritiesRoutes = () => {
  return (
    <div className="celebrity-app">
      <CelebrityNavbar />
      <main className="main-content">
        <Routes>
          {/* Landing at /celebrities */}
          <Route index element={<Celebrities />} />
          {/* Explicit Home */}
          <Route path="home" element={<CelebritiesHome />} />
          <Route path="gallery" element={<CelebritiesGallery />} />
          <Route path="events" element={<CelebritiesEvents />} />
          <Route path="chat" element={<CelebritiesChat />} />
          <Route path="profile" element={<CelebritiesMyprofile />} />
          <Route path="*" element={<Navigate to="." replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default CelebritiesRoutes;