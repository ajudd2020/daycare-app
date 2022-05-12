import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cloneDeep from "lodash/cloneDeep";
import { useSelector } from "react-redux";

const initialState = {
  pageData: [],
  textBlocks: [],
  dimensions: {
    height: 0,
    width: 0,
  },
};

// async thunks for doing all the async things.
// These will use different reducers, which will check the status of the thunk itself. When running, it will be "pending". When it returns the payload, it will be "idle". This will trigger the reducer to update state.
export const getPagesThunk = createAsyncThunk("api/pages", async () => {
  const response = await axios.get("/api/pages");
  return response.data;
});

export const getTextContentThunk = createAsyncThunk(
  "api/textBlocks",
  async () => {
    const response = await axios.get("/api/textBlocks");
    return response.data;
  }
);

// the slice aka the heart and soul of the store
// this is where the reducer is created along with the actions that will update said reducer.
// This is probably the biggest difference from the old redux. The actions are now defined inside of the reducer, instead of needing to constantly type repeated code. It does away with all that fun UPPER CASE stuff I'm sure you love as much as I do.
export const displaySlice = createSlice({
  name: "display",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setDimensions: (state, action) => {
      state.dimensions.height = action.payload.height;
      state.dimensions.width = action.payload.width;
    },
    test: {
      reducer: (state, action) => {
        state.push(action);
      },
      prepare: (text) => {
        const id = 1;
        return { payload: { id, text } };
      },
    },
  },

  // These are the fun extra reducers that handle our async thunks. They will decide what to do with the payload once the thunk is done.
  extraReducers: (builder) => {
    builder
      .addCase(getPagesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPagesThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.pageData = action.payload;
      })
      .addCase(getTextContentThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTextContentThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.textBlocks = action.payload;
      });
  },
});

// export those actions!
export const { setDimensions } = displaySlice.actions;

// thunks, just like the thunks we all know and love.
// These do not return an action, they return a function. The function takes in dispatch so it can dispatch an action (or another thunk) to send along to the reducer
export const setPageData = () => async (dispatch) => {
  // const test = await dispatch(getPagesThunk());
  // const test2 = await dispatch(getTextContentThunk());
  console.log("PREPARING");
};

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default displaySlice.reducer;
