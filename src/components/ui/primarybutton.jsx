import React from 'react';

const PrimaryButton = ({ label, onClick, type = "primary" }) => {
  const baseStyles = "px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105";
  
  const typeStyles = {
    primary: "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg",
    secondary: "bg-white text-green-600 border-2 border-green-600 hover:bg-green-50",
    outline: "border-2 border-white text-white hover:bg-white hover:text-green-600"
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
