import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addNewWish } from "../../../feature/reducer/addWish";
import { clearCart } from "../../../feature/reducer/wishList";
import { useWish } from "../../../hooks/useWish";

import { Table, TBody, Th, Thead, Tr } from "./Styles";
import Tdata from "./Tdata";

const CartTable = ({ items }) => {
  const { clearWish } = useWish();
  const dispatch = useDispatch();

  const cleareCartItems = () => {
    dispatch(addNewWish({ wish: null }));
    clearWish();
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Table>
        <Thead>
          <Tr bg="#f9f9f9">
            <Th>Product</Th>
            <Th></Th>
            <Th>Price</Th>
            <Th>Subtotal</Th>
          </Tr>
        </Thead>
        <TBody>
          {items?.map((val, index) => (
            <Tr>
              <Tdata key={index} product_id={val._id} />
            </Tr>
          ))}
        </TBody>
      </Table>
      <Box
        sx={{
          maxWidth: 1200,
          paddingTop: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Button variant="contained">
          <NavLink to={"/"}>CONTINUE SHOPPING</NavLink>
        </Button>
        <Button onClick={cleareCartItems} variant="outlined" error>
          CLEAR WISHLIST
        </Button>
      </Box>
    </Box>
  );
};

export default CartTable;
