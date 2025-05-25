import React, { useRef, useEffect } from 'react';

interface FactCardProps {
  title: string;
  description: string;
  iconColor: string;
  delay: number;
}

const facts = [
  {
    title: "Light Years",
    description: "One light year is about 6 trillion miles (9 trillion km). It would take the fastest spacecraft 18,000 years to travel one light year.",
    iconColor: "from-yellow-400 to-orange-500",
  },
  {
    title: "Black Holes",
    description: "Black holes are regions of spacetime where gravity is so strong that nothing—not even light—can escape once it crosses the event horizon.",
    iconColor: "from-purple-600 to-indigo-800",
  },
  {
    title: "Milky Way",
    description: "Our Milky Way galaxy contains between 100-400 billion stars and is about 100,000 light years in diameter.",
    iconColor: "from-blue-400 to-cyan-500",
  },
  {
    title: "Cosmic Expansion",
    description: "The universe is expanding at an accelerating rate, with distant galaxies moving away from us faster than nearby ones.",
    iconColor: "from-red-500 to-pink-600",
  },
];

const FactCard: React.FC<FactCardProps> = ({ title, description, iconColor, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef} 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${iconColor}`}>
        <div className="w-8 h-8 rounded-full bg-white/30"></div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const FactsSection: React.FC = () => {
  return (
    <section id="facts" className="py-20 bg-gray-100 dark:bg-gray-800 relative">
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-nebula bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center">Cosmic Facts</h2>
        <p className="section-subtitle text-center">
          The universe is full of wonders and mysteries. Here are some fascinating facts about our cosmos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <FactCard
              key={index}
              title={fact.title}
              description={fact.description}
              iconColor={fact.iconColor}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;