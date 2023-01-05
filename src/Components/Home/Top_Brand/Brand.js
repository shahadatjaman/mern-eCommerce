import { Box } from "@mui/material";
import React from "react";
import { Image } from "./Styles";

const Brand = ({ val }) => {
  return (
    <Box sx={{ width: 150, marginRight: 5 }}>
      <Image src={val.url} alt="brand" />{" "}
    </Box>
  );
};

export default Brand;
