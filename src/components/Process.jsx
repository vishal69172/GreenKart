import React from 'react';
import { FiSearch, FiShoppingCart, FiCreditCard, FiTruck, FiCheckCircle } from 'react-icons/fi';

const Process = () => {
  const steps = [
    {
      number: '1',
      title: 'Evening Harvest',
      description: 'Farmers harvest vegetables in the evening when they\'re at peak freshness and nutrient content.',
      color: 'bg-green-500',
    },
    {
      number: '2',
      title: 'Night Processing',
      description: 'Produce arrives at our facility by 10 PM for washing, grading, and quality inspection under controlled conditions.',
      color: 'bg-blue-500',
    },
    {
      number: '3',
      title: 'Cold Storage',
      description: 'Sorted vegetables are stored in temperature-controlled rooms (2-8°C) to maintain freshness overnight.',
      color: 'bg-purple-500',
    },
    {
      number: '4',
      title: 'Dawn Delivery',
      description: 'Refrigerated vehicles depart at 3 AM, delivering to all clients by 6 AM so kitchens can start prep on time.',
      color: 'bg-orange-500',
    },
  ];

  const stats = [
    { value: '12hrs', label: 'Farm to Kitchen', color: 'text-primary' },
    { value: '40%', label: 'Longer Freshness', color: 'text-primary' },
    { value: '0', label: 'Middlemen', color: 'text-primary' },
    { value: '100%', label: 'Quality Checked', color: 'text-primary' },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Process Flow Section */}
        <div className="mb-20">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-green-50 text-gray-900 rounded-lg font-semibold text-sm border border-green-200">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Farm to Kitchen in 12 Hours
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined supply chain that prioritizes freshness and efficiency
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 via-purple-500 to-orange-500 transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Step Number Circle */}
                  <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Our Process Works Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Why Our Process Works
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Traditional supply chains involve 3-4 middlemen and take 2-3 days from farm to kitchen. Our direct model cuts this to under 12 hours, preserving nutrients and extending shelf life by 40%.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">🌱</div>
                <p className="text-gray-600 font-medium text-lg">Fresh from Farm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
