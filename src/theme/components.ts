import { ThemeOptions } from '@mui/material';

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
          color: contrastText,
          height: '70px'
        };
      }
    }
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        height: '70px'
      }
    }
  }
};

export default components;
