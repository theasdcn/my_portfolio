import React, { createContext, useContext, useState, useLayoutEffect } from 'react';
import { playVinylClick } from '../utils/soundEffects';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light'; // Default to original signature editorial style
  });

  // Layout effect so data-theme is applied before children's effects run (the
  // starfield measures its canvas on mount) and before the browser paints.
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    try {
      playVinylClick();
    } catch (e) {
      // Audio fallback
    }
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
