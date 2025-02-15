import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./slices/portfolioSlice"; // Pastikan path benar

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Matikan jika ada non-serializable data
    }),
  devTools: process.env.NODE_ENV !== "production", // Aktif hanya di development
});

export default store;
