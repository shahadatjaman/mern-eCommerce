import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alt_id: null,
  color: [],
};

export const productSlice = createSlice({
  name: "Product_option",
  initialState,
  reducers: {
    createColor: (state, { payload }) => {
      state.color = [...state.color, payload];
    },
    createId: (state, { payload }) => {
      state.alt_id = payload;
    },
  },
});

export const { createColor, createId } = productSlice.actions;

export default productSlice.reducer;
