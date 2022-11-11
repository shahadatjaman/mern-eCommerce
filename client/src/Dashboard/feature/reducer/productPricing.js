import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discount: 0,
  price: 0,
};

const priceSlice = createSlice({
  name: "Price Slice",
  initialState,
  reducers: {
    handleDiscount: (state, { payload }) => {
      console.log(payload);
    },
    handlePrice: (state, { payload }) => {
      state.price = payload * 1;
    },
  },
});

export const { handleDiscount, handlePrice } = priceSlice.actions;

export default priceSlice.reducer;
