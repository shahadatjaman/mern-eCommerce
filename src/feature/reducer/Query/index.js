import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../../utils";

const initialState = {
  isLoading: false,
  products: [],
  queryText: "",
  categoryId: null,
  grid: 5,
};

export const getQueryProducts = createAsyncThunk(
  "vendor/getProductss",
  async (props) => await callApi(props)
);

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    addProdcuts: (state, { payload }) => {
      state.products = payload.products;
    },
    addQueryText: (state, { payload }) => {
      state.queryText = payload.queryText;
    },
    addCategoryId: (state, { payload }) => {
      state.categoryId = payload.categoryId;
    },
  },
  extraReducers: {
    [getQueryProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getQueryProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      state.products = payload.products;
    },
    [getQueryProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addProdcuts, addCategoryId, addQueryText } = querySlice.actions;

export default querySlice.reducer;
