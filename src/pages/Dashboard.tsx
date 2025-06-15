import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Calculator, 
  CreditCard, 
  Plus, 
  Eye, 
  Download,
  Edit,
  Trash2,
  TrendingUp,
  IndianRupee
} from 'lucide-react';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
import { trackUserActivity } from '../utils/analytics';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [recentInvoices, setRecentInvoices] = useState([]);
  const [stats, setStats] = useState({
    totalInvoices: 0,
    totalAmount: 0,
    pendingAmount: 0,
    paidAmount: 0
  });

  useEffect(() => {
    trackUserActivity('dashboard_visit', { userId: user?.id });
    loadDashboardData();
  }, [user]);

  const loadDashboardData = () => {
    try {
      // Load encrypted invoice data from localStorage
      const encryptedData = localStorage.getItem('invoicer-data');
      if (encryptedData) {
        // In a real app, this would decrypt the data
        const data = JSON.parse(encryptedData);
        setRecentInvoices(data.invoices || []);
        calculateStats(data.invoices || []);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  const calculateStats = (invoices: any[]) => {
    const total = invoices.length;
    const totalAmount = invoices.reduce((sum, inv) => sum + (inv.total || 0), 0);
    const paidAmount = invoices
      .filter(inv => inv.status === 'paid')
      .reduce((sum, inv) => sum + (inv.total || 0), 0);
    const pendingAmount = totalAmount - paidAmount;

    setStats({
      totalInvoices: total,
      totalAmount,
      pendingAmount,
      paidAmount
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name || 'User'}!</h1>
          <p className="text-gray-400">Manage your invoices, estimates, and expenses from your dashboard.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            to="/invoice-generator"
            className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <FileText className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-semibold">Create Invoice</h3>
                <p className="text-blue-100">Generate professional invoices</p>
              </div>
            </div>
          </Link>

          <Link
            to="/estimate-generator"
            className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <Calculator className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-semibold">Create Estimate</h3>
                <p className="text-green-100">Send professional estimates</p>
              </div>
            </div>
          </Link>

          <Link
            to="/expense-manager"
            className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <CreditCard className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-semibold">Track Expenses</h3>
                <p className="text-purple-100">Manage your expenses</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Invoices</p>
                <p className="text-2xl font-bold">{stats.totalInvoices}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Amount</p>
                <p className="text-2xl font-bold flex items-center">
                  <IndianRupee className="h-5 w-5" />
                  {stats.totalAmount.toLocaleString('en-IN')}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pending Amount</p>
                <p className="text-2xl font-bold flex items-center text-yellow-400">
                  <IndianRupee className="h-5 w-5" />
                  {stats.pendingAmount.toLocaleString('en-IN')}
                </p>
              </div>
              <CreditCard className="h-8 w-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Paid Amount</p>
                <p className="text-2xl font-bold flex items-center text-green-400">
                  <IndianRupee className="h-5 w-5" />
                  {stats.paidAmount.toLocaleString('en-IN')}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Invoices</h2>
            <Link
              to="/invoice-generator"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>New Invoice</span>
            </Link>
          </div>

          {recentInvoices.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No invoices yet</h3>
              <p className="text-gray-400 mb-6">Create your first professional invoice to get started.</p>
              <Link
                to="/invoice-generator"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Create Your First Invoice
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4">Invoice #</th>
                    <th className="text-left py-3 px-4">Client</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample data for demonstration */}
                  <tr className="border-b border-gray-700/50">
                    <td className="py-3 px-4">#INV-001</td>
                    <td className="py-3 px-4">Sample Client</td>
                    <td className="py-3 px-4">₹50,000</td>
                    <td className="py-3 px-4">
                      <span className="bg-yellow-900/20 text-yellow-400 px-2 py-1 rounded-full text-xs">
                        Pending
                      </span>
                    </td>
                    <td className="py-3 px-4">Dec 15, 2024</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-white">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;