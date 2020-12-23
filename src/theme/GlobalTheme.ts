import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: {
    fontFamily: ['"Montserrat"'].join(",")
  },
  breakpoints: {
    values: {
      xs: 576,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});

export default theme;
