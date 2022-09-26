import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentImage: null,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setImage(state, action) {},
  },
});
