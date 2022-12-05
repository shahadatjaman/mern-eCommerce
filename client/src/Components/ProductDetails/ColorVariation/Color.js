import React from "react";
import { Colored, CurcleBorder, Label } from "./Styles";
import { addRecentColor } from "../../../feature/reducer/productDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Color = ({ option }) => {
  const { variations, recentVariation, recentColor } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();

  const colorHandler = () => {
    dispatch(addRecentColor(option));
  };

  useEffect(() => {
    dispatch(addRecentColor(option));
  }, [option, dispatch]);

  return (
    <Label onClick={colorHandler}>
      <CurcleBorder isActive={recentColor?._id === option._id}>
        <Colored bg={option.value}></Colored>
      </CurcleBorder>
    </Label>
  );
};

export default Color;
