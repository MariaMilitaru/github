import { configureStore } from "@reduxjs/toolkit";
import reposReducer from "../slices/githubSlices";

const store = configureStore({
  reducer: {
    repos: reposReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
