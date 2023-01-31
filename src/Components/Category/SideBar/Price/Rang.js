import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Label, Prices, Span } from "./Styles";

const valuetext = (value) => {
  return `${value}°C`;
};

const RangeSlider = ({ handleChange, value }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Prices>
        <Label>price : </Label>
        <Span>${value[0]}</Span>
        <Span>-${value[1]}</Span>
      </Prices>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={1000}
      />
    </Box>
  );
};

export default RangeSlider;
