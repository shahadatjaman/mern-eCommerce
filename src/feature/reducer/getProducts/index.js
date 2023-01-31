import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../../utils";

const loadings = {
  loading: false,
  loadingSlider: false,
  loadingProtective: false,
  loadingNewProducts: false,
  loadingMostViewed: false,
  loadingTopReview: false,
};

const initialState = {
  products: [],
  sliderProducts: null,
  protective: null,
  newProducts: null,
  mostViewed: null,
  topReviewed: null,
  grid: 5,
  ...loadings,
};

const paramsForProduct = {
  pathOne: "v3",
  pathTwo: "get_products",
  method: "post",
};

export const getProducts = createAsyncThunk(
  "get_products",
  async () =>
    await callApi({
      ...paramsForProduct,
      from: 0,
      to: 15,
    })
);

export const getProductsByCategoryId = createAsyncThunk(
  "get_products_by_category_id",
  async ({ category_id, to }) =>
    await callApi({
      ...paramsForProduct,
      values: { category_id },
      from: 0,
      to,
    })
);

export const getProductsByValues = createAsyncThunk(
  "get_products_by_product_name",
  async (values) =>
    await callApi({
      ...paramsForProduct,
      values: values,
      from: 0,
      to: 15,
    })
);

export const getSliderProdcuts = createAsyncThunk(
  "slider_products",
  async () =>
    await callApi({
      ...paramsForProduct,
      from: 0,
      to: 3,
    })
);

export const getProtectiveProducts = createAsyncThunk(
  "personal_protective_products",
  async (category_id) =>
    await callApi({
      ...paramsForProduct,
      values: { category_id },
      from: 0,
      to: 3,
    })
);

export const getNewProducts = createAsyncThunk(
  "new_products",
  async () =>
    await callApi({
      ...paramsForProduct,
      from: 0,
      to: 3,
    })
);

export const getMostViewed = createAsyncThunk(
  "most_viewed_products",
  async () =>
    await callApi({
      ...paramsForProduct,
      from: 2,
      to: 10,
    })
);

export const getTopReviewed = createAsyncThunk(
  "top_reviewed_products",
  async () =>
    await callApi({
      ...paramsForProduct,
      values: { topRating: 1 },
      from: 1,
      to: 2,
    })
);

const productSlice = createSlice({
  name: "get_product",
  initialState,
  reducers: {
    updateGirdSystem: (state, { payload }) => {
      state.grid = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        if (payload.products) {
          state.products = payload.products;
        }
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.loading = false;
      })

      //<===== Get products by category ID ======>
      .addCase(getProductsByCategoryId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsByCategoryId.fulfilled, (state, { payload }) => {
        if (payload.products) {
          state.products = payload.products;
        }
        state.loading = false;
      })
      .addCase(getProductsByCategoryId.rejected, (state, { payload }) => {
        state.loading = false;
      })

      //<===== Get products by product name ======>
      .addCase(getProductsByValues.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsByValues.fulfilled, (state, { payload }) => {
        if (payload.products) {
          state.products =
            payload.products.length === 0 ? null : payload.products;
        }
        state.loading = false;
      })
      .addCase(getProductsByValues.rejected, (state) => {
        state.loading = false;
      })

      //<===== Get slider products ======>
      .addCase(getSliderProdcuts.pending, (state) => {
        state.loadingSlider = true;
      })
      .addCase(getSliderProdcuts.fulfilled, (state, { payload }) => {
        state.loadingSlider = false;
        state.sliderProducts = payload.products;
      })
      .addCase(getSliderProdcuts.rejected, (state) => {
        state.loadingSlider = false;
      })

      // <===  Get Personal productive products
      .addCase(getProtectiveProducts.pending, (state) => {
        state.loadingProtective = true;
      })
      .addCase(getProtectiveProducts.fulfilled, (state, { payload }) => {
        state.loadingProtective = false;
        state.protective = payload.products;
      })
      .addCase(getProtectiveProducts.rejected, (state) => {
        state.loadingProtective = false;
      })

      // <===  Get New products
      .addCase(getNewProducts.pending, (state) => {
        state.loadingNewProducts = true;
      })
      .addCase(getNewProducts.fulfilled, (state, { payload }) => {
        state.loadingNewProducts = false;

        state.newProducts = payload.products;
      })
      .addCase(getNewProducts.rejected, (state) => {
        state.loadingNewProducts = false;
      })

      // <===  Get Most Viewed products
      .addCase(getMostViewed.pending, (state) => {
        state.loadingMostViewed = true;
      })
      .addCase(getMostViewed.fulfilled, (state, { payload }) => {
        state.loadingMostViewed = false;
        state.mostViewed = payload.products;
      })
      .addCase(getMostViewed.rejected, (state) => {
        state.loadingMostViewed = false;
      })

      // <===  Get Most Top Reviewed products
      .addCase(getTopReviewed.pending, (state) => {
        state.loadingTopReview = true;
      })
      .addCase(getTopReviewed.fulfilled, (state, { payload }) => {
        state.loadingTopReview = false;
        state.topReviewed = payload.products;
      })
      .addCase(getTopReviewed.rejected, (state) => {
        state.loadingTopReview = false;
      });
  },
});

export const { updateGirdSystem } = productSlice.actions;

export default productSlice.reducer;
