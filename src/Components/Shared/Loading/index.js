import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { PropagateLoader } from "react-spinners";
export const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <CircularProgress /> */}
      <PropagateLoader color="#221ecd" />
    </Box>
  );
};
