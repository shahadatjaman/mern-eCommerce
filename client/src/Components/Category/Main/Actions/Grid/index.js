import { Box, Button } from "@mui/material";
import React from "react";
import { Grid, Icon, Span, Wrapper } from "./Styles";
import { useDispatch } from "react-redux";
import { addGrid } from "../../../../../feature/reducer/product";

const GridAction = () => {
  const dispatch = useDispatch();

  const gridHandler = (grid) => {
    dispatch(addGrid({ grid: grid }));
  };
  return (
    <Wrapper>
      <Box sx={{ display: "flex" }}>
        <Span>Grid view :</Span>
        <Grid onClick={() => gridHandler(2)}>2</Grid>
        <Grid onClick={() => gridHandler(3)}>3</Grid>
        <Grid onClick={() => gridHandler(4)}>4</Grid>
        <Grid onClick={() => gridHandler(5)}>5</Grid>
        {/* <i class="fa-regular fa-grid-5"></i>
        <Icon className="fa-regular fa-grid" onClick={() => gridHandler(3)} />
        <GridViewIcon sx={{ marginRight: 1 }} onClick={() => gridHandler(4)} />
        <ViewListIcon onClick={() => gridHandler(5)} /> */}
      </Box>
    </Wrapper>
  );
};

export default GridAction;
