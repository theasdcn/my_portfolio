import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="floating-theme-toggle-wrapper">
      <button
        type="button"
        onClick={toggleTheme}
        className="floating-theme-toggle-btn"
        aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <div className="floating-toggle-icon-wrap">
          {isDark ? (
            <Sun size={16} className="text-gold rotate-sun" />
          ) : (
            <Moon size={16} className="text-cabernet rotate-moon" />
          )}
        </div>
        <span className="floating-toggle-text">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      </button>
    </div>
  );
}
