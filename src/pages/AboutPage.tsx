import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Users, Heart, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About InvoiceR</h1>
          <p className="text-xl text-gray-400">
            Revolutionizing invoice generation for Indian businesses and professionals worldwide
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Heart className="h-6 w-6 text-red-400 mr-2" />
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To eliminate the frustration of creating professional invoices using outdated tools like MS Word or Canva. 
              We're building a platform that understands the unique needs of Indian businesses while serving professionals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="h-5 w-5 text-blue-400 mr-2" />
                Security First
              </h3>
              <p className="text-gray-300">
                Your data security is our top priority. All invoice data is encrypted and stored locally on your device, 
                ensuring complete privacy and control over your business information.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="h-5 w-5 text-green-400 mr-2" />
                Built for Everyone
              </h3>
              <p className="text-gray-300">
                Whether you're a freelancer, consultant, MSME, or agency owner, InvoiceR is designed to meet your 
                invoicing needs with Indian tax compliance built-in.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <MapPin className="h-6 w-6 text-orange-400 mr-2" />
              Made in India, For the World
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              InvoiceR is proudly developed in India with a deep understanding of local business practices, 
              GST compliance requirements, and the challenges faced by Indian entrepreneurs and professionals.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              While our roots are Indian, our vision is global. We're building features that work seamlessly 
              for businesses around the world, making professional invoicing accessible to everyone.
            </p>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Currently in Development</h2>
            <p className="text-gray-300 text-lg mb-6">
              We're in active development, continuously adding new features and improvements. 
              Join our early access program to be part of the journey and help shape the future of professional invoicing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Join Early Access
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-800">
                View Roadmap
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;