import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoutes from './users/routes';
import CelebritiesRoutes from './celebrities/routes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/celebrities/*" element={<CelebritiesRoutes />} />
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
