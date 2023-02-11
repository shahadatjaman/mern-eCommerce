import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { callApi, removeLocalstorage } from "../../../utils";
import { tostify } from "../../../utils/toastify";

const initialState = {
  isLoading: false,
  isError: false,
  products: null,
  newOrder: null,
  orders: null,
};

export const createOrder = createAsyncThunk(
  "v2/createneworder",
  async (values) => {
    const res = await callApi(values);
    if (values.navigate) {
      res.navigate = values.navigate;
    }
    return res;
  }
);

export const getOrder = createAsyncThunk(
  "v2/getorder",
  async (values) => await callApi(values)
);
export const getOrders = createAsyncThunk("v2/getorders", async () => {
  return await callApi({
    pathOne: "v2",
    pathTwo: "getorders",
    method: "get",
  });
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state) => {},
  },
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      const { navigate } = payload;
      state.isLoading = false;
      state.newOrder = payload.order;
      removeLocalstorage("carts");
      if (payload.order) {
        tostify("Your has order has been created!");
        navigate(`/order_success/${payload.order._id}`);
      }
    },
    [createOrder.rejected]: (state) => {
      state.isLoading = false;
    },

    // Get order
    [getOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrder.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload.order) {
        state.newOrder = payload.order;
      }
    },
    [getOrder.rejected]: (state) => {
      state.isLoading = false;
    },
    // Get orders
    [getOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      if (payload.orders) {
        state.orders = payload.orders;
      }
    },
    [getOrders.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;
