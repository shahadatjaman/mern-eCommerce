import { MenuItem } from "@mui/material";
import React from "react";

const Item = ({ category }) => {
  return <MenuItem value={category._id}>{category.category_name}</MenuItem>;
};

export default Item;
