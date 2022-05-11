import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
  home: {},
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setPageData: {
      reducer: (state, action) => {
        state = action.payload;
      },
      prepare: (state) => {
        const pagesData = state.display.pages;
        console.log("PAGES DATA", pagesData);
        const id = 1;
        // return { payload: { id, text } };
      },
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getPagesThunk.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(getPagesThunk.fulfilled, (state, action) => {
  //       state.status = "idle";
  //       state.pages = action.payload;
  //     })
  //     .addCase(getTextContentThunk.pending, (state) => {
  //       state.textBlocks = "loading";
  //     })
  //     .addCase(getTextContentThunk.fulfilled, (state, action) => {
  //       state.status = "idle";
  //       state.textBlocks = action.payload;
  //     });
  // },
});

// export those actions!
export const { setPageData } = displaySlice.actions;
