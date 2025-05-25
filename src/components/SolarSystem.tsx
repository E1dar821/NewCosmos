import React, { useState } from 'react';
import Planet from './Planet';
import { planetData, sunData } from '../data/planetData';

interface SolarSystemProps {
  onPlanetSelect: (planetName: string) => void;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ onPlanetSelect }) => {
  const [showSunInfo, setShowSunInfo] = useState(false);

  return (
    <div className="relative w-full aspect-square max-w-full">
      {/* Background with subtle orbit lines */}
      <div className="absolute inset-0">
        {planetData.map((planet) => (
          <div 
            key={`orbit-${planet.name}`}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              rounded-full border border-gray-700/30"
            style={{
              width: `${planet.orbitRadius * 2}%`,
              height: `${planet.orbitRadius * 2}%`,
            }}
          />
        ))}
      </div>

      {/* Sun - positioned at the absolute center */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-8 h-8 rounded-full bg-yellow-500 z-10 
          shadow-lg shadow-yellow-500/50 cursor-pointer"
        onMouseEnter={() => setShowSunInfo(true)}
        onMouseLeave={() => setShowSunInfo(false)}
      >
        {showSunInfo && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 
            bg-white dark:bg-gray-800 text-gray-800 dark:text-white 
            p-4 rounded-lg shadow-xl z-50 w-64 text-center">
            <h3 className="text-lg font-bold mb-2">The Sun</h3>
            <p className="text-sm mb-2">{sunData.description}</p>
            <p className="text-sm font-semibold">{sunData.funFact}</p>
          </div>
        )}
      </div>
      
      {/* Planets */}
      {planetData.map((planet, index) => (
        <Planet 
          key={planet.name}
          name={planet.name}
          color={planet.color}
          size={planet.size}
          orbitRadius={planet.orbitRadius}
          orbitDuration={planet.orbitDuration}
          description={planet.description}
          funFact={planet.funFact}
          onClick={onPlanetSelect}
          index={index}
        />
      ))}
    </div>
  );
};

export default SolarSystem;