import { Box } from "@mui/material";
import React from "react";
import { Grid, Span, Wrapper } from "./Styles";
import { useDispatch, useSelector } from "react-redux";

import { updateGirdSystem } from "../../../feature/reducer/getProducts";
import { useState } from "react";

const GridAction = () => {
  const [grids] = useState([2, 3, 4, 5]);
  const dispatch = useDispatch();

  const { grid } = useSelector((state) => state.getItems);

  const gridHandler = (grid) => {
    dispatch(updateGirdSystem(grid));
  };
  return (
    <Wrapper>
      <Box
        sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
      >
        <Span>Grid view :</Span>
        {grids?.map((g, i) => (
          <Grid key={i} isActive={grid === g} onClick={() => gridHandler(g)}>
            {g}
          </Grid>
        ))}
      </Box>
    </Wrapper>
  );
};

export default GridAction;
