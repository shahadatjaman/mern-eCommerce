import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 140,
    },
  },
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1675, // large screens
      fluid: "100%",
    },
  },
});

export default theme;
