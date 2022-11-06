import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discount: 0,
};

const priceSlice = createSlice({
  name: "Price Slice",
  initialState,
  reducers: {
    handleDiscount: (state, { payload }) => {
      console.log(payload);
    },
  },
});

export const { handleDiscount } = priceSlice.actions;

export default priceSlice.reducer;
