import React from 'react';
import NavBar from '../../components/ui/navbar';
import PrimaryButton from '../../components/ui/primarybutton';

const Order = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavBar />
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Order Form</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Car Model</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
              <option>Select a car model</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Sports Car</option>
            </select>
          </div>
          <PrimaryButton 
            label="Submit Order"
            type="primary"
          />
        </form>
      </div>
    </div>
  );
};

export default Order;
