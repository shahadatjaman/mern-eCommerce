import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const SkeletonLoad = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {[1, 2, 3].map((_, index) => (
        <Grid container spacing={1} key={index} mb={2}>
          <Grid item xs={6}>
            <Skeleton
              sx={{ height: 135 }}
              animation="pulse"
              variant="rectangular"
            />
          </Grid>
          <Grid item xs={6}>
            <Skeleton
              animation="wave"
              height={50}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={50} width="80%" />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default SkeletonLoad;
