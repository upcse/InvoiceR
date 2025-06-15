import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  MousePointer, 
  Heart, 
  FileText, 
  Shield, 
  Users, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Clock,
  Database,
  Play,
  Quote
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { trackUserActivity } from '../utils/analytics';

const LandingPage: React.FC = () => {
  const featuresRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    trackUserActivity('landing_page_visit', { page: 'home' });

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-gray-50 to-purple-50/50 dark:from-blue-900/20 dark:via-gray-900 dark:to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              NO MORE USING<br />
              MS-WORD / CANVA
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Create professional invoices in seconds. Designed for Indian businesses and the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Start Creating Invoices</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/roadmap"
                className="border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                View Development Roadmap
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <FileText className="h-12 w-12 text-blue-400 opacity-20" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow delay-1000">
          <Shield className="h-16 w-16 text-purple-400 opacity-20" />
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-100/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Incredibly easy to create invoices and estimates, get paid, and stay organized.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Professional features designed for modern businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl animate-on-scroll hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors shadow-lg">
              <MousePointer className="h-16 w-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Incredibly easy</h3>
              <p className="text-gray-600 dark:text-gray-400">Create, manage and send invoices with just a few clicks. No more complex software.</p>
            </div>
            
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl animate-on-scroll hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors shadow-lg">
              <Heart className="h-16 w-16 text-red-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Clients love it</h3>
              <p className="text-gray-600 dark:text-gray-400">Professional invoices that make you look established and trustworthy to your clients.</p>
            </div>
            
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl animate-on-scroll hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors shadow-lg">
              <FileText className="h-16 w-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <p className="text-gray-600 dark:text-gray-400">Stay organized with your invoices and estimates, with Indian tax compliance built-in.</p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl animate-on-scroll shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="h-6 w-6 text-yellow-400" />
                <h3 className="font-semibold">Lightning Fast</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Generate invoices in under 30 seconds</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl animate-on-scroll shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <h3 className="font-semibold">Industry-Grade Security</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Your data is encrypted and stored securely on your device</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl animate-on-scroll shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Smartphone className="h-6 w-6 text-green-400" />
                <h3 className="font-semibold">On-Device Storage</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">No cloud dependency - your invoices stay on your device</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl animate-on-scroll shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-purple-400" />
                <h3 className="font-semibold">Made for Indians</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">GST compliant templates designed for Indian businesses</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl animate-on-scroll shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-orange-400" />
                <h3 className="font-semibold">Time Saving</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Perfect for professionals, freelancers, MSMEs & agencies</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl animate-on-scroll shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="h-6 w-6 text-cyan-400" />
                <h3 className="font-semibold">Encrypted Storage</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Invoice data stored securely with military-grade encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Invoice Sample & Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Invoice Sample */}
            <div className="animate-on-scroll">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-xl max-w-md mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">TechCorp Solutions</h3>
                      <p className="text-sm text-gray-600">Mumbai, Maharashtra</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Invoice #</p>
                    <p className="font-bold text-gray-900">INV-2024-001</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Billed To:</p>
                      <p className="font-semibold text-gray-900">Digital Innovations Ltd</p>
                      <p className="text-gray-600">Bangalore, Karnataka</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">Date: 15/12/2024</p>
                      <p className="text-gray-600">Due: 30/12/2024</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Web Development Services</span>
                    <span className="font-semibold text-gray-900">₹85,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">UI/UX Design</span>
                    <span className="font-semibold text-gray-900">₹45,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Project Management</span>
                    <span className="font-semibold text-gray-900">₹25,000</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">₹1,55,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="text-gray-900">₹27,900</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2">
                    <span className="text-gray-900">Total</span>
                    <span className="text-blue-600">₹1,82,900</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">Generated with InvoiceR</p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="animate-on-scroll">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <Quote className="h-12 w-12 text-blue-500 mb-6" />
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "I chose InvoiceR because of how intuitive and fast it is. I'm busy running my consulting business, and creating invoices, tracking payments, and managing clients was taking too much time. With InvoiceR, it's incredibly quick and I never have to worry about formatting or calculations - it handles everything perfectly!"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Arjun Reddy</p>
                    <p className="text-gray-600 dark:text-gray-400">Founder, RedTech Consulting</p>
                  </div>
                </div>
              </div>

              {/* Additional testimonial indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to get paid section with Demo */}
      <section className="py-20 bg-gray-100/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Ready to get paid content */}
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to get paid, fast?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Get instant access, 100% free during development phase. 
                No credit card required.
              </p>
              
              <Link
                to="/signup"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 mb-8"
              >
                GET STARTED
              </Link>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Unlimited Invoices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Unlimited Estimates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Unlimited Clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Payment Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Expense Manager <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">Coming Soon</span></span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">GST Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Multiple Templates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Real-Time Updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Secure Encryption</span>
                </div>
              </div>
            </div>

            {/* Demo Video Section */}
            <div className="animate-on-scroll">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <button className="relative z-10 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group">
                    <Play className="h-8 w-8 text-blue-600 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                  
                  {/* Mock interface elements */}
                  <div className="absolute top-4 left-4 bg-white/90 rounded-lg p-3 text-xs">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                      <span className="font-semibold text-gray-800">InvoiceR</span>
                    </div>
                    <div className="space-y-1">
                      <div className="w-20 h-2 bg-gray-300 rounded"></div>
                      <div className="w-16 h-2 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-white/90 rounded-lg p-3 text-xs">
                    <div className="text-gray-800 font-semibold">Invoice #INV-001</div>
                    <div className="text-green-600 font-bold">₹1,25,000</div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Watch how easy it is to create professional invoices in under 30 seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Best suited for Professional, Freelancers, MSMEs & Agency-Owners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Designed specifically for the Indian business ecosystem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Professionals</h3>
              <p className="text-gray-600 dark:text-gray-400">Consultants, lawyers, doctors, and service providers</p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="bg-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Freelancers</h3>
              <p className="text-gray-600 dark:text-gray-400">Designers, developers, writers, and content creators</p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">MSMEs</h3>
              <p className="text-gray-600 dark:text-gray-400">Small and medium enterprises looking for professional invoicing</p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="bg-orange-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Agencies</h3>
              <p className="text-gray-600 dark:text-gray-400">Marketing, advertising, and creative agencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 bg-gray-100/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore everything InvoiceR offers to improve your business
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Save Time */}
            <div className="flex items-start space-x-6 animate-on-scroll">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Save time</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Easily create and send invoices and estimates in seconds with our intuitive interface.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Quickly select previously used clients and items. Automatic calculations take out the guesswork, making it the perfect invoicing software for small businesses.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Notifications let you know when invoices are viewed.
                </p>
              </div>
              <div className="flex-shrink-0 w-48 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <FileText className="h-12 w-12 text-gray-400" />
              </div>
            </div>

            {/* Accept Payments */}
            <div className="flex items-start space-x-6 animate-on-scroll">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Accept payments</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  In a single invoice, request payment multiple ways.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  From credit cards, debit cards, mobile wallets like Paytm, PhonePe and Google Pay to bank transfers and more, our smart business invoicing software makes it easy for your clients to pay in 130+ currencies.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">Razorpay</div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Verified Partner</span>
                </div>
              </div>
              <div className="flex-shrink-0 w-48 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-gray-400" />
              </div>
            </div>

            {/* Stay Organized */}
            <div className="flex items-start space-x-6 animate-on-scroll">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                  <Database className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Stay organized</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Manage all of your clients, invoices, estimates, expenses, and items in one convenient location.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Easily search and filter. Access from anywhere with secure local storage.
                </p>
              </div>
              <div className="flex-shrink-0 w-48 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <Database className="h-12 w-12 text-gray-400" />
              </div>
            </div>

            {/* Professional Invoices */}
            <div className="flex items-start space-x-6 animate-on-scroll">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Create professional, branded invoices</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Customize with templates, your logo and color using our online invoicing software. See what your invoice looks like as you create it.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Your brand looks like you mean it.
                </p>
              </div>
              <div className="flex-shrink-0 w-48 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <Star className="h-12 w-12 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Phase CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🚀 Currently in Development Phase
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We're building the future of invoice generation. Join our early access program and be among the first to experience InvoiceR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Get Early Access
            </Link>
            <Link
              to="/roadmap"
              className="border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              View Development Progress
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;