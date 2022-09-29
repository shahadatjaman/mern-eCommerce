import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: {
    name: "cartList",
    head: ["image", "product name", "unit price", "qty", "subtotal", "action"],
    items: [],
  },
};

const cartSlice = createSlice({
  name: "AddToCart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      state.lists.items = [...state.lists.items, payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
