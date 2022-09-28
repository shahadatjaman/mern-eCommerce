import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: {
    name: "wishlist",
    head: ["image", "product name", "unit price", "add to cart", "action"],
    items: [],
  },
};

export const wishListSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    wistList: (state, { payload }) => {
      const wishListItem = localStorage.getItem("wistList")
        ? JSON.parse(localStorage.getItem("wistList"))
        : [];

      // Check if duplicated wish list

      const duplicated = wishListItem.filter(
        (item) => item._id === payload._id
      );

      if (duplicated.length === 0) {
        localStorage.setItem(
          "wistList",
          JSON.stringify([...wishListItem, payload])
        );
        state.lists.items = [...state.lists.items, payload];
      }
    },
    addWishList: (state, { payload }) => {
      state.lists.items = payload;
    },
    remove: (state, { payload }) => {
      state.lists.items = payload;
      localStorage.removeItem("wistList");
      localStorage.setItem("wistList", JSON.stringify(payload));
    },
    clearCart: (state, action) => {
      state.lists.items = [];

      localStorage.removeItem("wistList");
    },
  },
});

export const { wistList, addWishList, clearCart, remove } =
  wishListSlice.actions;

export default wishListSlice.reducer;
