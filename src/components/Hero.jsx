import React from 'react';
import { FiTruck, FiUsers, FiPackage, FiShoppingBag } from 'react-icons/fi';

const Hero = () => {
  const stats = [
    { icon: <FiTruck />, number: '115+', label: "cities we're active in" },
    { icon: <FiUsers />, number: '1 Lakh+', label: 'partners trust us' },
    { icon: <FiPackage />, number: '1.1 Crore+', label: 'orders delivered' },
    { icon: <FiShoppingBag />, number: '600+', label: 'seller brands listed' },
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kitchen Supplies
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            Menu Innovations
          </h3>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Supply Chain Solutions
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl mb-2 text-primary flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;



