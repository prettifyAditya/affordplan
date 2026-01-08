// store/frontendStore.js
import { configureStore } from "@reduxjs/toolkit";
import { metaAPISlice } from "./frontendSlice/metaAPISlice";
import { contactUsAPISlice } from "./backendSlice/contactUsAPISlice";
import { homeAPISlice } from "./backendSlice/homeAPISlice";
import { masterAPISlice } from "./backendSlice/masterAPISlice";
import { productAPISlice } from "./backendSlice/productAPISlice";

export const frontendStore = configureStore({
  reducer: {
    [metaAPISlice.reducerPath]: metaAPISlice.reducer,
    [contactUsAPISlice.reducerPath]: contactUsAPISlice.reducer,
    [homeAPISlice.reducerPath]: homeAPISlice.reducer,
    [masterAPISlice.reducerPath]: masterAPISlice.reducer,
    [productAPISlice.reducerPath]: productAPISlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      metaAPISlice.middleware,
      contactUsAPISlice.middleware,
      homeAPISlice.middleware,
      masterAPISlice.middleware,
      productAPISlice.middleware
    ),
});
