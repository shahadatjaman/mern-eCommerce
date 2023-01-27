import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = ({ text }) => {
  return (
    <Box
      py={5}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <img
          width={"50"}
          src="https://res.cloudinary.com/dza2t1htw/image/upload/v1673359152/no-results_fub9ne.png"
          alt=""
        />
      </Box>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default NotFound;
