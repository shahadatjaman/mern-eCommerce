import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { callApi } from "../../../utils";

const initialState = {
  product: null,
  variations: null,
  options: null,
  discount: null,
  isLoading: false,
  recentVariation: null,
  recentColor: null,
  recentSize: null,
  tags: null,
  rating: null,
};

// Fetch Single products
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (values) => await callApi(values)
);

const productDetailsSlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    getProduct: (state, { payload }) => {
      state.product = payload;
    },
    addRecentVariation: (state, { payload }) => {
      state.recentVariation = payload;
    },
    addRecentColor: (state, { payload }) => {
      state.recentColor = payload;
    },
    addRecentSize: (state, { payload }) => {
      state.recentSize = payload;
    },
  },
  extraReducers: {
    [fetchProduct.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [fetchProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.product = payload.product;
      state.variations = payload.variations;
      state.options = payload.options;
      state.discount = payload.discount;
      state.tags = payload.tags;
      console.log(payload.rating);
      state.rating = payload.rating;
    },
    [fetchProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const { getProduct, addRecentVariation, addRecentColor, addRecentSize } =
  productDetailsSlice.actions;

export default productDetailsSlice.reducer;
