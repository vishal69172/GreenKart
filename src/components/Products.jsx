import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products as productsByCategory } from '../data/products';
import { FiGrid, FiList } from 'react-icons/fi';

const Products = ({ onAddToCart, onRemoveFromCart, getCartQuantity }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Get all products
  const allProducts = Object.values(productsByCategory).flat();

  // Get unique categories
  const categories = ['All', ...Object.keys(productsByCategory)];

  // Filter products by category
  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : productsByCategory[selectedCategory] || [];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of premium kitchen supplies and ingredients
          </p>
        </div>

        {/* Category Filter and View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Grid view"
            >
              <FiGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="List view"
            >
              <FiList className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-6 text-gray-600">
          <p className="font-medium">
            Showing <span className="text-primary font-bold">{filteredProducts.length}</span> products
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4'
            }
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={viewMode === 'list' ? 'w-full' : ''}
              >
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                  onRemoveFromCart={onRemoveFromCart}
                  cartQuantity={getCartQuantity?.(product.id) || 0}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No products found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Products;

