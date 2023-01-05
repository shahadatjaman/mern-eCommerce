import { Grid, TableCell, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Img, imgStyle, nameStyle } from "./Styles";
import Quantity from "../../Shared/Quantity";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { useDispatch } from "react-redux";
import { addCartItems } from "../../../feature/reducer/addToCart";
import { callApi, shortText } from "../../../utils";

const RowTable = ({ cart }) => {
  const [currentProduct, setCurrrentProduct] = useState(null);
  const { removeCart } = useAddToCart();
  const dispatch = useDispatch();

  const removeHandler = (_id) => {
    const carts = removeCart({ _id });
    dispatch(addCartItems(carts));
  };

  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "v1",
        pathTwo: "getproduct",
        method: "get",
        _id: cart.product_id,
      });

      if (res.variations) {
        setCurrrentProduct((prev) => {
          return { ...prev, variation: res.variations[0] };
        });
      }

      if (res.product) {
        setCurrrentProduct((prev) => {
          return { ...prev, product: res.product };
        });
      }
    })();
  }, [cart]);

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                ...imgStyle,
                width: 100,
                background: "#edf2fd",
              }}
            >
              <DeleteForeverIcon
                onClick={() => removeHandler(cart.product_id)}
                color="error"
                fontSize="medium"
                sx={{ cursor: "pointer" }}
              />

              {currentProduct && currentProduct.variation?.variation_img && (
                <Img
                  src={currentProduct.variation.variation_img}
                  alt="product"
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ ...imgStyle, display: "flex", ...nameStyle }}>
              {currentProduct && currentProduct.product && (
                <Typography>
                  {shortText(currentProduct.product.name, 50, 0, 40)}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="start">$ {parseFloat(cart.price).toFixed(2)}</TableCell>
      <TableCell align="start">
        <Quantity cart={cart} />
      </TableCell>
      <TableCell align="start">
        $ {parseFloat(cart.qty * cart.price).toFixed(2)}
      </TableCell>
    </TableRow>
  );
};

export default RowTable;
