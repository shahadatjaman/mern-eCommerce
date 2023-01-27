import { configureStore } from "@reduxjs/toolkit";

import productSliceReducer from "./reducer/Product/createProduct";

import priceReducer from "./reducer/Product/productPricing";

import productVariation from "./reducer/Product/productVariation";

import getProductReducer from "./reducer/Product/products";

import getInventoryReducer from "./reducer/Product/inventory";

import loginReducer from "../feature/reducer/user/";

import updateProductPriceSlice from "../feature/reducer/Product/UpdateProdcutsInventory";

export const store = configureStore({
  reducer: {
    createproduct: productSliceReducer,
    pricing: priceReducer,
    variation: productVariation,
    getProducts: getProductReducer,
    inventory: getInventoryReducer,
    updateProduct: updateProductPriceSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
