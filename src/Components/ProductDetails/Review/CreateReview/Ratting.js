import { Box, Rating } from "@mui/material";
import React from "react";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { labels } from "./data";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const getLabelText = (value) => {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
};
const Rattings = ({ setRating }) => {
  const [value, setValue] = useState(1);
  const [hover, setHover] = useState(-1);

  useEffect(() => {
    setRating(value);
  }, [setRating, value]);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
};

export default Rattings;
