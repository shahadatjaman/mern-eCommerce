import { createSlice } from "@reduxjs/toolkit";

import { removeLocalstorage, setLocalstorage } from "../../../utils/";

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
    addcartTotal: (state, { payload }) => {
      state.total = payload;
    },
    clearAddToCart: (state, { payload }) => {
      state.lists.items = [];
      state.total = null;
      removeLocalstorage("cart_Items");
      removeLocalstorage("cartTotal");
    },
  },
});

export const { addToCart, addCartItems, addcartTotal, clearAddToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
