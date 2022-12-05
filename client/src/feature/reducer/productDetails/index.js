import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  product: null,
  variations: null,
  options: null,
  discount: null,
  isLoading: false,
  recentVariation: null,
  recentColor: null,
};

// Fetch Single products
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async ({ product_id }) => {
    try {
      //Your Axios code part.
      const response = await axios.get(
        `http://localhost:5000/vendor/getproduct/${product_id}`
      ); //where you want to fetch data

      return await response.data;
    } catch (error) {
      return console.log(error);
    }
  }
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
    },
    [fetchProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    },
  },
});

export const { getProduct, addRecentVariation, addRecentColor } =
  productDetailsSlice.actions;

export default productDetailsSlice.reducer;
