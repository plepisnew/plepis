export type Project = {
  title: string;
  description: string;
  href: string;
  img: string;
  source: string;
  legacy: boolean;
};

// TODO: make each file in projects export the following info and dynamically import it or something

const imgPrefix = (path: string): string => `/images/projects/${path}`;
const projectPrefix = (path: string) => `/projects/${path}`;

const staticProjects: Project[] = [
  {
    title: 'Old Tetris',
    description:
      'Classic Tetris created using HTML5 Canvas. Supports customizable inputs and configurables for tweaking gameplay.',
    href: projectPrefix('tetris'),
    img: imgPrefix('tetris.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: true
  },
  {
    title: '2D Collisions',
    description:
      'Simulate elastic 2D collisions using spheres with customizable radius, mass, coefficient of friction and gravitational acceleration.',
    href: projectPrefix('collisions'),
    img: imgPrefix('collisions.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: true
  },
  {
    title: 'Rubiks Cube Solver',
    description:
      'Simulates the behavior of an NxN cube and provides an interface for manipulating it. Supports solving the cube programmatically for 1x1, 2x2 and 3x3 cubes',
    href: projectPrefix('rubiks'),
    img: imgPrefix('rubiks.jpg'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: true
  },
  {
    title: 'Old Pogulum',
    description:
      'Accenture Group Project, supporting clip fetching from Twitch API based on different filters.',
    href: projectPrefix('tetris'),
    img: imgPrefix('tcs.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: true
  }
];

const dynamicProjects: Project[] = [
  {
    title: 'Pogulum',
    description:
      'Twitch Clip Scraper: find clips based on selected filters and concatenate them. Ez content',
    href: projectPrefix('pogulum'),
    img: imgPrefix('tcs.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: false
  },
  {
    title: 'Tetris',
    description: 'Classic Tetris remade in React with more advanced collision detection.',
    href: projectPrefix('tetris'),
    img: imgPrefix('tetris_blocks.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: false
  },
  {
    title: 'Sudoku',
    description: 'NxN Sudoku Simulator and Solver.',
    href: projectPrefix('sudoku'),
    img: imgPrefix('sudoku.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: false
  },
  {
    title: 'Game of Life',
    description: "John Conway's Game of Life",
    href: projectPrefix('gol'),
    img: imgPrefix('gol.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: false
  },
  {
    title: 'Mathematica',
    description:
      'Mathematics Engine: Equation and Expression solver. Supports ability to show Abstract Syntax Tree and go through taken steps',
    href: projectPrefix('mathematica'),
    img: imgPrefix('math.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: false
  },
  {
    title: 'Data Sorter',
    description:
      'Different Sorting algorithm visualizer. Based on famous YouTube video producing insane beats',
    href: projectPrefix('sort'),
    img: imgPrefix('sort.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: false
  }
];

const projects: Project[] = [...staticProjects, ...dynamicProjects];

export default projects;
