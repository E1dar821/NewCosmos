import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import PlanetarySection from './components/PlanetarySection';
import FactsSection from './components/FactsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500 bg-background text-foreground overflow-hidden">
        <Header />
        <main>
          <Hero />
          <PlanetarySection />
          <FactsSection />
          <GallerySection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;