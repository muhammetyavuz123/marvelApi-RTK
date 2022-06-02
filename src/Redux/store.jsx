import { configureStore } from "@reduxjs/toolkit";
import marvelSlice from "./Slice/MarvelsSlice";
import comicSlice from "./Slice/ComicsSlice";

export const store = configureStore({
  reducer: {
    marvels: marvelSlice,
    comics: comicSlice,
  },
});
