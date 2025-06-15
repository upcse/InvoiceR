import React from 'react';
import { CheckCircle, Clock, ArrowRight, Star, Zap, Shield, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RoadmapPage: React.FC = () => {
  const roadmapItems = [
    {
      phase: 'Phase 1 - Foundation',
      status: 'in-progress',
      timeline: 'Q1 2024',
      features: [
        { name: 'Basic Invoice Generation', status: 'completed' },
        { name: 'User Authentication System', status: 'completed' },
        { name: 'Local Data Storage (Encrypted)', status: 'completed' },
        { name: 'PDF Export Functionality', status: 'in-progress' },
        { name: 'Responsive Design', status: 'completed' },
        { name: 'Indian GST Templates', status: 'in-progress' }
      ]
    },
    {
      phase: 'Phase 2 - Core Features',
      status: 'planned',
      timeline: 'Q2 2024',
      features: [
        { name: 'Estimate Generator', status: 'planned' },
        { name: 'Expense Manager', status: 'planned' },
        { name: 'Advanced Invoice Templates', status: 'planned' },
        { name: 'Client Management System', status: 'planned' },
        { name: 'Payment Tracking', status: 'planned' },
        { name: 'Multi-language Support', status: 'planned' }
      ]
    },
    {
      phase: 'Phase 3 - Professional Tools',
      status: 'planned',
      timeline: 'Q3 2024',
      features: [
        { name: 'Recurring Invoices', status: 'planned' },
        { name: 'Advanced Analytics Dashboard', status: 'planned' },
        { name: 'Custom Branding Options', status: 'planned' },
        { name: 'Bulk Operations', status: 'planned' },
        { name: 'API Integration Support', status: 'planned' },
        { name: 'Advanced Security Features', status: 'planned' }
      ]
    },
    {
      phase: 'Phase 4 - Business Intelligence',
      status: 'future',
      timeline: 'Q4 2024',
      features: [
        { name: 'Advanced Reporting', status: 'future' },
        { name: 'Tax Filing Integration', status: 'future' },
        { name: 'Team Collaboration Tools', status: 'future' },
        { name: 'Mobile App (iOS/Android)', status: 'future' },
        { name: 'Cloud Sync Option', status: 'future' },
        { name: 'Payment Gateway Integration', status: 'future' }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-yellow-400" />;
      case 'planned':
        return <ArrowRight className="h-5 w-5 text-blue-400" />;
      default:
        return <Star className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-900/20 border-green-500';
      case 'in-progress':
        return 'text-yellow-400 bg-yellow-900/20 border-yellow-500';
      case 'planned':
        return 'text-blue-400 bg-blue-900/20 border-blue-500';
      default:
        return 'text-gray-400 bg-gray-900/20 border-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Development Roadmap
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Follow our journey as we build the most comprehensive invoice generation platform 
            for Indian businesses and professionals worldwide.
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🚀 Currently in Development Phase</h2>
            <p className="text-gray-300 mb-6">
              We're actively working on Phase 1 features. Join our early access program to be 
              among the first to try new features as they're released.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="font-semibold">5 Features Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-yellow-400" />
                <span className="font-semibold">2 In Progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-blue-400" />
                <span className="font-semibold">15+ Planned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-12">
          {roadmapItems.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative">
              {/* Phase Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`px-4 py-2 rounded-full border ${getStatusColor(phase.status)}`}>
                  {getStatusIcon(phase.status)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{phase.phase}</h3>
                  <p className="text-gray-400">{phase.timeline}</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-12">
                {phase.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(feature.status)}
                      <span className="font-medium">{feature.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection Line */}
              {phaseIndex < roadmapItems.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-16 bg-gray-700"></div>
              )}
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes InvoiceR Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">
                Create professional invoices in under 30 seconds with our streamlined interface.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
              <p className="text-gray-400">
                Industry-grade encryption keeps your data safe. Everything stays on your device.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Made for India</h3>
              <p className="text-gray-400">
                GST compliant templates and features designed specifically for Indian businesses.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gray-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals, freelancers, and businesses who are already using 
            InvoiceR to create stunning invoices and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:bg-gray-800">
              Request Demo
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RoadmapPage;