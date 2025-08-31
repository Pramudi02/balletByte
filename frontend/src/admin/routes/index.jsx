import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminNavbar from '../components/adminNavbar';
import Dashboard from '../pages/Dashboard';
import ManageUsers from '../pages/ManageUsers';
import ManageCelebrities from '../pages/ManageCelebrities';
import Events from '../pages/Events';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';

const AdminRoutes = () => {
  // For a real application, you would add authentication check here
  // const isAuthenticated = checkAdminAuthentication();
  // if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="admin-app">
      <AdminNavbar />
      <main className="admin-main-content">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="celebrities" element={<ManageCelebrities />} />
          <Route path="events" element={<Events />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminRoutes;
