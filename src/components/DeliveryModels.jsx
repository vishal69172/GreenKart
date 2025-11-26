import React from 'react';
import { FiTruck, FiZap } from 'react-icons/fi';

const DeliveryModels = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Our delivery models
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer flexible delivery options tailored to your needs—whether it's next-day restocking, urgent same-day supplies, or specialty products.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center">
            <div className="text-5xl text-blue-600 mb-4 flex justify-center">
              <FiTruck />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Wholesale Delivery
            </h3>
            <p className="text-gray-700">
              Perfect for regular restocking with next-day delivery options. Ideal for bulk orders and planned inventory management.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 text-center">
            <div className="text-5xl text-orange-600 mb-4 flex justify-center">
              <FiZap />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Express Delivery
            </h3>
            <p className="text-gray-700">
              Urgent same-day supplies for when you need ingredients fast. Get your specialty products delivered quickly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryModels;



