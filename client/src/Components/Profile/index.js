import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import { Wrapper } from "./styles";
import { useWindowWidth } from "../../hooks/userWindowWidth";

const UserProfile = () => {
  const windowWidth = useWindowWidth({ width: 1000 });

  return (
    <Wrapper>
      <Container maxWidth="fluid">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {!windowWidth && (
              <Grid item xs={3}>
                <SideBar />
              </Grid>
            )}

            <Grid item xs={windowWidth ? 12 : 9}>
              <Outlet />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default UserProfile;
