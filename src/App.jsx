import React, { useState, useEffect } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { CertificationsScreen } from './screens/CertificationsScreen';
import { ThemeProvider } from './context/ThemeContext';
import { StarField } from './components/StarField';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    return window.location.hash.startsWith('#/certifications') ? 'certifications' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#/certifications')) {
        setCurrentRoute('certifications');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToCertifications = () => {
    window.location.hash = '#/certifications';
  };

  const navigateToHome = (hash = '#certifications') => {
    window.location.hash = hash;
  };

  return (
    <ThemeProvider>
      {/* Background Starry Night (Very small real stars in dark mode only) */}
      <StarField />

      {currentRoute === 'certifications' ? (
        <CertificationsScreen onBack={() => navigateToHome('#certifications')} />
      ) : (
        <HomeScreen onNavigateToCertifications={navigateToCertifications} />
      )}
    </ThemeProvider>
  );
}
