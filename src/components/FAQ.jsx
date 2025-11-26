import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'About us',
      questions: [
        {
          q: 'What is Hyperpure by Zomato?',
          a: 'Hyperpure by Zomato is a B2B food supply platform that provides high-quality kitchen supplies, ingredients, and supply chain solutions to restaurants and food businesses.',
        },
        {
          q: 'What makes Hyperpure different from other suppliers?',
          a: 'Hyperpure offers tech-enabled platform, consistent quality, transparent pricing, and reliable delivery across multiple cities, making it a trusted partner for food businesses.',
        },
        {
          q: 'How can Hyperpure help me expand my menu?',
          a: 'Hyperpure provides custom food solutions, menu innovations, and a wide range of quality ingredients to help you expand and diversify your menu offerings.',
        },
        {
          q: 'Is Hyperpure committed to sustainability?',
          a: 'Yes, Hyperpure is committed to sustainability and quality, ensuring responsible sourcing and supply chain practices.',
        },
      ],
    },
    {
      category: 'Order related',
      questions: [
        {
          q: 'How do I place an order?',
          a: 'You can browse our catalogue online and add products to your cart. Our platform makes ordering simple and efficient.',
        },
        {
          q: 'What are the delivery options?',
          a: 'We offer flexible delivery options including next-day restocking, urgent same-day supplies, and specialty products.',
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Frequently asked questions
        </h2>

        <div className="space-y-6">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === key;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
                      >
                        <span className="font-medium text-gray-900">{faq.q}</span>
                        <FiChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-gray-700">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;



