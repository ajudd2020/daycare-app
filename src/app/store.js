import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "../features/display/displaySlice";
import mainReducer from "../features/main/mainSlice";

export const store = configureStore({
  reducer: {
    display: displayReducer,
    initialLoadData: mainReducer,
  },
});
