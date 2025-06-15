import React, { createContext, useContext, useState, useEffect } from 'react';
import { encryptData, decryptData } from '../utils/encryption';
import { trackUserActivity } from '../utils/analytics';

interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const encryptedUser = localStorage.getItem('invoicer-user');
        if (encryptedUser) {
          const userData = decryptData(encryptedUser);
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        localStorage.removeItem('invoicer-user');
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
    trackUserActivity('page_visit', { page: window.location.pathname });
  }, []);

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call - In production, this would hash password server-side
      const hashedPassword = await hashPassword(password);
      const userId = generateUserId();
      
      const userData = {
        id: userId,
        email,
        name,
        createdAt: new Date().toISOString()
      };

      // Store encrypted user data
      const encryptedUser = encryptData(JSON.stringify(userData));
      localStorage.setItem('invoicer-user', encryptedUser);

      // Store encrypted credentials (temporary for development)
      const credentials = {
        userId,
        email,
        passwordHash: hashedPassword,
        salt: 'generated-salt-' + Date.now(),
        createdAt: new Date().toISOString(),
        deviceInfo: navigator.userAgent
      };
      
      const encryptedCredentials = encryptData(JSON.stringify(credentials));
      localStorage.setItem('invoicer-credentials', encryptedCredentials);

      trackUserActivity('user_signup', { userId, email });
      setUser(userData);
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate authentication
      const encryptedCredentials = localStorage.getItem('invoicer-credentials');
      if (!encryptedCredentials) return false;

      const credentials = JSON.parse(decryptData(encryptedCredentials));
      const hashedPassword = await hashPassword(password);

      if (credentials.email === email && credentials.passwordHash === hashedPassword) {
        const userData = {
          id: credentials.userId,
          email: credentials.email,
          name: 'User', // In production, fetch from user profile
          createdAt: credentials.createdAt
        };

        const encryptedUser = encryptData(JSON.stringify(userData));
        localStorage.setItem('invoicer-user', encryptedUser);

        trackUserActivity('user_login', { userId: credentials.userId, email });
        setUser(userData);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('invoicer-user');
    setUser(null);
    trackUserActivity('user_logout', {});
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Utility functions
const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + 'salt-invoicer-2024');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

const generateUserId = (): string => {
  return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};