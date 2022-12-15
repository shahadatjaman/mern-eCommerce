import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLocalstorage } from "../../../utils";

const initialState = {
  loading: false,
  rating: null,
  ratings: [],
};

// Create rating
export const createRating = createAsyncThunk(
  "vendor/createrating",
  async (values) => {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/vendor/createrating`,

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

// Remove rating
export const removeRating = createAsyncThunk(
  "vendor/removerating",
  async ({ product_id, closeModal }) => {
    try {
      let response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/vendor/removerating/${product_id}`,

        {
          method: "delete",
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );

      response.closeModal = closeModal;

      return response;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);

// Create ratings
export const getRatings = createAsyncThunk("vendor/getratings", async (id) => {
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/vendor/getratings/${id}`,

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
});

// Create ratings
export const getRating = createAsyncThunk(
  "vendor/getrating",
  async ({ product_id }) => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/vendor/getrating/${product_id}`,

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
      payload.closeModal();
      const { ratings } = payload.data;

      if (ratings) {
        state.ratings = ratings;
      }
    },
    [removeRating.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addRating } = ratingSlice.actions;

export default ratingSlice.reducer;
