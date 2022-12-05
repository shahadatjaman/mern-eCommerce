import React from "react";
import { Background, Close, H4, Header, LogoWrapper, Wrapper } from "./Styles";

const MobileNav = ({ clsoeNavHandler, isOpenNav }) => {
  return (
    <Wrapper isOpenNav={isOpenNav}>
      <Background>
        <Header>
          <LogoWrapper>
            <H4>Xpart</H4>
          </LogoWrapper>
          <Close onClick={clsoeNavHandler}>X</Close>
        </Header>
      </Background>
    </Wrapper>
  );
};

export default MobileNav;
