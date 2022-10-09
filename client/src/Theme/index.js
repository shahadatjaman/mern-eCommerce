import React from "react";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    primary: "#ee3d43",
    gray: "#acacac3b",
  },
};
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
