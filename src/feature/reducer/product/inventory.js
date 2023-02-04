import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callApi, getLocalstorage } from "../../../utils";

const initialState = {
  inventory: [],
  loading: false,
};

// Create a new Inventory
export const createInventory = createAsyncThunk(
  "vendor/inventory",
  async (values) => await callApi(values)
);

// Get Inventory
export const getInventories = createAsyncThunk(
  "vendor/inventory",
  async (values) => await callApi(values)
);

export const inventorySlice = createSlice({
  name: "getinventory",
  initialState,
  reducers: {},
  extraReducers: {
    [createInventory.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [createInventory.fulfilled]: (state, { payload }) => {},
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
