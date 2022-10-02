import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  product: null,
  isLoading: false,
  selectedProduct: null,
  dimension: null,
};

// Fetch products
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    try {
      //Your Axios code part.
      const response = await axios.get(
        `http://localhost:5000/api/product/${id}`
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
    getSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
    getDimension: (state, { payload }) => {
      state.dimension = payload;
    },
  },
  extraReducers: {
    [fetchProduct.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [fetchProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.product = payload.product;
    },
    [fetchProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    },
  },
});

export const { getProduct, getSelectedProduct, getDimension } =
  productDetailsSlice.actions;

export default productDetailsSlice.reducer;
