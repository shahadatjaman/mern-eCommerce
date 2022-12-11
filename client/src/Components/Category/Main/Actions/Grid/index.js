import { Box, Button } from "@mui/material";
import React from "react";
import { Span, Wrapper } from "./Styles";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";

const GridAction = () => {
  return (
    <Wrapper>
      <Box>
        <Span>Grid view :</Span>

        <ViewModuleIcon sx={{ marginRight: 1 }} />
        <GridViewIcon sx={{ marginRight: 1 }} />
        <ViewListIcon />
      </Box>
    </Wrapper>
  );
};

export default GridAction;
