import React from 'react';
import CategorySection from './CategorySection';
import { products } from '../data/products';

const Categories = () => {
  return (
    <section id="catalogue" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          OUR CATEGORIES
        </h2>
        
        <div className="space-y-8">
          <CategorySection
            categoryName="Your Menu Add-ons"
            products={products['Your Menu Add-ons']}
            tagline="custom food solutions"
          />
          
          <CategorySection
            categoryName="Fruits & Vegetables"
            products={products['Fruits & Vegetables']}
            tagline="freshness guaranteed"
          />
          
          <CategorySection
            categoryName="Dairy"
            products={products['Dairy']}
            tagline="handpicked brands"
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;



