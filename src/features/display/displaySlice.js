import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cloneDeep from "lodash/cloneDeep";
import { useSelector } from "react-redux";

const initialState = {
  path: {},
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setPathObject: (state, action) => {
      state.path = action.payload;
    },
  },
});

// export those actions!
export const { setPathObject } = displaySlice.actions;

export const setPathData = (params, mode) => (dispatch) => {
  console.log("PARAMS", params);
  const pathObject = {};
  switch (mode) {
    case "view":
      pathObject.mode = "view";
      switch (params.pageType) {
        case "about":
          pathObject.pageType = params.pageType;
          pathObject.pageId = params.id ? params.id : undefined;
          break;
        case "classes":
          pathObject.pageType = params.pageType;
          pathObject.pageId = params.classId ? params.classId : "all";
          break;
        case "staff":
          pathObject.pageType = params.pageType;
          pathObject.pageId = params.staffId ? params.staffId : "all";
          break;
        default:
          pathObject.pageType = "about";
          pathObject.pageId = "home";
      }
      break;
    case "edit":
      pathObject.mode = "edit";
      break;
    default:
      pathObject.mode = "view";
  }
  dispatch(setPathObject(pathObject));
};

export default displaySlice.reducer;
