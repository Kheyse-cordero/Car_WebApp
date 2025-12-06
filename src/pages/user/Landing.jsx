import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/ui/primarybutton";
import NavBar from "../../components/ui/navbar";
import Card from "../../components/ui/card";

const Landing = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExplore = () => {
    // Navigate to car listing page
    navigate("/listing");
  };

  const handleOrder = () => {
    // Navigate to order page
    navigate("/order");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen w-full">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-24 md:py-32 gap-16 bg-gradient-to-br from-green-50/30 via-white to-emerald-50/20">
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect{" "}
            <span className="block mt-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Dream Car
            </span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Discover premium vehicles from top brands. Browse our collection of luxury cars, 
            sports cars, and family vehicles.
          </p>
          <div className="flex gap-4">
            <PrimaryButton 
              label="Browse Cars"
              onClick={handleExplore}
              type="primary"
            />
            <PrimaryButton 
              label="Modal Button"
              onClick={toggleModal}
              type="secondary"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl opacity-20 blur-2xl"></div>
            <img
              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Luxury sports car"
              className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
              Our Advantages
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Premium service and exceptional vehicles for every driver
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card
              icon="🚗"
              title="Premium Selection"
              description="Curated collection of luxury vehicles from world-renowned brands. Each car is hand-picked for quality and performance."
              onClick={() => console.log("Card 1 clicked")}
            />

            {/* Card 2 */}
            <Card
              icon="💎"
              title="Quality Guarantee"
              description="Every vehicle undergoes rigorous inspection and comes with comprehensive warranty coverage for your peace of mind."
              onClick={() => console.log("Card 2 clicked")}
            />

            {/* Card 3 */}
            <Card
              icon="🎯"
              title="Expert Service"
              description="Our experienced team provides personalized assistance to help you find the perfect vehicle that matches your needs."
              onClick={() => console.log("Card 3 clicked")}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white text-center py-24 px-6 md:px-12">
        <div className="w-full max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Drive Your Dream Car?
          </h3>
          <p className="mb-10 text-xl text-green-50 leading-relaxed">
            Browse our collection and schedule a test drive today!
          </p>
          <PrimaryButton 
            label="Explore Our Collection"
            onClick={handleExplore}
            type="outline"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 text-center py-8">
        <p className="text-sm">© 2025 AutoElite Premium Dealership. All rights reserved.</p>
      </footer>

      {/* Modal Overlay */}
      <>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleModal}
        ></div>

        {/* Side Panel - Desktop (right side) / Mobile (bottom) */}
        <div className={`fixed z-50 bg-white shadow-2xl transition-all duration-500 ease-out
          md:top-0 md:right-0 md:h-full md:w-96 ${isModalOpen ? 'md:translate-x-0' : 'md:translate-x-full'}
          max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:rounded-t-3xl max-md:h-[85vh] ${isModalOpen ? 'max-md:translate-y-0' : 'max-md:translate-y-full'}`}>
            
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Panel Content */}
            <div className="p-6 md:p-8 h-full flex items-center justify-center">
              <p className="text-2xl font-semibold text-gray-900">This is sidepanel</p>
            </div>
          </div>
      </>
    </div>
  );
};

export default Landing;
