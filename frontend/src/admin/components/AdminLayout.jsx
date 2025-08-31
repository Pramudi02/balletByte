import React from 'react';
import AdminNavbar from '../components/adminNavbar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="admin-app">
      <AdminNavbar />
      <main className="admin-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
