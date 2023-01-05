import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLocalstorage } from "../../../utils";

const initialState = {
  loading: false,
  categories: null,
  curentCateId: null,
};

export const getCategories = createAsyncThunk(
  "vendor/getCategories",
  async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/v1/getcategories`,
        {
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );

      return response.data;
    } catch (error) {
      return await error.response.data;
    }
  }
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
