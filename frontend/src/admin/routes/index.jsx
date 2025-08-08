import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminNavbar from '../components/adminNavbar';
import UserManagement from '../pages/UserManagement';

const AdminRoutes = () => {
  return (
    <Router>
      <div className="admin-app">
        <AdminNavbar />
        <main className="main-content">
          <Routes>
            <Route path="/admin/user-management" element={<UserManagement />} />
            {/* Add more admin routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AdminRoutes;
