import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { callApi, deepClone } from "../../../utils";

const initialState = {
  products: [],
  paginatedProducts: [],
  loading: false,
  selectedProductInfo: null,
  discount: null,
  paginationStatus: null,
  // Selected products
  selectedProducts: null,
  // Root selecte is true or false
  isAllChecked: false,
  healthyProducts: null,
};

export const getHealthProduct = createAsyncThunk(
  "vendor/gethealthyproducts",
  async ({ _id, from, to }) => {
    return await callApi({
      _id,
      pathOne: "vendor",
      pathTwo: "getproducts",
      method: "get",
      from,
      to,
    });
  }
);

export const getProducts = createAsyncThunk(
  "vendor/getproductss",
  async (values) => await callApi(values)
);

// Delete product
export const deleteProduct = createAsyncThunk(
  "vendor/deleteproduct",
  async (values) => await callApi(values)
);

// Delete products
export const deleteProducts = createAsyncThunk(
  "v3/delete",
  async (values) => await callApi(values)
);

// Get searched products
export const getSerchedProducts = createAsyncThunk(
  "v1/searched_products",
  async (values) => await callApi(values)
);

export const getProductSlice = createSlice({
  name: "getproducts",
  initialState,
  reducers: {
    addSelectedProductInfo: (state, { payload }) => {
      state.selectedProductInfo = payload;
    },
    addPagination: (state, { payload }) => {
      state.paginationStatus = payload;
    },
    addPaginatedProducts: (state, { payload }) => {
      state.paginatedProducts = payload;
    },
    getFilteredProducts: (state, { payload }) => {
      state.products = payload;
    },
    // Add all selected products
    addSelelectedPorducts: (state, { payload }) => {
      state.selectedProducts = payload;
    },
    // Set root select value,
    isAllProductChecked: (state, { payload }) => {
      state.isAllChecked = payload;
    },

    // Add single checked product, if arleady exist then remove or add
    addAsSelectProduct: (state, { payload }) => {
      const oldState = deepClone(state.selectedProducts);

      if (oldState) {
        const findIndex = oldState.findIndex((val) => val === payload);

        if (findIndex > -1) {
          const removed = oldState.filter((val) => val !== payload);

          state.selectedProducts = removed;
        } else {
          state.selectedProducts = [...state.selectedProducts, payload];
        }
      }
    },

    // Update products visibility
    updateProductVisibility: (state, { payload }) => {
      state.products = payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;

      if (payload.products) {
        state.products = payload.products;
      }
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
    },

    // Get healthy products
    [getHealthProduct.pending]: (state) => {
      state.loading = true;
    },
    [getHealthProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;

      state.healthyProducts = payload.products;
    },
    [getHealthProduct.rejected]: (state) => {
      state.loading = false;
    },

    [deleteProduct.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [deleteProduct.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    [deleteProducts.pending]: (state) => {
      state.loading = true;
    },
    [deleteProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;

      if (payload.products) {
        state.products = payload.products;
      }
    },
    [deleteProducts.rejected]: (state) => {
      state.loading = false;
    },
    // Get serached products
    [getSerchedProducts.pending]: (state) => {
      state.loading = true;
    },
    [getSerchedProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;

      if (payload.products) {
        state.products = payload.products;
      }
    },
    [getSerchedProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addSelectedProductInfo,
  addPagination,
  addPaginatedProducts,
  getFilteredProducts,
  addSelelectedPorducts,
  isAllProductChecked,
  addAsSelectProduct,
  updateProductVisibility,
} = getProductSlice.actions;

export default getProductSlice.reducer;
