import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { LogoImg, LogoWrapper } from "./Styles";
let logo =
  "https://res.cloudinary.com/dza2t1htw/image/upload/v1674822152/1000_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z-removebg-preview_vmbfes.png";

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/dashboard">
        {/* <LogoImg src={logo} alt="eShop" /> */}
        <Box sx={{ width: 250 }}>
          <Typography sx={{ color: "#221ecd" }} fontWeight={"600"} variant="h3">
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
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
