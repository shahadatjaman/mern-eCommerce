import { configureStore } from "@reduxjs/toolkit";

import wishListReducer from "./reducer/wishList/";

export const store = configureStore({
  reducer: {
    wishList: wishListReducer,
  },
});
