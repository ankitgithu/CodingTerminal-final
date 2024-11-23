import React, { useState } from "react";
import NavOption from "./NavOption"; // Import NavOption component
import Profile from "./Profile"; // Import Profile component
import { Menu, X } from "react-feather"; // Icons for the hamburger menu

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility
  const options = ["Home", "About", "Courses", "Contact"]; // Example options

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <nav className="bg-blue-500 fixed w-full top-0 left-0 z-10 py-4 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">MyLogo</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              onClick={toggleMenu}
              className="text-white cursor-pointer w-8 h-8"
            />
          ) : (
            <Menu
              onClick={toggleMenu}
              className="text-white cursor-pointer w-8 h-8"
            />
          )}
        </div>

        {/* Desktop Navigation Options */}
        <div className="hidden md:flex space-x-6">
          {options.map((option, index) => (
            <NavOption key={index} option={option} />
          ))}
        </div>

        {/* Profile Section */}
        <div className="hidden md:block">
          <Profile />
        </div>
      </div>

      {/* Mobile Navigation Options */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-blue-500">
          {options.map((option, index) => (
            <NavOption
              key={index}
              option={option}
              className="block text-white py-2 border-b border-white"
            />
          ))}
          <div className="mt-4">
            <Profile />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
