import React from 'react';
import { FiCheckCircle, FiClock, FiSmartphone, FiCreditCard, FiShield, FiHeadphones } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCheckCircle />,
      title: 'Quality Grading',
      description: 'Every vegetable is inspected and graded by size, color, and freshness. Only Grade A produce reaches your kitchen.',
      color: 'bg-green-500',
      features: [
        'Size standardization',
        'Freshness verification',
        'Defect removal',
      ],
    },
    {
      icon: <FiClock />,
      title: 'Early Delivery',
      description: 'Scheduled deliveries between 4:30-6:00 AM ensure your kitchen staff has fresh produce ready for breakfast prep.',
      color: 'bg-blue-500',
      features: [
        'GPS-tracked vehicles',
        'Real-time notifications',
        'Backup delivery slots',
      ],
    },
    {
      icon: <FiSmartphone />,
      title: 'Smart Ordering',
      description: 'WhatsApp-based ordering system with AI-powered demand forecasting helps optimize your inventory and reduce waste.',
      color: 'bg-purple-500',
      features: [
        'One-tap reordering',
        'Usage analytics',
        'Seasonal recommendations',
      ],
    },
    {
      icon: <FiCreditCard />,
      title: 'Flexible Payment',
      description: 'Weekly credit cycles with digital invoicing. Pay via UPI, bank transfer, or credit terms for established clients.',
      color: 'bg-orange-500',
      features: [
        '7-day credit terms',
        'Digital invoices',
        'Multiple payment options',
      ],
    },
    {
      icon: <FiShield />,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee. If any item doesn\'t meet standards, we replace it immediately or credit your account.',
      color: 'bg-red-500',
      features: [
        'Same-day replacement',
        'Full refund policy',
        'Quality documentation',
      ],
    },
    {
      icon: <FiHeadphones />,
      title: 'Dedicated Support',
      description: 'Each client gets a dedicated account manager available 24/7 for urgent requests, menu planning, and supply optimization.',
      color: 'bg-teal-500',
      features: [
        'Personal account manager',
        '24/7 emergency line',
        'Menu consultation',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-50 text-gray-900 rounded-lg font-semibold text-sm border border-green-200">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Complete Kitchen Supply Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Tailored services designed specifically for high-volume commercial kitchens
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl mb-6`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
