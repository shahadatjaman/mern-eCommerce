import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callApi, getLocalstorage } from "../../../utils";

const initialState = {
  loading: false,
  rating: null,
  ratings: [],
};

// Create rating
export const createRating = createAsyncThunk(
  "vendor/createrating",
  async (values) => await callApi(values)
);

// Remove rating
export const removeRating = createAsyncThunk(
  "vendor/removerating",
  async (values) => {
    const res = await callApi(values);
    if (values.closeModal) {
      res.closeModal = values.closeModal;
    }
    return res;
  }
);

// Create ratings
export const getRatings = createAsyncThunk(
  "v1/getratings",
  async (values) => await callApi(values)
);

// Create ratings
export const getRating = createAsyncThunk(
  "v1/getrating",
  async (values) => await callApi(values)
);

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    addRating: (state, { payload }) => {
      // console.log(payload);
    },
  },
  extraReducers: {
    [createRating.pending]: (state) => {
      state.loading = true;
    },
    [createRating.fulfilled]: (state, { payload }) => {
      state.loading = false;

      if (payload && payload.productRating) {
        state.ratings = payload.productRating;
      }
    },
    [createRating.rejected]: (state) => {
      state.loading = false;
    },

    // GET Ratings
    [getRatings.pending]: (state) => {
      state.loading = true;
    },
    [getRatings.fulfilled]: (state, { payload }) => {
      state.loading = false;

      if (payload && payload.ratings) {
        state.ratings = payload.ratings;
      }
    },
    [getRatings.pending]: (state) => {
      state.loading = false;
    },

    // Get Rating
    [getRating.pending]: (state) => {
      state.loading = true;
    },
    [getRating.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload && payload.rating) {
        state.rating = payload.rating;
      }
    },
    [getRating.rejected]: (state) => {
      state.loading = false;
    },

    // Remove rating
    [removeRating.pending]: (state) => {
      state.loading = true;
    },
    [removeRating.fulfilled]: (state, { payload }) => {
      state.loading = false;

      const { ratings } = payload;

      if (ratings) {
        state.ratings = ratings;
      }
      payload.closeModal();
    },
    [removeRating.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addRating } = ratingSlice.actions;

export default ratingSlice.reducer;
