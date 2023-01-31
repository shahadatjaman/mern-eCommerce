import { Box, FormControl, Grid, MenuItem, Select } from "@mui/material";
import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { getProductsByValues } from "../../../feature/reducer/getProducts";

import { useWindowWidth } from "../../../hooks/userWindowWidth";
import { options } from "./data";
import { Span, Wrapper } from "./Styles";

const Sorting = () => {
  const [state, setState] = useState("");

  const isSmallDevice = useWindowWidth({ width: 500 });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setState(value);

    const optionIndex = options.findIndex((option) => option.id === value);
    console.log(options[optionIndex]);
    if (optionIndex > -1) {
      if (options[optionIndex].sortBy === "price") {
        dispatch(
          getProductsByValues({ sortByPrice: options[optionIndex].value })
        );
      }

      if (options[optionIndex].sortBy === "name") {
        dispatch(
          getProductsByValues({ sortByName: options[optionIndex].value })
        );
      }
    }
  };

  return (
    <Wrapper>
      <Box
        sx={{
          minWidth: 120,
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Grid
          item
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Span>Sort By :</Span>
          <FormControl sx={{ width: 180 }}>
            <Select
              onChange={handleChange}
              value={state}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              size="small"
            >
              <MenuItem value="">
                <em>defaults</em>
              </MenuItem>
              {options?.map((option, index) => (
                <MenuItem key={index} value={option.id}>
                  {option.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {!isSmallDevice && (
          <Grid
            item
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Span>Show :</Span>
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                size="small"
                disabled
              >
                <MenuItem value={"15"}>
                  <em>15</em>
                </MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={70}>70</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        )}
      </Box>
    </Wrapper>
  );
};

export default Sorting;
