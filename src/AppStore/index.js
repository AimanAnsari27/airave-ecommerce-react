import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Features/dataReducers.js";
import filterSlice from "../Features/filterReducers";
import categorySlice from "../Features/dataReducers.js";
export const store = configureStore({
  reducer: {
    products: productSlice,
    filters: filterSlice,
    categories: categorySlice,
  },
});
