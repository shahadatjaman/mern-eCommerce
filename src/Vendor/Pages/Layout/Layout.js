import { Box } from "@mui/material";
import React from "react";
import Header from "../../Components/Header";
import { Wrapper } from "./Styles";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Box mt={4}>{children}</Box>
    </Wrapper>
  );
};

export default Layout;
