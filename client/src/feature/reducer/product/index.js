import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../../utils";

const initialState = {
  isLoading: false,
  isError: false,
  products: null,
  product: null,
  featureProduct: null,
  filteredProducts: null,
  grid: 5,
  recentCategoryId: "",
  recentPriceRang: [0, 1000],
  recentSortedId: "",
  recentSortedQuery: "",
  queryValue: "",
  clear: false,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ pathOne, pathTwo, from, to, method }) =>
    await callApi({ pathOne, pathTwo, from, to, method })
);

/**
 *
 * @param {_id} category_id
 * @param {from} from
 * @param {to} to
 */

export const getProductByCategory = createAsyncThunk(
  "products/getProductByCat",

  async ({ values, pathOne, pathTwo, from, to, method }) => {
    return await callApi({
      values,
      pathOne,
      pathTwo,
      from,
      to,
      method,
    });
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
    addFilterdProducts: (state, { payload }) => {
      state.filteredProducts = payload.products;
      console.log(payload);
    },
    addGrid: (state, { payload }) => {
      state.grid = payload.grid;
    },
    addRecentCategory: (state, { payload }) => {
      state.recentCategoryId = payload._id;
    },
    addRecentRange: (state, { payload }) => {
      state.recentPriceRang = payload.rang;
    },
    addQueryValue: (state, { payload }) => {
      state.queryValue = payload.value;
    },
    addRecentSortedId: (state, { payload }) => {
      state.recentSortedId = payload;
    },
    addRecentSortedQuery: (state, { payload }) => {
      state.recentSortedQuery = payload;
    },
    clearAction: (state, { payload }) => {
      state.clear = payload.clear;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
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
        state.filteredProducts = payload.products;
      }
    },
    [getProductByCategory.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getProduct,
  getProducts,
  addGrid,
  addRecentCategory,
  addRecentRange,
  addFilterdProducts,
  addQueryValue,
  addRecentSortedId,
  addRecentSortedQuery,
  clearAction,
} = productSlice.actions;

export default productSlice.reducer;
