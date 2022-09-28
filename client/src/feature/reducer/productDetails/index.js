import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentImage: null,
};

const productDetailsSlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setImage(state, { payload }) {
      state.currentImage = payload;
    },
  },
});

export const { setImage } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
