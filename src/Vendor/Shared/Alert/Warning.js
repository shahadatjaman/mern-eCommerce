import { ErrorOutline } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Warning = ({ type, text }) => {
  return (
    <Box
      sx={{
        width: "100%",
        background: type === "success" ? "green" : "#ff6666",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 0",
      }}
    >
      <ErrorOutline sx={{ color: "#fff", marginRight: 1 }} />
      <Typography variant="body1" color={"#fff"}>
        {text}
      </Typography>
    </Box>
  );
};

export default Warning;
