import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    },
    addcartTotal: (state, { payload }) => {
      state.total = payload;
    },
  },
});

export const { addCart, addCartItems, addcartTotal } = cartSlice.actions;

export default cartSlice.reducer;
