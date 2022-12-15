import * as React from "react";

import { Container, Form, Navbar } from "react-bootstrap";
import Input from "../Shared/Form/Input";
import RightContent from "./RightContent";

import { HeaderWrapper, Logo, NavbarBrand, Toggler } from "./Styles";

import { useWindowHeight } from "../../hooks/useWindowHeight";
import { useWindowWidth } from "../../hooks/userWindowWidth";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MobileNav from "./MobileNav";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const isMatched = useWindowHeight({ height: 400 });

  const isSmallDevice = useWindowWidth({ width: 1200 });

  const isFluid = useWindowWidth({ width: 1400 });

  const openNavHandler = () => {
    setIsOpenNav(true);
  };

  const clsoeNavHandler = () => {
    setIsOpenNav(false);
  };

  return (
    <HeaderWrapper isSticky={isMatched}>
      {isSmallDevice ? (
        <MobileNav clsoeNavHandler={clsoeNavHandler} isOpenNav={isOpenNav} />
      ) : (
        <Navbar>
          <Container fluid={isFluid}>
            <NavbarBrand>
              <Toggler onClick={openNavHandler}>
                <i className="fa-solid fa-bars"></i>
              </Toggler>
              <Logo>
                <NavLink to="/">Xpart</NavLink>
              </Logo>
              <SearchBar />
            </NavbarBrand>

            <RightContent />
          </Container>
        </Navbar>
      )}
    </HeaderWrapper>
  );
};

export default Header;
