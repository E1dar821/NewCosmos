import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const generateStars = () => {
      if (!starsRef.current) return;
      starsRef.current.innerHTML = '';
      
      const starsContainer = starsRef.current;
      const starCount = Math.floor(window.innerWidth * window.innerHeight / 1000);
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random twinkle duration between 3-8s
        star.style.setProperty('--twinkle-duration', `${3 + Math.random() * 5}s`);
        
        // Random delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
      }
    };
    
    generateStars();
    window.addEventListener('resize', generateStars);
    
    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Stars background */}
      <div 
        ref={starsRef} 
        className="absolute inset-0 z-0 bg-gray-100 dark:bg-gray-900"
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
          Explore The Cosmos
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Journey through our solar system and beyond. Discover the wonders of space and the mysteries of the universe.
        </p>
        <a href="#planets" className="btn-primary">
          Begin Your Journey
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-600 dark:text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;