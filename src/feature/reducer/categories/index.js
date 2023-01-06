import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { callApi } from "../../../utils";

const initialState = {
  loading: false,
  categories: null,
  curentCateId: null,
};

export const getCategories = createAsyncThunk(
  "vendor/getCategories",
  async (values) => callApi(values)
);

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addRecentCate: (state, { payload }) => {
      state.curentCateId = payload;
    },
  },

  extraReducers: {
    [getCategories.pending]: (state) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.category) {
        state.categories = payload.category;
      }
    },
    [getCategories.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addRecentCate } = categoriesSlice.actions;

export default categoriesSlice.reducer;
