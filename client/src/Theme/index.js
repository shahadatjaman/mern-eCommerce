import React from "react";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    primary: "#221ecd",
    gray: "#f2f2f2",
  },
};
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
