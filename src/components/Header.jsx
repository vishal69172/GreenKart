import React, { useState } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select Location');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Greenkart</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            <a href="#catalogue" className="text-gray-700 hover:text-primary font-medium">
              Browse catalogue
            </a>
            <a href="#quality" className="text-gray-700 hover:text-primary font-medium">
              Quality
            </a>
            <a href="#sustainability" className="text-gray-700 hover:text-primary font-medium">
              Sustainability
            </a>
          </nav>

          {/* Right side - Location & Login */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                <span>Delivery in</span>
                <div className="flex items-center space-x-1">
                  <span className="font-medium">{selectedLocation}</span>
                  <FiChevronDown className="w-4 h-4" />
                </div>
              </button>
            </div>
            <button className="px-4 py-2 text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition">
              Login/Signup
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#catalogue" className="block text-gray-700 hover:text-primary">
              Browse catalogue
            </a>
            <a href="#quality" className="block text-gray-700 hover:text-primary">
              Quality
            </a>
            <a href="#sustainability" className="block text-gray-700 hover:text-primary">
              Sustainability
            </a>
            <div className="pt-4 border-t">
              <button className="w-full text-left text-gray-700 hover:text-primary mb-2">
                Delivery in {selectedLocation}
              </button>
              <button className="w-full px-4 py-2 text-primary border border-primary rounded-md hover:bg-primary hover:text-white">
                Login/Signup
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;



