import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
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
        state.lists = [...state.lists, payload];
      }
    },
    addWishList: (state, { payload }) => {
      state.lists = payload;
    },
    remove: (state, { payload }) => {
      state.lists = payload;
      localStorage.removeItem("wistList");
      localStorage.setItem("wistList", JSON.stringify(payload));
    },
    clearCart: (state, action) => {
      state.lists = [];

      localStorage.removeItem("wistList");
    },
  },
});

export const { wistList, addWishList, clearCart, remove } =
  wishListSlice.actions;

export default wishListSlice.reducer;
