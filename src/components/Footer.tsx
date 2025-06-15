import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Phone, MapPin, Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">InvoiceR</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Professional invoice generation platform designed for freelancers, MSMEs, and agencies. 
              Create beautiful invoices without the hassle of MS Word or Canva.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="h-4 w-4" />
              <span>Industry-grade security • Made in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/invoice-generator" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Invoice Generator
                </Link>
              </li>
              <li>
                <Link to="/estimate-generator" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Estimate Generator
                </Link>
              </li>
              <li>
                <Link to="/expense-manager" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Expense Manager
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Development Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-600 dark:text-gray-400">Verified Payment Partner:</span>
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                Razorpay
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for Indian businesses and the world</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; 2024 InvoiceR. All rights reserved. Development Phase - Features coming soon!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;