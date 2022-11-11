import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLocalstorage } from "../../../utils";

const initialState = {
  alt_id: null,
  color: [],
  product: null,
  loading: false,
  productInit: {
    name: "",
    price: 0,
  },
  files: [],
};

// Product initial
export const createInitProduct = createAsyncThunk(
  "vendor/product",
  async (values, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/vendor/createemptyproduct`,

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

export const createFileOrOption = createAsyncThunk(
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

// Product variation options

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
  },
  extraReducers: {
    [createInitProduct.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [createInitProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
    },
    [createInitProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
    },

    // Create product variations
    [createFileOrOption.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [createFileOrOption.fulfilled]: (state, { payload }) => {
      state.files = [...state.files, payload.variation];
    },
    [createFileOrOption.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { createColor, createId } = productSlice.actions;

export default productSlice.reducer;
