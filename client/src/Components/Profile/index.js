import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import { Wrapper } from "./styles";

const UserProfile = () => {
  return (
    <Wrapper>
      <Container maxWidth="fluid">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <SideBar />
            </Grid>
            <Grid item xs={9}>
              <Outlet />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default UserProfile;
