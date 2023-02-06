import React from "react";
import { Link } from "react-router-dom";
import { LogoImg, LogoWrapper } from "./Styles";
let logo =
  "https://res.cloudinary.com/dza2t1htw/image/upload/v1674822152/1000_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z-removebg-preview_vmbfes.png";

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/dashboard">
        <LogoImg src={logo} alt="eShop" />
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
