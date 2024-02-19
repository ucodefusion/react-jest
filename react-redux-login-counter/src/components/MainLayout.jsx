// src/components/MainLayout.jsx

import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1>My Application</h1>
      </header>
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer className="bg-gray-700 text-white p-4">
        Footer content here.
      </footer>
    </div>
  );
};

export default MainLayout;
