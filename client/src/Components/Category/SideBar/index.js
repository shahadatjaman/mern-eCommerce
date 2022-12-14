import { Box, Button } from "@mui/material";
import React from "react";
import Categories from "./Categories";
import Color from "./Color";
import Price from "./Price";
import SeachBar from "./Search";
import Size from "./Size";
import { Body, boxStyles, H3, Header, Wrapper } from "./Styles";
import {
  addGrid,
  addQueryValue,
  addRecentCategory,
  addRecentRange,
  addRecentSortedId,
  clearAction,
} from "../../../feature/reducer/product";
import { useDispatch } from "react-redux";
import Tags from "./Tags";

const SideBar = () => {
  const dispatch = useDispatch();

  // Clear Handler
  const clearHandler = () => {
    dispatch(clearAction({ clear: true }));
    dispatch(addRecentCategory({ _id: "" }));
    dispatch(addRecentRange({ rang: [0, 1000] }));
    dispatch(addGrid({ grid: 5 }));
    dispatch(addQueryValue({ value: "" }));
    dispatch(addRecentSortedId(""));
  };

  return (
    <Wrapper>
      <Box sx={{ ...boxStyles }}>
        <Header>
          <H3>Shop by</H3>
        </Header>
        <Body>
          <SeachBar />

          <Categories />
          {/* <Color />
          <Size /> */}
          <Tags />
          <Price />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <Button variant="outlined" color="error" onClick={clearHandler}>
              RESET RESULT
            </Button>
          </Box>
        </Body>
      </Box>
    </Wrapper>
  );
};

export default SideBar;
