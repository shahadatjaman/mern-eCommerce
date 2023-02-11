import { createSlice } from "@reduxjs/toolkit";
import { tostify } from "../../../utils/toastify";
const initialState = {
  defaultImg:
    "https://res.cloudinary.com/dza2t1htw/image/upload/v1669222568/no-image_je9opq.jpg0",
  lists: {
    name: "cartList",
    head: ["image", "product name", "unit price", "qty", "subtotal", "action"],
    items: [],
  },
  total: null,
  carts: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addCartItems: (state, { payload }) => {
      state.carts = payload;
    },
    addCart: (state, { payload }) => {
      state.carts = [...state.carts, payload];
      tostify("Added to cart");
    },
    addcartTotal: (state, { payload }) => {
      state.total = payload;
    },
  },
});

export const { addCart, addCartItems, addcartTotal } = cartSlice.actions;

export default cartSlice.reducer;
