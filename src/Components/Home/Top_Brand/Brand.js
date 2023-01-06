import { Box } from "@mui/material";
import React from "react";
import { useWindowWidth } from "../../../hooks/userWindowWidth";
import { Image } from "./Styles";

const Brand = ({ val }) => {
  const isSmall = useWindowWidth({ width: 700 });
  return (
    <Box sx={{ width: 150, marginRight: isSmall ? 0 : 5 }}>
      <Image src={val.url} alt="brand" />{" "}
    </Box>
  );
};

export default Brand;
