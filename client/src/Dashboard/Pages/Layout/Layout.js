import React from "react";
import Header from "../../Components/Header";
import { Wrapper } from "./Styles";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
