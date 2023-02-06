import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import Account from "./Account";
import Logo from "./Logo";
import LaunchIcon from "@mui/icons-material/Launch";

import { Headerr, HeaderWrapper, Left, Right, SearchWrapper } from "./Styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Headerr>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xl={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Left>
                <Logo />
              </Left>
              <Box
                component={"a"}
                href={"https://mern-ecommerce-23.vercel.app/"}
                target={"_blank"}
              >
                <Typography variant="body1" sx={{ marginRight: 2 }}>
                  My Site
                </Typography>
                <LaunchIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xl={6}>
            <Right>
              {/* <Search /> */}
              <Account />
            </Right>
          </Grid>
        </Grid>
      </Headerr>
    </HeaderWrapper>
  );
};

export default Header;
