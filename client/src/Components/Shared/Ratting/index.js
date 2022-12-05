import * as React from "react";
import RatingIcon from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Rating = () => {
  return (
    <Stack spacing={1}>
      <RatingIcon
        name="half-rating-read"
        value={2.5}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
};

export default Rating;
