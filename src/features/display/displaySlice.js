import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

const initialState = {
  pages: [],
  textBlocks: [],
  dimensions: {
    height: 0,
    width: 0,
  },
};

// thunks
export const setPageData = (params, mode) => (dispatch) => {
  console.log("PARAMS", params);
  const pathObject = {};
  switch (mode) {
    case "view":
      pathObject.mode = "view";
      pathObject.class = params.class ? params.class : "classList";
      //   pathObject.id = params.id ? params.id : "1";
      break;
    default:
      pathObject.mode = "view";
    //   pathObject.type = "home";
  }
  console.log("path object", pathObject);
};

// async thunks
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

export const dispalySlice = createSlice({
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

  extraReducers: (builder) => {
    builder
      .addCase(getPagesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPagesThunk.fulfilled, (state, action) => {
        console.log("ACTION", action);
        state.status = "idle";
        state.pages = action.payload;
      })
      .addCase(getTextContentThunk.pending, (state) => {
        state.textBlocks = "loading";
      })
      .addCase(getTextContentThunk.fulfilled, (state, action) => {
        console.log("ACTION", action);
        state.status = "idle";
        state.textBlocks = action.payload;
      });
  },
});

export const { loadPages, setDimensions } = dispalySlice.actions;
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

export default dispalySlice.reducer;
