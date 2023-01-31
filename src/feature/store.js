import { configureStore } from "@reduxjs/toolkit";

import wishListReducer from "./reducer/wishList/";

// New wish implement
import wishReducer from "./reducer/addWish/index";

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

import queryReducer from "../feature/reducer/Query/";

import authReducer from "../feature/reducer/user/auth";
import UpdateProdcutsInventory from "../Vendor/feature/reducer/Product/UpdateProdcutsInventory";
import categoryReducer from "../feature/reducer/category/";
import itemsReducer from "../feature/reducer/getProducts/index";

export const store = configureStore({
  reducer: {
    auth: authReducer,
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
    updateProduct: UpdateProdcutsInventory,
    order: orderReducer,
    rating: ratingReducer,
    categories: cateReducer,
    query: queryReducer,
    wish: wishReducer,
    getItems: itemsReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
