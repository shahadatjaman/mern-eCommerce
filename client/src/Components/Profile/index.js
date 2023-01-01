import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import SideBar from "./Sidebar";
import { Wrapper } from "./styles";
import { useWindowWidth } from "../../hooks/userWindowWidth";
import Drawer from "../Shared/Drawer";
import { useState } from "react";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const windowWidth = useWindowWidth({ width: 1000 });

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

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
              {windowWidth && (
                <Box sx={{ marginBottom: 2 }}>
                  <ListIcon onClick={openHandler} fontSize="large" />
                  <Drawer isOpenNav={isOpen} closeHandler={closeHandler}>
                    <SideBar closeHandler={closeHandler} />
                  </Drawer>
                </Box>
              )}

              <Outlet />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default UserProfile;
