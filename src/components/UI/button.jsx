import React from 'react';

const Button = ({ 
  onClick, 
  disabled, 
  loading, 
  children, 
  className = "",
  variant = "primary" 
}) => {
  const baseClasses = "font-medium px-6 py-3 rounded-md transition-colors duration-300 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {loading && (
        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {children}
    </button>
  );
};

export default Button;
