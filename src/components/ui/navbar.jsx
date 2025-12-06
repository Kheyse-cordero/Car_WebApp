import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 lg:px-20 xl:px-32 py-5 bg-white shadow-md sticky top-0 z-50">
      <Link to="/">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent cursor-pointer">
          AutoElite
        </h1>
      </Link>
      <div className="space-x-8 md:flex items-center">
        <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
          Home
        </Link>
        <Link to="/listing" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
          Cars
        </Link>
        <Link to="/order" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
          Order
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
