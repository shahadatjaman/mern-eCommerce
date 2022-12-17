import { Box } from "@mui/material";
import React from "react";
import { Grid, Span, Wrapper } from "./Styles";
import { useDispatch } from "react-redux";
import { addGrid } from "../../../feature/reducer/product";

const GridAction = () => {
  const dispatch = useDispatch();

  const gridHandler = (grid) => {
    dispatch(addGrid({ grid: grid }));
  };
  return (
    <Wrapper>
      <Box
        sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
      >
        <Span>Grid view :</Span>
        <Grid onClick={() => gridHandler(2)}>2</Grid>
        <Grid onClick={() => gridHandler(3)}>3</Grid>
        <Grid onClick={() => gridHandler(4)}>4</Grid>
        <Grid onClick={() => gridHandler(5)}>5</Grid>
      </Box>
    </Wrapper>
  );
};

export default GridAction;
