import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import displayReducer from "../features/display/displaySlice";
import mainReducer from "../features/main/mainSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    display: displayReducer,
    initialLoadData: mainReducer,
  },
});
