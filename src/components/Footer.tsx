import React from 'react';
import { Github, Linkedin, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-2" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
              NewCosmos
            </span>
          </div>
          
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">About</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Astro Explorer is dedicated to making astronomy accessible and engaging for everyone. 
              Explore the wonders of our universe through interactive visualizations and fascinating facts.
            </p>
          </div>
          
          <div className="relative">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Learning Center</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Space Events</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Image Gallery</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Latest Discoveries</a></li>
            </ul>
            
            <div className="absolute top-0 left-[calc(50%+20px)] flex flex-col space-y-4">
              <a 
                href="https://github.com/E1dar821" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors" 
                aria-label="GitHub"
              >
                <Github className="w-20 h-20" />
              </a>
              <a 
                href="https://www.linkedin.com/in/eldar-tashbolotov-685703365/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BCsxjeUwFQgaZNO25UuDihg%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-20 h-20" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to receive updates on cosmic events and new astronomical discoveries.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 flex-grow"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} NewCosmos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;