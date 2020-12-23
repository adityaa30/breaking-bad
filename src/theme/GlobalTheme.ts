import { createMuiTheme } from "@material-ui/core/styles";
import { lime } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: lime,
  },
  typography: {
    fontFamily: ['"Montserrat"'].join(","),
  },
  breakpoints: {
    values: {
      xs: 576,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
