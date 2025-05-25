export interface PlanetType {
  name: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitDuration: number;
  description: string;
  funFact: string;
}

export const sunData = {
  description: 'The Sun is the star at the center of our Solar System, providing light and energy to all the planets.',
  funFact: 'The Sun contains 99.86% of all mass in our Solar System and is so large that about 1.3 million Earths could fit inside it.',
  facts: [
    'The Sun\'s surface temperature is about 10,000°F (5,500°C)',
    'Light from the Sun takes about 8 minutes to reach Earth',
    'The Sun is halfway through its life at about 4.6 billion years old',
    'The Sun rotates faster at its equator than at its poles'
  ]
};

export const planetData: PlanetType[] = [
  {
    name: 'Mercury',
    color: '#4A4A4A', // Dark gray
    size: 13,
    orbitRadius: 10,
    orbitDuration: 3.2,
    description: 'The smallest and innermost planet in our Solar System.',
    funFact: 'A day on Mercury is longer than its year! It takes 88 Earth days to orbit the Sun, but 176 Earth days to rotate once on its axis.',
  },
  {
    name: 'Venus',
    color: '#D2691E', // Chocolate
    size: 13,
    orbitRadius: 15,
    orbitDuration: 8,
    description: 'Often called Earth\'s twin due to its similar size and proximity.',
    funFact: 'Venus rotates in the opposite direction to most planets, meaning the Sun rises in the west and sets in the east.',
  },
  {
    name: 'Earth',
    color: '#1E90FF', // Dodger Blue
    size: 13,
    orbitRadius: 20,
    orbitDuration: 8,
    description: 'Our home planet and the only known place in the universe with life.',
    funFact: 'Earth is the only planet not named after a god or goddess in Roman/Greek mythology.',
  },
  {
    name: 'Mars',
    color: '#B22222', // Firebrick Red
    size: 13,
    orbitRadius: 23,
    orbitDuration: 15.2,
    description: 'Known as the Red Planet due to iron oxide on its surface.',
    funFact: 'Mars is home to Olympus Mons, the largest volcano in our solar system, nearly three times the height of Mount Everest.',
  },
  {
    name: 'Jupiter',
    color: '#8B4513', // Saddle Brown
    size: 13,
    orbitRadius: 33,
    orbitDuration: 95.8,
    description: 'The largest planet in our Solar System, a gas giant.',
    funFact: 'Jupiter\'s Great Red Spot is a storm that has been raging for at least 400 years and is larger than Earth.',
  },
  {
    name: 'Saturn',
    color: '#DAA520', // Goldenrod
    size: 13,
    orbitRadius: 40,
    orbitDuration: 238.4,
    description: 'Famous for its beautiful ring system visible from Earth.',
    funFact: 'Saturn\'s rings are made up of billions of particles of ice and rock, ranging in size from a grain of sugar to a house.',
  },
  {
    name: 'Uranus',
    color: '#4682B4', // Steel Blue
    size: 13,
    orbitRadius: 45,
    orbitDuration: 676.8,
    description: 'An ice giant with a unique sideways rotation.',
    funFact: 'Uranus rotates on its side, meaning it essentially rolls around the Sun rather than spinning like a top.',
  },
  {
    name: 'Neptune',
    color: '#483D8B', // Dark Slate Blue
    size: 13,
    orbitRadius: 50,
    orbitDuration: 700.8,
    description: 'The most distant planet, known for its deep blue color.',
    funFact: 'Neptune has the strongest winds in the Solar System, reaching up to 1,200 mph (2,000 km/h).',
  }
];