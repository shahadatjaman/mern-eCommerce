import { ProductionQuantityLimits } from "@mui/icons-material";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilterdProducts,
  addRecentSortedId,
  addRecentSortedQuery,
} from "../../../../../feature/reducer/product";
import { callApi } from "../../../../../utils";
import { options } from "./data";
import { Span, Wrapper } from "./Styles";

const Sorting = () => {
  const { recentSortedId, recentSortedQuery } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(addRecentSortedId(e.target.value));
    const queryValues = options.filter((val) => val.id === e.target.value);

    dispatch(addRecentSortedQuery(...queryValues));
  };

  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "vendor",
        pathTwo: "getsortedproducts",
        paramOne: recentSortedQuery ? recentSortedQuery.sortBy : "name",
        paramWTwo: recentSortedQuery ? recentSortedQuery.value : "1",
        method: "get",
        from: 0,
        to: 15,
      });
      console.log(res);
      dispatch(addFilterdProducts({ products: res.products }));
    })();
  }, [recentSortedQuery, dispatch]);

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
        <Span>Sort By :</Span>
        <FormControl sx={{ m: 1, width: 180 }}>
          <Select
            value={recentSortedId}
            onChange={handleChange}
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
        <Span>Show :</Span>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Wrapper>
  );
};

export default Sorting;
