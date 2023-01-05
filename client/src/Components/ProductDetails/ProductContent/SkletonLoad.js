import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

const SkletonLoad = () => {
  return (
    <Box>
      <Skeleton height={50} />
      <Box sx={{ marginBottom: 2 }}>
        <Skeleton variant="rounded" width={70} />
      </Box>
      {[1, 1, 1, 1].map((val, index) => (
        <Skeleton animation="pulse" key={index} />
      ))}

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ marginTop: 4, marginBottom: 2 }}>
            <Skeleton animation="pulse" width={70} height={50} />
          </Box>
          <Box sx={{ display: "flex" }}>
            {[1, 2, 3, 4].map((val, index) => (
              <Skeleton
                sx={{ marginRight: 2 }}
                variant="circular"
                width={50}
                height={50}
                key={index}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ marginTop: 4, marginBottom: 2 }}>
            <Skeleton animation="pulse" width={70} height={50} />
          </Box>

          <Box sx={{ display: "flex" }}>
            {[1, 2, 3, 4].map((val, index) => (
              <Skeleton
                sx={{ marginRight: 2 }}
                variant="text"
                width={50}
                height={50}
                key={index}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Skeleton animation="pulse" width={100} height={70} />
            <Skeleton animation="pulse" width={100} height={70} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkletonLoad;
