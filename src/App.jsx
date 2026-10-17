import React, { useState, useEffect } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { CertificationsScreen } from './screens/CertificationsScreen';
import { ThemeProvider } from './context/ThemeContext';
import { StarField } from './components/StarField';
import { CursorSparkles } from './components/CursorSparkles';
import { FloatingThemeToggle } from './components/FloatingThemeToggle';

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
      {/* Ambient Celestial Starfield Background (Tiny real stars in dark mode) */}
      <StarField />
      {/* Interactive Cursor Stardust Sparkles */}
      <CursorSparkles />
      {/* Unmistakable Floating Theme Switcher */}
      <FloatingThemeToggle />

      {currentRoute === 'certifications' ? (
        <CertificationsScreen onBack={() => navigateToHome('#certifications')} />
      ) : (
        <HomeScreen onNavigateToCertifications={navigateToCertifications} />
      )}
    </ThemeProvider>
  );
}
