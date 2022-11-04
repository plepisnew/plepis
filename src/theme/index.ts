import {
  createTheme,
  ThemeOptions,
  ButtonGroupProps,
  ButtonGroupPropsVariantOverrides,
  Theme,
} from "@mui/material";
import palette from "./palette";
import spacing from "./spacing";
import typography from "./typography";
import components from "./components";

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsVariantOverrides {
    rounded: true;
  }
}

const theme: Theme = createTheme({
  palette,
  spacing,
  typography,
  components,
} as ThemeOptions);

export default theme;
