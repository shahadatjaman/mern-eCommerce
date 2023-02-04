import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { callApi, getLocalstorage } from "../../../utils";

const initialState = {
  discount: 0,
  price: 0,
  loading: false,
};

// Create a new product
export const createProductDiscount = createAsyncThunk(
  "vendor/creatediscount",
  async (values) => await callApi(values)
);

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
  extraReducers: {
    [createProductDiscount.pending]: (state) => {
      state.loading = true;
    },
    [createProductDiscount.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [createProductDiscount.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { handleDiscount, handlePrice } = priceSlice.actions;

export default priceSlice.reducer;
