import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-blue-400"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 dark:from-blue-800 dark:to-purple-900 opacity-20 transition-opacity duration-300"></div>
      <div className="relative z-10 transition-transform duration-500 ease-in-out">
        {theme === 'light' ? (
          <Moon className="w-6 h-6 text-gray-800" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-300" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;