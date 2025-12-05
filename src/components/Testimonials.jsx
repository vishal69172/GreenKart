import React from 'react';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Owner, Sunrise PG (120 residents)',
    initials: 'RS',
    color: 'bg-green-600',
    text: '“Switching to Green Kart saved us 2 hours every morning. The quality is consistently excellent, and our residents have noticed the difference in taste.”',
  },
  {
    name: 'Priya Menon',
    role: "Manager, Elite Women's Hostel",
    initials: 'PM',
    color: 'bg-blue-600',
    text: '“The predictable pricing has been a game-changer for our budget planning. No more surprise price spikes during festival seasons.”',
  },
  {
    name: 'Arun Kumar',
    role: 'Chef, Tech Park Hostel',
    initials: 'AK',
    color: 'bg-purple-600',
    text: "“Their account manager helped us optimize our weekly orders. We've reduced waste by 30% while maintaining variety in our menu.”",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-50 text-gray-900 rounded-lg font-semibold text-sm border border-green-200">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Trusted by Leading PGs & Hostels
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-4 text-primary">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-primary" />
                ))}
              </div>
              <p className="text-gray-800 leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`${t.color} text-white font-bold w-12 h-12 rounded-full flex items-center justify-center`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



