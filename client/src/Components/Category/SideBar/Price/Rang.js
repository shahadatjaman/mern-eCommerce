import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Label, Prices, Span } from "./Styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecentRange,
  getProductByCategory,
} from "../../../../feature/reducer/product";

const valuetext = (value) => {
  return `${value}°C`;
};

const RangeSlider = () => {
  const { recentPriceRang, recentCategoryId } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(addRecentRange({ rang: newValue }));
  };

  useEffect(() => {
    const reqparams = {
      pathOne: "vendor",
      pathTwo: "getproducts",
      method: "post",
      from: 0,
      to: 15,
    };
    const reqbody = {
      maxPrice: recentPriceRang[1],
      minPrice: recentPriceRang[0],
    };
    dispatch(
      getProductByCategory(
        recentCategoryId
          ? {
              ...reqparams,
              values: {
                ...reqbody,
                category_id: recentCategoryId,
              },
            }
          : {
              ...reqparams,
              values: {
                ...reqbody,
              },
            }
      )
    );
  }, [dispatch, recentPriceRang, recentCategoryId]);

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
