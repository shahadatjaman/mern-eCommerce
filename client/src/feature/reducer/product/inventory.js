import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLocalstorage } from "../../../utils";

const initialState = {
  inventory: [],
  loading: false,
};

// Create a new Inventory
export const createInventory = createAsyncThunk(
  "vendor/inventory",
  async ({ values, product_id }) => {
    try {
      let response = await axios.post(
        `http://localhost:5000/vendor/inventory/${product_id}`,
        values,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );

      return await response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);

// Get Inventory
export const getInventories = createAsyncThunk(
  "vendor/inventory",
  async ({ product_id }) => {
    try {
      let response = await axios.get(
        `http://localhost:5000/vendor/getinventory/${product_id}`,

        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );

      return await response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);

export const inventorySlice = createSlice({
  name: "getinventory",
  initialState,
  reducers: {},
  extraReducers: {
    [createInventory.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [createInventory.fulfilled]: (state, { payload }) => {
      console.log(payload);
    },
    [createInventory.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    [getInventories.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getInventories.fulfilled]: (state, { payload }) => {
      state.inventory = payload.inventory;
    },
    [getInventories.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export default inventorySlice.reducer;
