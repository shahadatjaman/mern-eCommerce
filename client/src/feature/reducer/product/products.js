import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callApi, getLocalstorage } from "../../../utils";

const initialState = {
  products: [],
  loading: false,
  selectedProductInfo: null,
  discount: null,
  healthyProducts: null,
};

export const getHealthProduct = createAsyncThunk(
  "vendor/gethealthyproducts",
  async ({ _id, from, to }) => {
    return await callApi({
      _id,
      pathOne: "vendor",
      pathTwo: "getproducts",
      method: "get",
      from,
      to,
    });
  }
);

export const getProducts = createAsyncThunk(
  "vendor/getproducts",
  async ({ pathOne, pathTwo, from, to, method }) =>
    await callApi({ pathOne, pathTwo, from, to, method })
);

// requestToServerWithGet({
//   url: `${process.env.REACT_APP_SERVER_URL}/vendor/getproducts`,
// })

export const getDiscount = createAsyncThunk(
  "vendor/getdiscount",
  async ({ product_id }) => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/vendor/getdiscount/${product_id}`,

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

export const deleteProduct = createAsyncThunk(
  "vendor/deleteproduct",
  async ({ product_id }) => {
    try {
      let response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/vendor/deleteproduct/${product_id}`,

        {
          method: "DELETE",
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

    // get product discount
    [getDiscount.pending]: (state) => {
      state.loading = true;
    },
    [getDiscount.fulfilled]: (state, { payload }) => {
      const obj = Object.assign({}, ...payload.discount);
      state.discount = obj;
      console.log(payload);
    },
    [getDiscount.pending]: (state) => {
      state.loading = false;
    },
    // DELETE products
    [deleteProduct.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
    },
    [deleteProduct.rejected]: (state, { payload }) => {
      state.loading = false;
    },

    // Get healthy products
    [getHealthProduct.pending]: (state) => {
      state.loading = true;
    },
    [getHealthProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;

      state.healthyProducts = payload.products;
    },
    [getHealthProduct.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addSelectedProductInfo } = getProductSlice.actions;

export default getProductSlice.reducer;
