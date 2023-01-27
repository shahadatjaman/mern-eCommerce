import { Box, Typography } from "@mui/material";
import React from "react";
import { production } from "./data";

const Productions = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <Box component={"img"} src={production.img} alt={"production"} />
      </Box>

      <Typography variant={"h4"} mt={4} fontWeight={"700"}>
        {production.title}
      </Typography>
    </Box>
  );
};

export default Productions;
