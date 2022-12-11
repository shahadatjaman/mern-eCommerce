import { Box, Grid } from "@mui/material";
import React from "react";
import GridAction from "./Grid";
import Sorting from "./Sorting";
import { Wrapper } from "./Styles";

const Actions = () => {
  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            xl={7}
            item
            xs={6}
            sx={{
              minWidth: 120,
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
            md={8}
          >
            <GridAction />
          </Grid>
          <Grid item xl={5} xs={6} md={4}>
            <Sorting />
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default Actions;
