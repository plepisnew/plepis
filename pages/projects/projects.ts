export type Project = {
  title: string;
  description: string;
  href: string;
  img: string;
  source: string;
  legacy: boolean;
  done: boolean;
};

// TODO: make each file in projects export the following info and dynamically import it or something

const imgPrefix = (path: string): string => `/projects/${path}`;
const projectPrefix = (path: string) => `/projects/${path}`;

const projects: Project[] = [
  {
    title: 'Old Tetris',
    description:
      'Classic Tetris created using HTML5 Canvas. Supports customizable inputs and configurables for tweaking gameplay.',
    href: '/legacy/tetris.html',
    img: imgPrefix('tetris.png'),
    source: 'https://github.com/plepisnew/plepis/blob/main/public/legacy/tetris.html',
    legacy: true,
    done: true
  },
  {
    title: '2D Collisions',
    description:
      'Simulate elastic 2D collisions using spheres with customizable radius, mass, coefficient of friction and gravitational acceleration.',
    href: '/legacy/collision.html',
    img: imgPrefix('collisions.png'),
    source: 'https://github.com/plepisnew/plepis/blob/main/public/legacy/collision.html',
    legacy: true,
    done: true
  },
  {
    title: 'Rubiks Cube Solver',
    description:
      'Simulates the behavior of an NxN cube and provides an interface for manipulating it. Supports solving the cube programmatically for 1x1, 2x2 and 3x3 cubes',
    href: projectPrefix('rubiks'),
    img: imgPrefix('rubiks.jpg'),
    source: 'https://github.com/plepisnew/learn-js/blob/main/public/js/rubiks.js',
    legacy: true,
    done: false
  },
  {
    title: 'Old Pogulum',
    description:
      'Accenture Group Project, supporting clip fetching from Twitch API based on different filters.',
    href: '/legacy/pogulum.html',
    img: imgPrefix('tcs.png'),
    source: 'https://github.com/plepisnew/plepis/blob/main/public/legacy/pogulum.html',
    legacy: true,
    done: true
  },
  {
    title: 'Pogulum',
    description:
      'Twitch Clip Scraper: find clips based on selected filters and concatenate them. Ez content',
    href: projectPrefix('pogulum'),
    img: imgPrefix('tcs.png'),
    source: 'https://github.com/plepisnew/plepis/tree/main/pages/projects/pogulum',
    legacy: false,
    done: true
  },
  {
    title: 'Tetris',
    description: 'Classic Tetris remade in React with more advanced collision detection.',
    href: projectPrefix('tetris'),
    img: imgPrefix('tetris_blocks.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: false,
    done: false
  },
  {
    title: 'Sudoku',
    description: 'NxN Sudoku Simulator and Solver.',
    href: projectPrefix('sudoku'),
    img: imgPrefix('sudoku.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: false,
    done: false
  },
  {
    title: 'Game of Life',
    description: "John Conway's Game of Life",
    href: projectPrefix('gol'),
    img: imgPrefix('gol.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: false,
    done: false
  },
  {
    title: 'Mathematica',
    description:
      'Mathematics Engine: Equation and Expression solver. Supports ability to show Abstract Syntax Tree and go through taken steps',
    href: projectPrefix('mathematica'),
    img: imgPrefix('math.png'),
    source: 'https://github.com/plepisnew/plepis',
    legacy: false,
    done: false
  },
  {
    title: 'Data Sorter',
    description:
      'Different Sorting algorithm visualizer. Based on famous YouTube video producing insane beats',
    href: projectPrefix('sort'),
    img: imgPrefix('sort.png'),
    source: 'https://github.com/plepisnew/plepis/tree/main/pages/projects/sort',
    legacy: false,
    done: true
  }
];

export default projects;
