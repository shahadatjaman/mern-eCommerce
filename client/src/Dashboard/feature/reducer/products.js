import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLocalstorage } from "../../../utils";

const initialState = {
  products: [],
  loading: false,
  selectedProductInfo: null,
  discount: null,
};

export const getProducts = createAsyncThunk("vendor/getproducts", async () => {
  try {
    let response = await axios.get(
      `http://localhost:5000/vendor/getproducts`,

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
export const getDiscount = createAsyncThunk(
  "vendor/getdiscount",
  async (product_id) => {
    try {
      let response = await axios.get(
        `http://localhost:5000/vendor/getdiscount/${product_id}`,

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

export const getProductSlice = createSlice({
  name: "getproducts",
  initialState,
  reducers: {
    addSelectedProductInfo: (state, { payload }) => {
      state.selectedProductInfo = payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
    },
    [getProducts.pending]: (state) => {
      state.loading = false;
    },
    [getDiscount.pending]: (state) => {
      state.loading = true;
    },
    [getDiscount.fulfilled]: (state, { payload }) => {
      const obj = Object.assign({}, ...payload.discount);
      state.discount = obj;
    },
    [getDiscount.pending]: (state) => {
      state.loading = false;
    },
  },
});

export const { addSelectedProductInfo } = getProductSlice.actions;

export default getProductSlice.reducer;
