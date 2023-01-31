import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { callApi } from "../../../utils";

const initialState = {
  loading: false,
  category: null,
};

export const getCategory = createAsyncThunk(
  "get_category",
  async () =>
    await callApi({
      pathOne: "v1",
      pathTwo: "getcategories",
      method: "get",
    })
);
const categoriesSlice = createSlice({
  name: "Get Prodcut categories.",
  initialState,
  reducers: {
    addcategory: (state, { payload }) => {
      if (payload) {
        state.category = payload;
      }
    },
  },
  extraReducers: {
    [getCategory.pending]: (state) => {
      state.loading = true;
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      state.loading = false;

      if (payload.category) {
        state.category = payload.category;
        localStorage.setItem("cate__", JSON.stringify(payload.category));
      }
    },
    [getCategory.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addcategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
