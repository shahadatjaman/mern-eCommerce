import { Box } from "@mui/material";
import React from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { changeProductVisibility } from "../../../feature/reducer/Product/UpdateProdcutsInventory";
import { deepClone } from "../../../utils";
import { updateProductVisibility } from "../../../feature/reducer/Product/products";

const Visibility = ({ product }) => {
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  const submitHandler = (type) => {
    dispatch(
      changeProductVisibility({
        pathOne: "v3",
        pathTwo: "set_product_visibility",
        method: "post",
        values: {
          product_id: product._id,
          product_status:
            product.product_status === "active" ? "deactive" : "active",
        },
      })
    );

    // Update products visibility
    const oldProducts = deepClone(products);

    let productIndex = oldProducts.findIndex((val) => val._id === product._id);

    if (productIndex > -1) {
      oldProducts[productIndex].product_status =
        product.product_status === "active" ? "deactive" : "active";
    }

    dispatch(updateProductVisibility(oldProducts));
  };
  return (
    <Box
      onClick={submitHandler}
      sx={{
        width: 40,
        height: 40,
        borderRadius: 50,
        border: "1px solid #d6e6fe",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {product.product_status === "active" ? (
        <VisibilityIcon sx={{ color: "#116dff" }} />
      ) : (
        <VisibilityOffIcon />
      )}
    </Box>
  );
};

export default Visibility;
