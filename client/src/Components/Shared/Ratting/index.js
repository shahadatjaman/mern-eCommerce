import * as React from "react";
import RatingIcon from "@mui/material/Rating";

import { Box } from "@mui/material";

const Rating = ({ rating }) => {
  return (
    <Box spacing={1} sx={{ display: "flex", alignItems: "center" }}>
      <RatingIcon
        name="half-rating-read"
        value={rating}
        precision={rating}
        readOnly
      />
      ({rating})
    </Box>
  );
};

export default Rating;
