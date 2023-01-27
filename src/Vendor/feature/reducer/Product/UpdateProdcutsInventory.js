import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callApi } from "../../../utils";

const initialState = {
  modalName: "",
  isOpen: false,
  loading: false,
  message: null,
  ok: false,
  close: true,
};

export const changeProductPrice = createAsyncThunk(
  "v3/update_product_price",
  async (values) => await callApi(values)
);

// Update products visibility
export const changeProductVisibility = createAsyncThunk(
  "v3/update_product_visibility",
  async (values) => await callApi(values)
);

const updateSlice = createSlice({
  name: "Upadate Product Inventory",
  initialState,
  reducers: {
    clsoeModal: (state) => {
      state.isOpen = false;
      state.modalName = "";
    },
    addModalName: (state, { payload }) => {
      state.modalName = payload;
      state.isOpen = true;
    },
    closeAlert: (state) => {
      state.close = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeProductPrice.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeProductPrice.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isOpen = false;

        state.message = payload.message;
        state.ok = payload.ok;
        state.close = false;
      })
      .addCase(changeProductPrice.rejected, (state) => {
        state.loading = false;
      })
      // Change products visibility
      .addCase(changeProductVisibility.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeProductVisibility.fulfilled, (state, { payload }) => {
        state.loading = false;

        state.message = payload.message;
        state.ok = true;
        state.close = false;
      })
      .addCase(changeProductVisibility.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { openModal, clsoeModal, addModalName, closeAlert } =
  updateSlice.actions;

export default updateSlice.reducer;
