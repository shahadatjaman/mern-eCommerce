import * as React from "react";

import { Container, Navbar } from "react-bootstrap";

import RightContent from "./RightContent";

import { HeaderWrapper, NavbarBrand, Toggler } from "./Styles";

import { useWindowHeight } from "../../hooks/useWindowHeight";
import { useWindowWidth } from "../../hooks/userWindowWidth";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { useDispatch } from "react-redux";
import { getCategories } from "../../feature/reducer/categories";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Search from "./Search";

let logo =
  "https://res.cloudinary.com/dza2t1htw/image/upload/v1674822152/1000_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z-removebg-preview_vmbfes.png";

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
      {isSmallDevice ? (
        <>
          <MobileNav clsoeNavHandler={clsoeNavHandler} isOpenNav={isOpenNav} />
        </>
      ) : (
        <Box>
          <Container fluid={isFluid}>
            <Box sx={{ height: 100, display: "flex", alignItems: "center" }}>
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Grid item xl={3}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      width: "100%",
                    }}
                  >
                    <NavbarBrand>
                      <Toggler onClick={openNavHandler}>
                        <i className="fa-solid fa-bars"></i>
                      </Toggler>
                      {/* <Logo>
                        <NavLink to="/">Xpart</NavLink>
                      </Logo> */}
                      <NavLink to={"/"}>
                        <Box sx={{ width: 150 }}>
                          <Box
                            component={"img"}
                            sx={{ width: "100%" }}
                            src={logo}
                            alt={"Logo"}
                          ></Box>
                        </Box>
                      </NavLink>

                      {/* <SearchBar /> */}

                      {/* <Search /> */}
                    </NavbarBrand>
                  </Box>
                </Grid>
                <Grid item xl={6}>
                  <Search />
                </Grid>
                <Grid item xl={3}>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <RightContent />
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* 
            <NavbarBrand>
              <Toggler onClick={openNavHandler}>
                <i className="fa-solid fa-bars"></i>
              </Toggler>
              <Logo>
                <NavLink to="/">Xpart</NavLink>
              </Logo>
              <SearchBar />
            </NavbarBrand>

            <RightContent /> */}
          </Container>
        </Box>
      )}
    </HeaderWrapper>
  );
};

export default Header;
