import { configureStore } from "@reduxjs/toolkit";

import wishListReducer from "./reducer/wishList/";

import productReducer from "./reducer/product";

import productDetailsReducer from "./reducer/productDetails";

import addToCartReducer from "./reducer/addToCart";

import userReducer from "./reducer/user/";

import productSliceReducer from "../Dashboard/feature/reducer/createProduct";

import priceReducer from "../Dashboard/feature/reducer/productPricing";

import productVariation from "../Dashboard/feature/reducer/productVariation";

import getProductReducer from "../Dashboard/feature/reducer/products";

import getInventoryReducer from "../Dashboard/feature/reducer/inventory";

export const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    product: productReducer,
    productDetails: productDetailsReducer,
    cart: addToCartReducer,
    user: userReducer,
    createproduct: productSliceReducer,
    pricing: priceReducer,
    variation: productVariation,
    getProducts: getProductReducer,
    inventory: getInventoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
