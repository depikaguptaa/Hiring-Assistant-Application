import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="fixed top-3 right-4 z-50">
        <DarkModeToggle />
      </div>
      {children}
    </div>
  );
};

export default Layout;