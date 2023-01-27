import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalName: "",
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    clsoeModal: (state) => {
      state.isOpen = false;
    },
  },
});
