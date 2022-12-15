import { configureStore } from "@reduxjs/toolkit";

import wishListReducer from "./reducer/wishList/";

import productReducer from "./reducer/product";

import productDetailsReducer from "./reducer/productDetails";

import addToCartReducer from "./reducer/addToCart";

import userReducer from "./reducer/user/";

import productSliceReducer from "../feature/reducer/product/createProduct";

import priceReducer from "../feature/reducer/product/productPricing";

import productVariation from "../feature/reducer/product/productVariation";

import getProductReducer from "../feature/reducer/product/products";

import getInventoryReducer from "../feature/reducer/product/inventory";

import orderReducer from "../feature/reducer/order/index";

import ratingReducer from "../feature/reducer/product/rating";

import cateReducer from "../feature/reducer/categories/index";

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
    order: orderReducer,
    rating: ratingReducer,
    categories: cateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
