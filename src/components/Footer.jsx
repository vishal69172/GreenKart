import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <p className="text-gray-400 text-sm mb-2">
              Greenkart Private Limited
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Ground Floor, 12A, 94 Meghdoot, Nehru Place, New Delhi - 110019
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <FiPhone className="w-4 h-4" />
                <span>011-41171717</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <FiMail className="w-4 h-4" />
                <span>help@greenkart.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Corporate Announcements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Governance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Supplier Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Youtube
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">
                FSSAI License No. 10020064002537
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>Copyright © Greenkart All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



