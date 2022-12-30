import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { getLocalstorage, requestToServerWithPost } from "../../../utils";

const initialState = {
  productVariations: [],
  loading: false,
  variation: null,
};

// Create product files
export const createFileOrVariation = createAsyncThunk(
  "vendor/file",
  requestToServerWithPost({
    url: `${process.env.REACT_APP_SERVER_URL}/v1/productvariation`,
  })
);

// Create product files

export const removeVariation = createAsyncThunk(
  "vendor/removeVariation",
  requestToServerWithPost({
    url: `${process.env.REACT_APP_SERVER_URL}/v1/removevariation`,
  })
);

// Get Inventory
export const getVariation = createAsyncThunk(
  "vendor/getvariations",
  async ({ product_id }) => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/v1/getvariations/${product_id}`,

        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + getLocalstorage("accessToken"),
          },
        }
      );

      return await response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);

const variationSlice = createSlice({
  name: "variation",
  initialState,
  reducers: {
    removeFile: (state, { payload }) => {
      state.productVariations = payload;
    },
  },
  extraReducers: {
    // Create product variations
    [createFileOrVariation.pending]: (state) => {
      state.loading = true;
    },
    [createFileOrVariation.fulfilled]: (state, { payload }) => {
      state.productVariations = [...state.productVariations, payload.variation];
    },
    [createFileOrVariation.rejected]: (state) => {
      state.loading = false;
    },
    // Remove product variations
    [removeVariation.pending]: (state) => {
      state.loading = true;
    },
    [removeVariation.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
    },
    [removeVariation.rejected]: (state) => {
      state.loading = false;
    },

    // Get product variations
    [getVariation.pending]: (state) => {
      state.loading = true;
    },
    [getVariation.fulfilled]: (state, { payload }) => {
      if (payload.variants) {
        state.variation = payload.variants;
      }
    },
    [getVariation.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { removeFile } = variationSlice.actions;

export default variationSlice.reducer;
