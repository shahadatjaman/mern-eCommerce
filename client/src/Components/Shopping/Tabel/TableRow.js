import { Grid, TableCell, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Img, imgStyle, nameStyle } from "./Styles";
import Quantity from "../../Shared/Quantity";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { useDispatch } from "react-redux";
import { addCartItems } from "../../../feature/reducer/addToCart";

const RowTable = ({ cart }) => {
  const { removeCart } = useAddToCart();
  const dispatch = useDispatch();

  const removeHandler = (_id) => {
    const carts = removeCart({ _id });
    dispatch(addCartItems(carts));
  };

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

              <Img
                src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet.png"
                alt="product"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ ...imgStyle, display: "flex", ...nameStyle }}>
              Tablet Red EliteBook Revolve 810 G2
            </Box>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="start">$ {cart.price}</TableCell>
      <TableCell align="start">
        <Quantity cart={cart} />
      </TableCell>
      <TableCell align="start">$ {cart.qty * cart.price}</TableCell>
    </TableRow>
  );
};

export default RowTable;
