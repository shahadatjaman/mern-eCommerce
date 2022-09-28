import { configureStore } from "@reduxjs/toolkit";

import wishListReducer from "./reducer/wishList/";

import productReducer from "./reducer/product";

import productDetailsReducer from "./reducer/productDetails";

export const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    product: productReducer,
    productDetails: productDetailsReducer,
  },
});
