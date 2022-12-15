import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Label, Prices, Span } from "./Styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecentRange } from "../../../../feature/reducer/product";

const valuetext = (value) => {
  return `${value}°C`;
};

const RangeSlider = () => {
  const { recentPriceRang } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(addRecentRange({ rang: newValue }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Prices>
        <Label>price : </Label>
        <Span>${recentPriceRang[0]}</Span>
        <Span>-${recentPriceRang[1]}</Span>
      </Prices>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={recentPriceRang}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={1000}
      />
    </Box>
  );
};

export default RangeSlider;
