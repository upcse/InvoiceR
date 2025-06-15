import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-400">
            Your privacy and data security are our top priorities
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Lock className="h-6 w-6 text-green-400 mr-2" />
              Data Protection Commitment
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              InvoiceR is built with privacy by design. All your invoice data is encrypted and stored locally 
              on your device. We never store your business data on our servers, ensuring complete privacy and control.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Database className="h-5 w-5 text-blue-400 mr-2" />
                Information We Collect
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">Account Information</h4>
                  <p>When you create an account, we collect your name, email address, and encrypted password.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Usage Analytics</h4>
                  <p>We collect anonymous usage data to improve our service, including device information and feature usage patterns.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Invoice Data</h4>
                  <p>All invoice data is stored locally on your device using industry-standard encryption. We never access or store this data.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Eye className="h-5 w-5 text-purple-400 mr-2" />
                How We Use Your Information
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• To provide and maintain our service</li>
                <li>• To authenticate your account and ensure security</li>
                <li>• To analyze usage patterns and improve our platform</li>
                <li>• To communicate important updates and security notices</li>
                <li>• To provide customer support when requested</li>
              </ul>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Data Security</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>Local Storage:</strong> All invoice data is stored locally on your device using AES encryption.
                </p>
                <p>
                  <strong>Password Security:</strong> Passwords are hashed using industry-standard algorithms with salt.
                </p>
                <p>
                  <strong>No Cloud Storage:</strong> Your business data never leaves your device unless you explicitly export it.
                </p>
                <p>
                  <strong>Secure Transmission:</strong> All communications with our servers use HTTPS encryption.
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Your Rights</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>Data Access:</strong> You have complete access to all your data stored locally on your device.
                </p>
                <p>
                  <strong>Data Portability:</strong> Export your data anytime in standard formats (PDF, JSON).
                </p>
                <p>
                  <strong>Data Deletion:</strong> Delete your account and all associated data at any time.
                </p>
                <p>
                  <strong>Opt-out:</strong> Disable analytics collection in your account settings.
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Development Phase Notice</h3>
              <div className="bg-yellow-900/20 border border-yellow-500 rounded-lg p-4">
                <p className="text-yellow-200">
                  <strong>Important:</strong> InvoiceR is currently in development phase. During this period, 
                  some data may be stored temporarily for development and testing purposes. All production 
                  data will follow the privacy practices outlined above.
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-blue-400">
                <p>Email: privacy@invoicer.dev</p>
                <p>Subject: Privacy Policy Inquiry</p>
              </div>
            </section>

            <div className="text-center text-gray-400 text-sm">
              <p>Last updated: December 2024</p>
              <p>This policy is effective during the development phase and will be updated for production release.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;