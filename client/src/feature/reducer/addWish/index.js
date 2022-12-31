import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  wishes: null,
};

const wishSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addNewWish: (state, { payload }) => {
      state.wishes = payload.wish;
    },
    removeWish: (state, { payload }) => {
      state.wishes = payload.wish;
    },
  },
});

export const { addNewWish, removeWish } = wishSlice.actions;

export default wishSlice.reducer;
