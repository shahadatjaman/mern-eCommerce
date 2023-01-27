import { Box, Typography } from "@mui/material";
import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
const Export = () => {
  return (
    <Box sx={{ marginLeft: 2, cursor: "pointer" }}>
      <Box
        py={0.8}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          border: "1px solid #1976d2",
          borderRadius: 50,
          width: 110,
        }}
      >
        <FileUploadIcon sx={{ marginRight: 1, color: "#1976d2" }} />
        <Typography color={"#1976d2"}>Export</Typography>
      </Box>
    </Box>
  );
};

export default Export;
