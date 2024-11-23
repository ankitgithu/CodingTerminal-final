import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Logo Image */}
      <img
        src="https://via.placeholder.com/40" // Replace with your logo URL
        alt="Logo"
        className="w-10 h-10 rounded-full"
      />
      {/* Logo Text */}
      <span className="text-xl font-bold text-white">Coding Terminal</span>
    </div>
  );
};

export default Logo;
