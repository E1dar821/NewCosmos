import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-2" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
            NewCosmos
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#planets" className="nav-link">Planets</a>
          <a href="#facts" className="nav-link">Cosmic Facts</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-4 p-2 text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-100 dark:border-gray-700">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#planets" 
              className="py-2 text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Planets
            </a>
            <a 
              href="#facts" 
              className="py-2 text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Cosmic Facts
            </a>
            <a 
              href="#gallery" 
              className="py-2 text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;