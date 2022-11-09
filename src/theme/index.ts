import {
  createTheme,
  ThemeOptions,
  ButtonGroupProps,
  ButtonGroupPropsVariantOverrides,
  Theme
} from '@mui/material';
import { createStyled } from '@mui/system';
import palette from './palette';
import spacing from './spacing';
import typography from './typography';
import components from './components';

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsVariantOverrides {
    rounded: true;
  }
}

const defaultTheme: Theme = createTheme({
  palette,
  spacing,
  typography,
  components
} as ThemeOptions);

export const styled = createStyled({ defaultTheme });

export default defaultTheme;
