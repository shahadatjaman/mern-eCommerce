import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  requestToServerWithGet,
  requestToServerWithPost,
} from "../../../utils";

const init = {
  name: "",
  price: 0,
  short_desc: "",
};

const initialState = {
  alt_id: null,
  color: [],
  product: null,
  loading: false,
  productInit: init,
  allCategories: null,
  tags: [],
  productFormState: {},
};

// Product initial
export const createInitProduct = createAsyncThunk(
  "vendor/product",
  requestToServerWithGet({
    url: `${process.env.REACT_APP_SERVER_URL}/vendor/createemptyproduct`,
  })
);

// Create a new product
export const createProduct = createAsyncThunk(
  "vendor/newproduct",
  requestToServerWithPost({
    url: `${process.env.REACT_APP_SERVER_URL}/vendor/createproduct`,
  })
);

// get product all categories
export const fetchAllCategories = createAsyncThunk(
  "vendor/getCategories",
  requestToServerWithGet({
    url: `${process.env.REACT_APP_SERVER_URL}/vendor/getcategories`,
  })
);

// Create tags
export const createTags = createAsyncThunk(
  "vendor/createtag",
  requestToServerWithPost({
    url: `${process.env.REACT_APP_SERVER_URL}/vendor/createtag`,
  })
);

// Delete or remove tag
export const deleteTag = createAsyncThunk(
  "vendor/deletetag",
  requestToServerWithPost({
    url: `${process.env.REACT_APP_SERVER_URL}/vendor/romvetag`,
  })
);

// Product Silce
export const productSlice = createSlice({
  name: "Product_option",
  initialState,
  reducers: {
    createColor: (state, { payload }) => {
      state.color = [...state.color, payload];
    },
    createId: (state, { payload }) => {
      state.alt_id = payload;
    },
    addProductOrganizeState: (state, { payload }) => {
      state.productFormState = {
        ...state.productFormState,
        ...payload,
      };
    },
    addProductFormState: (state, { payload }) => {
      state.productFormState = {
        ...state.productFormState,
        ...payload,
      };
    },
    addTag: (state, { payload }) => {
      state.tags = [...state.tags, payload];
    },
    removeTag: (state, { payload }) => {
      state.tags = payload;
    },
  },
  extraReducers: {
    [createInitProduct.pending]: (state) => {
      state.loading = true;
    },
    [createInitProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.product = payload.product;
    },
    [createInitProduct.rejected]: (state) => {
      state.loading = false;
    },

    // get product all categories
    [fetchAllCategories.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllCategories.fulfilled]: (state, { payload }) => {
      state.allCategories = payload.category;
    },
    [fetchAllCategories.rejected]: (state) => {
      state.loading = false;
    },

    // Create a product
    [createProduct.pending]: (state) => {
      state.loading = true;
    },
    [createProduct.fulfilled]: (state, { payload }) => {
      console.log(payload);
    },
    [createProduct.rejected]: (state) => {
      state.loading = false;
    },

    [createTags.pending]: (state) => {
      state.loading = true;
    },
    [createTags.fulfilled]: (state, { payload }) => {
      state.tags = [...state.tags, payload.tag];
    },
    [createTags.rejected]: (state) => {
      state.loading = false;
    },
    [deleteTag.pending]: (state) => {
      state.loading = true;
    },
    [deleteTag.fulfilled]: (state, { payload }) => {
      console.log(payload);
    },
    [deleteTag.pending]: (state) => {
      state.loading = false;
    },
  },
});

export const {
  createColor,
  createId,
  addProductOrganizeState,
  addTag,
  removeTag,
  addProductFormState,
  removeFile,
} = productSlice.actions;

export default productSlice.reducer;
