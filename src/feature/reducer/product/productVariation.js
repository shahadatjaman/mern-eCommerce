import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { callApi, getLocalstorage } from "../../../utils";

const initialState = {
  productVariations: [],
  loading: false,
  variation: null,
  options: {},
  isLoadOption: false,
};

// Create product files by url
export const createFileOrVariation = createAsyncThunk(
  "v2/file",
  async (values) => await callApi(values)
);

// Upload product files
export const uploadFile = createAsyncThunk(
  "v2/upload",
  async (values) => await callApi(values)
);

// Remove product variation
export const removeVariation = createAsyncThunk(
  "vendor/removeVariation",
  async (values) => await callApi(values)
);

// Create variation option
export const createVariationOption = createAsyncThunk(
  "vendor/createoptions",
  async (values) => await callApi(values)
);

// Get variations
export const getVariation = createAsyncThunk(
  "vendor/getvariations",
  async (values) => await callApi(values)
);

// Get options
export const getOptions = createAsyncThunk(
  "vendor/getoptions",
  async ({ variation_id }) => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/v1/getoptions/${variation_id}`,

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
    getVariations: (state, { payload }) => {
      state.productVariations = payload;
    },
    resetVariations: (state) => {
      state.productVariations = [];
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
    // Upload file
    [uploadFile.pending]: (state) => {
      state.loading = true;
    },
    [uploadFile.fulfilled]: (state, { payload }) => {
      state.loading = false;

      if (payload.variation) {
        state.productVariations = [
          ...state.productVariations,
          payload.variation,
        ];
      }
    },
    [uploadFile.rejected]: (state) => {
      state.loading = false;
    },
    // Remove product variations
    [removeVariation.pending]: (state) => {
      state.loading = true;
    },
    [removeVariation.fulfilled]: (state, { payload }) => {
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
    // Create product variation option
    [createVariationOption.pending]: (state) => {
      state.isLoadOption = true;
    },
    [createVariationOption.fulfilled]: (state, { payload }) => {
      state.isLoadOption = false;

      if (payload.createdOption) {
        if (Object.keys(state.options).length !== 0) {
          state.options = [...state.options, payload.createdOption];
        } else {
          state.options = [payload.createdOption];
        }
      }
    },
    [createVariationOption.rejected]: (state) => {
      state.isLoadOption = false;
    },
    [getOptions.pending]: (state) => {
      state.loading = true;
    },
    [getOptions.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.options = payload.options;
    },
    [getOptions.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { removeFile, getVariations, resetVariations } =
  variationSlice.actions;

export default variationSlice.reducer;
