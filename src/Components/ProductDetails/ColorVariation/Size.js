import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { SizeLabel } from "./Styles";
import { addRecentSize } from "../../../feature/reducer/productDetails";

const Size = ({ value }) => {
  const { recentVariation, recentSize } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();

  const sizeHandler = () => {
    dispatch(addRecentSize(value));
    console.log(value);
  };
  useEffect(() => {
    dispatch(addRecentSize(value));
  }, [value, dispatch]);

  return (
    <SizeLabel>
      <Button
        variant={recentSize?._id === value._id ? "contained" : "outlined"}
        size="small"
        sx={{ borderRadius: 10 }}
        onClick={sizeHandler}
      >
        {value.value}
      </Button>
    </SizeLabel>
  );
};

export default Size;
