import React, { useState } from 'react';
import { FiChevronDown, FiMenu, FiX, FiShoppingCart, FiPlus, FiMinus } from 'react-icons/fi';

const Header = ({ cartItems = [], cartSummary, allProducts = [], onRemoveFromCart, onAddToCart, onClearCart, calculateItemPrice, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const highlightedItems = cartItems.slice(0, 3);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-primary to-primaryLight bg-clip-text text-transparent">
              Greenkart
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <a href="#about" className="text-gray-700 hover:text-primary font-semibold text-base transition-colors duration-200 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary font-semibold text-base transition-colors duration-200 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#process" className="text-gray-700 hover:text-primary font-semibold text-base transition-colors duration-200 relative group">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#products" className="text-gray-700 hover:text-primary font-semibold text-base transition-colors duration-200 relative group">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right side - Cart, Location & Login */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                className="relative flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-green-50 transition-all duration-200 font-semibold"
                onClick={() => {
                  if (onOpenCart) {
                    onOpenCart();
                  } else {
                    setIsCartOpen((open) => !open);
                  }
                }}
              >
                <FiShoppingCart className="w-5 h-5" />
                <span className="font-semibold">Cart</span>
                {cartSummary?.itemCount > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center rounded-full bg-primary text-white text-xs font-bold w-6 h-6 animate-pulse">
                    {cartSummary.itemCount}
                  </span>
                )}
              </button>

              {isCartOpen && !onOpenCart && (
                <div className="absolute right-0 mt-3 w-80 bg-white shadow-xl rounded-lg border border-gray-100 z-50">
                  <div className="px-4 py-3 border-b flex justify-between items-center">
                    <span className="font-semibold text-gray-900 text-sm">Cart Preview</span>
                    {cartSummary?.itemCount > 0 && (
                      <button
                        onClick={onClearCart}
                        className="text-xs text-primary hover:underline"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="max-h-72 overflow-y-auto">
                    {cartSummary?.itemCount === 0 && (
                      <div className="px-4 py-6 text-sm text-gray-500">
                        Your cart is empty. Add items from the catalogue.
                      </div>
                    )}
                    {highlightedItems.map((item) => {
                      const itemTotal = calculateItemPrice ? calculateItemPrice(item) : item.price * item.quantity;
                      const pricePerUnit = itemTotal / item.quantity;
                      
                      return (
                        <div
                          key={item.id}
                          className="px-4 py-3 flex items-start justify-between text-sm border-b last:border-b-0"
                        >
                          <div className="pr-2 flex-1">
                            <p className="font-medium text-gray-900 line-clamp-2">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {item.unit}
                            </p>
                            <p className="text-xs font-medium text-gray-900 mt-1">
                              ₹{pricePerUnit.toFixed(2)} × {item.quantity} = ₹{itemTotal.toFixed(2)}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1 border rounded-md">
                            <button
                              onClick={() => onRemoveFromCart?.(item.id, 1)}
                              className="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded-l-md"
                              aria-label="Decrease quantity"
                            >
                              <FiMinus className="w-4 h-4" />
                            </button>
                            <span className="px-3 py-1 font-medium text-gray-900 min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onAddToCart?.(item, 1)}
                              className="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded-r-md"
                              aria-label="Increase quantity"
                            >
                              <FiPlus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {cartSummary?.itemCount > 0 && (
                    <div className="px-4 py-3 border-t text-sm">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Items</span>
                        <span className="font-medium text-gray-900">
                          {cartSummary.itemCount}
                        </span>
                      </div>
                      <div className="flex justify-between mb-3">
                        <span className="text-gray-600">Total</span>
                        <span className="font-semibold text-gray-900">
                          ₹{cartSummary.total.toFixed(2)}
                        </span>
                      </div>
                      {onOpenCart && (
                        <button
                          onClick={() => {
                            onOpenCart();
                            setIsCartOpen(false);
                          }}
                          className="w-full bg-primary text-white py-2 rounded-md text-sm font-medium hover:bg-red-600 transition"
                        >
                          View Full Cart
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                <span>Delivery in</span>
                <div className="flex items-center space-x-1">
                  <span className="font-medium">{selectedLocation}</span>
                  <FiChevronDown className="w-4 h-4" />
                </div>
              </button>
            </div>
            <button className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primaryDark transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
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
            <a href="#about" className="block text-gray-700 hover:text-primary font-semibold py-2">
              About
            </a>
            <a href="#services" className="block text-gray-700 hover:text-primary font-semibold py-2">
              Services
            </a>
            <a href="#process" className="block text-gray-700 hover:text-primary font-semibold py-2">
              Process
            </a>
            <a href="#products" className="block text-gray-700 hover:text-primary font-semibold py-2">
              Products
            </a>
            <div className="pt-4 border-t">
              <button 
                onClick={() => {
                  if (onOpenCart) {
                    onOpenCart();
                    setIsMenuOpen(false);
                  }
                }}
                className="w-full flex items-center justify-between text-gray-700 hover:text-primary mb-2"
              >
                <span>Cart</span>
                {cartSummary?.itemCount > 0 && (
                  <span className="inline-flex items-center justify-center rounded-full bg-primary text-white text-xs px-2 py-1">
                    {cartSummary.itemCount}
                  </span>
                )}
              </button>
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



