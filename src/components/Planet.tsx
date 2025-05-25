import React from 'react';

interface PlanetProps {
  name: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitDuration: number;
  description: string;
  funFact: string;
  onClick: (name: string) => void;
  index?: number;
}

const Planet: React.FC<PlanetProps> = ({ 
  name, 
  color, 
  size, 
  orbitRadius, 
  orbitDuration, 
  description,
  funFact,
  onClick, 
  index = 0 
}) => {
  const planetStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
  };
  
  return (
    <div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-full"
      style={{
        width: `${orbitRadius * 2}%`,
        height: `${orbitRadius * 2}%`,
      }}
    >
      <div 
        className="absolute w-full h-full animate-spin"
        style={{
          animationDuration: `${orbitDuration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        <div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 
            rounded-full shadow-md cursor-pointer z-20 
            transition-transform duration-300 hover:scale-110"
          style={planetStyle}
          onClick={() => onClick(name)}
          aria-label={name}
        >
        </div>
      </div>
    </div>
  );
};

export default Planet;