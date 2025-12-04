import React from 'react';
import { FiCheckCircle, FiClock, FiDollarSign } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiCheckCircle />,
      title: 'Direct Farm Sourcing',
      description: 'Partnered with 150+ verified farmers for consistent supply',
    },
    {
      icon: <FiClock />,
      title: 'Pre-Dawn Delivery',
      description: 'Vegetables reach your kitchen by 5 AM, ready for prep',
    },
    {
      icon: <FiDollarSign />,
      title: 'Transparent Pricing',
      description: 'Fixed weekly rates, no market volatility surprises',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="space-y-6">
            {/* Top Left Image - Farming Scene */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🌾</div>
                  <p className="text-gray-600 font-medium">Direct from Farms</p>
                </div>
              </div>
            </div>

            {/* Bottom Images Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Vegetable Display */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-lime-100 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-5xl mb-2">🥬</div>
                    <p className="text-gray-600 text-sm font-medium">Fresh Vegetables</p>
                  </div>
                </div>
              </div>

              {/* Asparagus Close-up */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-green-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-5xl mb-2">🥒</div>
                    <p className="text-gray-600 text-sm font-medium">Premium Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* About Us Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-green-50 text-gray-900 rounded-lg font-semibold text-sm border border-green-200">
                About Us
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Revolutionizing
              <span className="block">Commercial Kitchen</span>
              <span className="block">Supply</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              We partner directly with farmers across Karnataka to deliver premium, quality-graded vegetables to PGs, hostels, and commercial kitchens. Our technology-driven supply chain eliminates middlemen, reduces waste, and ensures consistent quality at stable prices.
            </p>

            {/* Key Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-primary text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
