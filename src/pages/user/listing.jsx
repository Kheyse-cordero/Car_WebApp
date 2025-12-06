import React from 'react';
import NavBar from '../../components/ui/navbar';

const Listing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavBar />
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Car Listing</h2>
        <p className="text-gray-600">Browse our collection of premium vehicles.</p>
      </div>
    </div>
  );
};

export default Listing;
