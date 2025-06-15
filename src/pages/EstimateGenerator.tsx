import React from 'react';
import Header from '../components/Header';
import { Calculator, FileText, Clock } from 'lucide-react';

const EstimateGenerator: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Calculator className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6">Estimate Generator</h1>
          <p className="text-xl text-gray-400 mb-8">
            Coming Soon in Phase 2 Development
          </p>
          
          <div className="bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">What's Coming</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <h3 className="font-semibold">Professional Estimates</h3>
                  <p className="text-gray-400 text-sm">Create detailed project estimates with line items and descriptions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Calculator className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold">Smart Calculations</h3>
                  <p className="text-gray-400 text-sm">Automatic calculations with tax, discounts, and multiple currencies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold">Convert to Invoice</h3>
                  <p className="text-gray-400 text-sm">One-click conversion from estimate to invoice when approved</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 mb-4">Get notified when this feature is ready:</p>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateGenerator;