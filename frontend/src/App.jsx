import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoutes from './users/routes';
import CelebritiesRoutes from './celebrities/routes';
import AdminRoutes from './admin/routes';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ForgotPassword from './auth/ForgotPassword';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/celebrities/*" element={<CelebritiesRoutes />} />
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
