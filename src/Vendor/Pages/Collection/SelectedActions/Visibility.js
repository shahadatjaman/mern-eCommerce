import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography } from "@mui/material";
import BasicPopover from "./Poper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Li, Ul } from "./MoreAction/Styles";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { changeProductVisibility } from "../../../feature/reducer/Product/UpdateProdcutsInventory";
import { deepClone } from "../../../utils";
import { updateProductVisibility } from "../../../feature/reducer/Product/products";
const Visibility = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { selectedProducts, products } = useSelector(
    (state) => state.getProducts
  );

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const submitHandler = (type) => {
    dispatch(
      changeProductVisibility({
        pathOne: "v3",
        pathTwo: "set_product_visibility",
        method: "post",
        values: {
          products_id: selectedProducts,
          product_status: type,
        },
      })
    );
    setAnchorEl(null);

    // Update products visibility
    const oldProducts = deepClone(products);
    for (var i = 0; i <= selectedProducts.length - 1; i++) {
      let value = selectedProducts[i];
      let productIndex = oldProducts.findIndex(
        (product) => product._id === value
      );

      if (productIndex > -1) {
        oldProducts[productIndex].product_status = type;
      }
    }
    dispatch(updateProductVisibility(oldProducts));
  };

  return (
    <Box sx={{ marginLeft: 2, cursor: "pointer" }}>
      <Box
        py={0.8}
        onClick={handleClick}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          border: "1px solid #1976d2",
          borderRadius: 50,
          width: 160,
        }}
      >
        <VisibilityIcon sx={{ marginRight: 1, color: "#1976d2" }} />
        <Typography color={"#1976d2"}>Set Visibility</Typography>
        <KeyboardArrowDownIcon sx={{ color: "#1976d2" }} />
      </Box>
      <BasicPopover
        handleClick={handleClick}
        anchorEl={anchorEl}
        handleClose={handleClose}
      >
        <Box sx={{ padding: 1 }}>
          <Ul>
            <Li onClick={() => submitHandler("active")}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <VisibilityIcon sx={{ marginRight: 2 }} />

                <Typography variant="h6" fontWeight={400}>
                  Show in online store
                </Typography>
              </Box>
            </Li>
            <Li onClick={() => submitHandler("deactive")}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <VisibilityOffIcon sx={{ marginRight: 2 }} />

                <Typography variant="h6" fontWeight={400}>
                  Hide in online store
                </Typography>
              </Box>
            </Li>
          </Ul>
        </Box>
      </BasicPopover>
    </Box>
  );
};

export default Visibility;
