import { Box, Skeleton } from "@mui/material";
import React from "react";

const CategoryLoading = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((val, i) => (
        <Box key={i} sx={{ marginTop: "1.7rem", display: "flex" }}>
          <Skeleton
            variant="circular"
            width={25}
            height={25}
            sx={{ marginRight: "1rem" }}
          />
          <Skeleton animation="wave" width={"100%"} />
        </Box>
      ))}
    </>
  );
};

export default CategoryLoading;
