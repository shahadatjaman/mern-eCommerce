import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByValues } from "../../../feature/reducer/getProducts";
import Categories from "./Categories";

import Price from "./Price";
import SeachBar from "./Search";

import { Body, boxStyles, H3, Header, Wrapper } from "./Styles";

import Tags from "./Tags";

const INIT = {
  category_id: "",
  price: [0, 500],
};

const SideBar = ({ closeHandler }) => {
  const [state, setState] = useState(INIT);

  const dispatch = useDispatch();

  const handleChange = (e, newValue) => {
    const value = e.target.value;

    if (typeof value === "string") {
      setState((prev) => {
        return { ...prev, category_id: value };
      });
    }

    if (Array.isArray(newValue)) {
      setState((prev) => {
        return { ...prev, price: value };
      });
    }
  };

  const applyHandler = () => {
    if (state.category_id) {
      closeHandler();
      dispatch(
        getProductsByValues({
          category_id: state.category_id,
          minPrice: state.price[0],
          maxPrice: state.price[1],
        })
      );
    } else {
      closeHandler();
      dispatch(
        getProductsByValues({
          minPrice: state.price[0],
          maxPrice: state.price[1],
        })
      );
    }
  };

  const resetHandler = () => {
    setState(INIT);
  };

  return (
    <Wrapper>
      <Box sx={{ ...boxStyles }}>
        <Header>
          <H3>Shop by</H3>
        </Header>
        <Body>
          <SeachBar />

          <Categories handleChange={handleChange} value={state.category_id} />
          {/* <Color />
          <Size /> */}
          <Tags />
          <Price handleChange={handleChange} value={state.price} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <Button variant="outlined" color="error" onClick={resetHandler}>
              RESET RESULT
            </Button>

            <Button
              sx={{ ml: 4 }}
              variant="contained"
              color="primary"
              onClick={applyHandler}
            >
              APPLY
            </Button>
          </Box>
        </Body>
      </Box>
    </Wrapper>
  );
};

export default SideBar;
