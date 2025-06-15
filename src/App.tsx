import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import InvoiceGenerator from './pages/InvoiceGenerator';
import EstimateGenerator from './pages/EstimateGenerator';
import ExpenseManager from './pages/ExpenseManager';
import RoadmapPage from './pages/RoadmapPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/invoice-generator" element={
                <ProtectedRoute>
                  <InvoiceGenerator />
                </ProtectedRoute>
              } />
              <Route path="/estimate-generator" element={
                <ProtectedRoute>
                  <EstimateGenerator />
                </ProtectedRoute>
              } />
              <Route path="/expense-manager" element={
                <ProtectedRoute>
                  <ExpenseManager />
                </ProtectedRoute>
              } />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;