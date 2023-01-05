import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box>
      <Skeleton variant="rectangular" width="100%" height={"250px"}>
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
      <Typography variant={"h5"}>
        <Skeleton animation="wave" />
      </Typography>
      <Typography variant={"caption"}>
        <Skeleton animation="wave" variant="rectangular" />
      </Typography>
      <Typography
        style={{
          marginTop: "0.5rem",
          display: "flex",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={210}
          height={20}
          style={{
            marginRight: "8px",
          }}
        />
        <Skeleton variant="rectangular" width={20} height={20} />
      </Typography>
      <Typography
        style={{
          marginTop: "0.5rem",
          display: "flex",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={100}
          height={20}
          style={{
            marginRight: "8px",
          }}
        />
      </Typography>
    </Box>
  );
};

export default Loading;
