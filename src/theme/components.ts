import { Components, Theme, ThemeOptions } from '@mui/material';

const components: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none'
      }
    }
  },
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => {
        const { main, contrastText } = theme.palette.z5;
        return {
          backgroundColor: main,
          color: contrastText
        };
      }
    }
  }
};

export default components;
