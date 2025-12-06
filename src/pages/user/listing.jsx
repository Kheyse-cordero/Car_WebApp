import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/ui/primarybutton";
import NavBar from "../../components/ui/navbar";

const Listing = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Car data
  const allCars = [
    {
      id: 1,
      model: "Tesla Model S",
      image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$79,990",
      description: "Premium electric sedan with autopilot and long range"
    },
    {
      id: 2,
      model: "BMW M5",
      image: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$105,000",
      description: "High-performance luxury sedan with twin-turbo V8"
    },
    {
      id: 3,
      model: "Porsche 911",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$115,000",
      description: "Iconic sports car with rear-engine design"
    },
    {
      id: 4,
      model: "Mercedes-Benz G-Class",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$139,900",
      description: "Legendary luxury SUV with off-road capability"
    },
    {
      id: 5,
      model: "Audi R8",
      image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$158,600",
      description: "Mid-engine supercar with V10 power"
    },
    {
      id: 6,
      model: "Range Rover Sport",
      image: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$83,000",
      description: "Versatile luxury SUV with sporty performance"
    },
    {
      id: 7,
      model: "Honda Civic",
      image: "https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$28,500",
      description: "Reliable compact sedan with excellent fuel economy"
    },
    {
      id: 8,
      model: "Ferrari F8",
      image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$280,000",
      description: "Italian supercar with breathtaking performance"
    },
    {
      id: 9,
      model: "Lamborghini Huracan",
      image: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$250,000",
      description: "Exotic supercar with aggressive styling"
    }
  ];

  // Filter cars based on search query
  const filteredCars = allCars.filter(car =>
    car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen w-full">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section with Search */}
      <section className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Premium Car Collection</h1>
        <p className="text-xl text-green-100 mb-8">Discover luxury vehicles that match your style</p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by model or description..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
            />
            <svg
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Car Listing Grid */}
      <section className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16">
        {currentCars.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">No cars found matching your search.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.model}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.model}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{car.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {car.price}
                      </span>
                      <PrimaryButton
                        label="Order Now"
                        onClick={() => navigate("/order")}
                        type="primary"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      currentPage === index + 1
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 text-center py-8">
        <p className="text-sm">© 2025 Premium Car Dealership. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Listing;
