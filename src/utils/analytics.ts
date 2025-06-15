import UAParser from 'ua-parser-js';

interface AnalyticsEvent {
  timestamp: string;
  event: string;
  data: any;
  deviceInfo: {
    browser: string;
    os: string;
    device: string;
    userAgent: string;
  };
  sessionId: string;
}

const getDeviceInfo = () => {
  const parser = new UAParser();
  const result = parser.getResult();
  
  return {
    browser: `${result.browser.name} ${result.browser.version}`,
    os: `${result.os.name} ${result.os.version}`,
    device: result.device.type || 'desktop',
    userAgent: navigator.userAgent
  };
};

const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('invoicer-session');
  if (!sessionId) {
    sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('invoicer-session', sessionId);
  }
  return sessionId;
};

export const trackUserActivity = (event: string, data: any) => {
  try {
    const analyticsEvent: AnalyticsEvent = {
      timestamp: new Date().toISOString(),
      event,
      data,
      deviceInfo: getDeviceInfo(),
      sessionId: getSessionId()
    };

    // Store in localStorage for development (in production, send to server)
    const existingAnalytics = localStorage.getItem('invoicer-analytics') || '[]';
    const analytics = JSON.parse(existingAnalytics);
    analytics.push(analyticsEvent);
    
    // Keep only last 100 events in development
    if (analytics.length > 100) {
      analytics.splice(0, analytics.length - 100);
    }
    
    localStorage.setItem('invoicer-analytics', JSON.stringify(analytics));
    
    console.log('Analytics tracked:', event, data);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};