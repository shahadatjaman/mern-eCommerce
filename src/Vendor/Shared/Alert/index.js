import * as React from "react";

import { Box, Typography } from "@mui/material";
import { Error, ErrorOutline } from "@mui/icons-material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Alert = ({ ok = true, text = " " }) => {
  return (
    <>
      <Box
        sx={{
          background: ok ? "#80c979" : "#ff6666",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 0",
          position: "absolute",
          top: "1%",
          left: "-1%",
          width: "100%",
        }}
      >
        {ok ? (
          <CheckCircleOutlineIcon sx={{ color: "#fff", marginRight: 1 }} />
        ) : (
          <ErrorOutline sx={{ color: "#fff", marginRight: 1 }} />
        )}
        <Typography variant="body1" color={"#fff"}>
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default Alert;
