import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-17">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
