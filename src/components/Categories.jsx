import React from 'react';
import CategorySection from './CategorySection';
import { products } from '../data/products';

const Categories = ({ onAddToCart, onRemoveFromCart, getCartQuantity }) => {
  return (
    <section id="catalogue" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of premium products across multiple categories
          </p>
        </div>
        
        <div className="space-y-8">
          <CategorySection
            categoryName="Your Menu Add-ons"
            products={products['Your Menu Add-ons']}
            tagline="custom food solutions"
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            getCartQuantity={getCartQuantity}
          />
          
          <CategorySection
            categoryName="Fruits & Vegetables"
            products={products['Fruits & Vegetables']}
            tagline="freshness guaranteed"
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            getCartQuantity={getCartQuantity}
          />
          
          <CategorySection
            categoryName="Dairy"
            products={products['Dairy']}
            tagline="handpicked brands"
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            getCartQuantity={getCartQuantity}
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;



