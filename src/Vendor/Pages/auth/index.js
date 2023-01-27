import React from "react";

import Container from "@mui/material/Container";
import Login from "./Login";

import { loginBox } from "./Styles";
import { Box } from "@mui/material";
const Auth = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box sx={{ ...loginBox }}>
          <Login />
        </Box>
      </Container>
    </Box>
  );
};

export default Auth;
