import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: {
    name: "cartList",
    head: ["image", "product name", "unit price", "qty", "subtotal", "action"],
    items: [],
  },
  total: null,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addCartItems: (state, { payload }) => {
      state.lists.items = payload;
    },
    addToCart: (state, { payload }) => {
      state.lists.items = [...state.lists.items, payload];
    },
    cartTotal: (state, { payload }) => {
      state.total = payload;
    },
  },
});

export const { addToCart, addCartItems, cartTotal } = cartSlice.actions;

export default cartSlice.reducer;
