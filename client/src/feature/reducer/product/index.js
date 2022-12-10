import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  products: null,
  product: null,
  featureProduct: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/vendor/getproducts`
      );

      return await response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);

/**
 *
 * @param {_id} category_id
 * @param {from} from
 * @param {to} to
 */

export const getProductByCategory = createAsyncThunk(
  "products/getProductByCat",

  async ({ category_id, from, to }) => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/vendor/getproducts/${category_id}/${from}-${to}`
      );

      return await response.data;
    } catch (error) {
      return await error.response.data.errors;
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

    // Get product by categoy
    [getProductByCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductByCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      if (payload.products) {
        state.featureProduct = payload.products;
      }
    },
    [getProductByCategory.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getProduct, getProducts } = productSlice.actions;

export default productSlice.reducer;
