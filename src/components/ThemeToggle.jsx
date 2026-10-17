import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${className}`}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="theme-toggle-track">
        <div className={`theme-toggle-thumb ${isDark ? 'is-dark' : 'is-light'}`}>
          {isDark ? (
            <Sun size={14} className="theme-toggle-icon sun-icon text-amber-300" />
          ) : (
            <Moon size={14} className="theme-toggle-icon moon-icon text-cherry" />
          )}
        </div>
      </div>
    </button>
  );
}
