import React from 'react';

const PrimaryButton = ({ label, onClick, type = "primary" }) => {
  const baseStyles = "px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105";
  
  const typeStyles = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg",
    secondary: "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50",
    outline: "border-2 border-white text-white hover:bg-white hover:text-indigo-600"
  };

  return (
    <button 
      className={`${baseStyles} ${typeStyles[type]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
