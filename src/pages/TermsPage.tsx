import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <FileText className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-400">
            Please read these terms carefully before using InvoiceR
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-yellow-900/20 border border-yellow-500 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-yellow-200">Development Phase Notice</h2>
                <p className="text-yellow-100">
                  InvoiceR is currently in development phase. These terms apply to the current development version 
                  and will be updated for the production release. By using InvoiceR during development, you acknowledge 
                  that features may change and some functionality may be limited.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">1. Acceptance of Terms</h3>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using InvoiceR, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">2. Service Description</h3>
              <div className="text-gray-300 space-y-3">
                <p>InvoiceR provides:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Professional invoice generation tools</li>
                  <li>Local data storage with encryption</li>
                  <li>PDF export functionality</li>
                  <li>GST-compliant templates for Indian businesses</li>
                  <li>Expense tracking and management tools (coming soon)</li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">3. User Responsibilities</h3>
              <div className="text-gray-300 space-y-3">
                <p>You agree to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the service only for lawful business purposes</li>
                  <li>Not attempt to reverse engineer or hack the platform</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">4. Data and Privacy</h3>
              <div className="text-gray-300 space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <p>Your invoice data is stored locally on your device with encryption</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <p>We do not access or store your business data on our servers</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <p>You retain full ownership and control of your data</p>
                </div>
                <p className="mt-4">
                  For detailed information about data handling, please refer to our 
                  <a href="/privacy" className="text-blue-400 hover:text-blue-300 ml-1">Privacy Policy</a>.
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">5. Intellectual Property</h3>
              <div className="text-gray-300 space-y-3">
                <p>
                  InvoiceR and its original content, features, and functionality are owned by InvoiceR and are 
                  protected by international copyright, trademark, patent, trade secret, and other intellectual 
                  property or proprietary rights laws.
                </p>
                <p>
                  You retain ownership of all content you create using InvoiceR, including invoices, estimates, 
                  and business data.
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">6. Limitation of Liability</h3>
              <div className="text-gray-300 space-y-3">
                <p>
                  During the development phase, InvoiceR is provided "as is" without warranties of any kind. 
                  We are not liable for any damages arising from the use of this service during development.
                </p>
                <p>
                  You acknowledge that the service is under active development and may contain bugs or 
                  incomplete features.
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">7. Service Availability</h3>
              <p className="text-gray-300 leading-relaxed">
                We strive to maintain service availability but do not guarantee uninterrupted access during 
                the development phase. We may temporarily suspend service for maintenance, updates, or improvements.
              </p>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">8. Termination</h3>
              <div className="text-gray-300 space-y-3">
                <p>
                  You may terminate your account at any time by deleting your local data and discontinuing use 
                  of the service.
                </p>
                <p>
                  We reserve the right to terminate or suspend accounts that violate these terms or engage in 
                  harmful activities.
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">9. Changes to Terms</h3>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of significant 
                changes via email or through the platform. Continued use after changes constitutes acceptance 
                of the new terms.
              </p>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">10. Governing Law</h3>
              <p className="text-gray-300 leading-relaxed">
                These terms are governed by the laws of India. Any disputes will be resolved in the courts 
                of India.
              </p>
            </section>

            <section className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-300">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 text-blue-400">
                <p>Email: legal@invoicer.dev</p>
                <p>Subject: Terms of Service Inquiry</p>
              </div>
            </section>

            <div className="text-center text-gray-400 text-sm bg-gray-800 rounded-xl p-6">
              <p className="mb-2">Last updated: December 2024</p>
              <p>These terms are effective during the development phase and will be updated for production release.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;