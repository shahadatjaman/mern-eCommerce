import * as React from "react";

import { Container } from "react-bootstrap";
import scrollTop from "../../utils/ScrollHandler";
import RightContent from "./RightContent";

import { HeaderWrapper, NavbarBrand, Toggler } from "./Styles";

import { useWindowHeight } from "../../hooks/useWindowHeight";
import { useWindowWidth } from "../../hooks/userWindowWidth";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../feature/reducer/categories";
import { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Search from "./Search";
import Category from "./MobileNav/Category";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const isMatched = useWindowHeight({ height: 400 });

  const isSmallDevice = useWindowWidth({ width: 1200 });

  const isFluid = useWindowWidth({ width: 1400 });

  const dispatch = useDispatch();

  const openNavHandler = () => {
    setIsOpenNav(true);
  };

  const clsoeNavHandler = () => {
    setIsOpenNav(false);
  };

  useEffect(() => {
    dispatch(
      getCategories({ pathOne: "v1", pathTwo: "getcategories", method: "get" })
    );
  }, [dispatch]);

  return (
    <HeaderWrapper isSticky={isMatched}>
      <Box>
        <Container fluid={isFluid}>
          <Box sx={{ height: 100, display: "flex", alignItems: "center" }}>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xl={3} md={3} sm={6} xxs={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    width: "100%",
                  }}
                >
                  <NavbarBrand>
                    <Toggler onClick={openNavHandler}>
                      <DehazeIcon fontSize={"medium"} />
                    </Toggler>

                    <NavLink onClick={() => scrollTop()} to={"/"}>
                      <Box sx={{ width: 250 }}>
                        <Typography
                          sx={{ color: "#221ecd" }}
                          fontWeight={"600"}
                          variant="h3"
                        >
                          Bazaar
                          <Typography
                            sx={{ color: "#000", display: "inline-block" }}
                            fontWeight={"600"}
                            variant="h4"
                          >
                            Hub
                          </Typography>
                        </Typography>
                      </Box>
                    </NavLink>
                  </NavbarBrand>
                </Box>
              </Grid>
              <Grid
                item
                xl={6}
                md={6}
                display={{
                  xxs: "none",
                  sm: "none",
                  lg: "block",
                  xl: "block",
                  md: "block",
                }}
              >
                <Search />
              </Grid>
              <Grid item xl={3} md={3} sm={6} xxs={6}>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <RightContent />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Category isOpenNav={isOpenNav} closeHandler={clsoeNavHandler} />
        </Container>
      </Box>
      {/* )} */}
    </HeaderWrapper>
  );
};

export default Header;
