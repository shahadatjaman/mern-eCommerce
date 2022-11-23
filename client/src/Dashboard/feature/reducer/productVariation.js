import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getLocalstorage } from "../../../utils";

const initialState = { productVariations: [], loading: false };

// Create product files
export const createFileOrVariation = createAsyncThunk(
  "vendor/file",
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/vendor/productvariation`,
        values,

        {
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );
      return response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);

// Create product files

export const removeVariation = createAsyncThunk(
  "vendor/removeVariation",
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/vendor/removevariation`,
        values,

        {
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );
      return response.data;
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
  },
});

export const { removeFile } = variationSlice.actions;

export default variationSlice.reducer;
