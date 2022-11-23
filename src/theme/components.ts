import { ThemeOptions } from '@mui/material';

const components: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none'
      }
    }
  }
};

export default components;
