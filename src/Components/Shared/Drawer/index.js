import React from "react";
import {
  Body,
  CloseBtn,
  Closer,
  Content,
  Header,
  Logo,
  Wrapper,
} from "./Styles";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

const Drawer = ({ children, isOpenNav, closeHandler }) => {
  useEffect(() => {
    if (isOpenNav) {
      document.getElementsByTagName("BODY")[0]["style"]["overflow"] = "hidden";
    } else {
      document.getElementsByTagName("BODY")[0]["style"]["overflow"] = "inherit";
    }
  });
  return (
    <Wrapper isOpenNav={isOpenNav}>
      <Content isOpenNav={isOpenNav}>
        <Header>
          <Logo>Xpart</Logo>
          <Closer>
            <CloseBtn onClick={() => closeHandler()}>
              <CloseIcon />
            </CloseBtn>
          </Closer>
        </Header>
        <Body>{children}</Body>
      </Content>
    </Wrapper>
  );
};

export default Drawer;
