import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../../utils";

const initialState = {
  isLoading: false,
  isError: false,
  products: null,
  product: null,
  featureProduct: null,
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

  async ({ category_id, pathOne, pathTwo, from, to, method }) => {
    return await callApi({
      _id: category_id,
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
      }
    },
    [getProductByCategory.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getProduct, getProducts } = productSlice.actions;

export default productSlice.reducer;
