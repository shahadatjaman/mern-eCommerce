import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  products: null,
  product: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      //Your Axios code part.
      const response = await axios.get(`http://localhost:5000/api/products`); //where you want to fetch data

      return await response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, { payload }) => {
      state.products = payload;
    },
    getProduct: (state, { payload }) => {
      state.products = payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload && payload.products) {
        state.products = payload.products;
      }
    },
    [fetchProducts.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const { getProduct, getProducts } = productSlice.actions;

export default productSlice.reducer;
