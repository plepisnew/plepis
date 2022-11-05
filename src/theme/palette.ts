import { Palette, PaletteOptions } from '@mui/material';
import { pink, lightBlue } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    z0: Palette['primary'];
    z1: Palette['primary'];
    z2: Palette['primary'];
    z3: Palette['primary'];
    z4: Palette['primary'];
    z5: Palette['primary'];
  }

  interface PaletteOptions {
    z0: PaletteOptions['primary'];
    z1: PaletteOptions['primary'];
    z2: PaletteOptions['primary'];
    z3: PaletteOptions['primary'];
    z4: PaletteOptions['primary'];
    z5: PaletteOptions['primary'];
  }
}

const palette: PaletteOptions = {
  primary: lightBlue,
  secondary: pink,
  z0: {
    main: 'rgb(220, 220, 220)',
    contrastText: 'white'
  },
  z1: {
    main: 'rgb(170, 170, 170)',
    contrastText: 'white'
  },
  z2: {
    main: 'rgb(120, 120, 120)',
    contrastText: 'white'
  },
  z3: {
    main: 'rgb(70, 70, 70)',
    contrastText: 'white'
  },
  z4: {
    main: 'rgb(50, 50, 50)',
    contrastText: 'white'
  },
  z5: {
    main: 'rgb(20, 20, 20)',
    contrastText: 'white'
  }
};

export default palette;
