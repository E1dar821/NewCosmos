import React, { useState } from 'react';
import SolarSystem from './SolarSystem';
import { planetData, PlanetType } from '../data/planetData';

const PlanetarySection: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetType | null>(null);

  const handlePlanetSelect = (planetName: string) => {
    const planet = planetData.find(p => p.name === planetName);
    setSelectedPlanet(planet || null);
    
    // Smooth scroll to the info section
    const infoSection = document.getElementById('planet-info');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planets" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Solar System</h2>
        <p className="section-subtitle text-center">
          Explore the planets that orbit our sun, from the tiny Mercury to the distant Neptune.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2">
            <SolarSystem onPlanetSelect={handlePlanetSelect} />
          </div>
          
          <div id="planet-info" className="w-full lg:w-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8">
            {selectedPlanet ? (
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{selectedPlanet.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{selectedPlanet.description}</p>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Fun Fact</h4>
                  <p className="text-purple-700 dark:text-purple-200">{selectedPlanet.funFact}</p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Select a Planet</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {planetData.map((planet) => (
                    <button
                      key={planet.name}
                      onClick={() => handlePlanetSelect(planet.name)}
                      className="flex flex-col items-center p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                    >
                      <div 
                        className="w-10 h-10 rounded-full mb-2" 
                        style={{ backgroundColor: planet.color }}
                      ></div>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {planet.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {selectedPlanet && (
              <button 
                onClick={() => setSelectedPlanet(null)}
                className="mt-6 text-purple-600 dark:text-purple-400 hover:underline"
              >
                ← Back to all planets
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanetarySection