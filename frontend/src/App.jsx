import React from 'react';
import UserRoutes from './users/routes';
import './App.css';
import AdminRoutes from './admin/routes';

function App() {
  return (
    <div className="App">
      <UserRoutes />
      <AdminRoutes />
    </div>
  );
}

export default App;
