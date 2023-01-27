import { Box, Grid } from "@mui/material";
import React from "react";

import Query from "../Query/";

const Action = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Query />
        </Grid>
        <Grid item xs={4}>
          Filtering
        </Grid>
      </Grid>
    </Box>
  );
};

export default Action;
