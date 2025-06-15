import React from 'react';
import Header from '../components/Header';
import { CreditCard, PieChart, TrendingUp } from 'lucide-react';

const ExpenseManager: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <CreditCard className="h-16 w-16 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6">Expense Manager</h1>
          <p className="text-xl text-gray-400 mb-8">
            Coming Soon in Phase 2 Development
          </p>
          
          <div className="bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">What's Coming</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <CreditCard className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <h3 className="font-semibold">Track Business Expenses</h3>
                  <p className="text-gray-400 text-sm">Record and categorize all your business expenses with receipts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <PieChart className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold">Expense Analytics</h3>
                  <p className="text-gray-400 text-sm">Visual reports and insights into your spending patterns</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold">Tax Preparation</h3>
                  <p className="text-gray-400 text-sm">Export expense reports for easy tax filing and compliance</p>
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
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
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

export default ExpenseManager;