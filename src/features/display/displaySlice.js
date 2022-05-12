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

export const setPathData = (location, params, mode) => (dispatch) => {
  const locationClone = cloneDeep(location);
  const locationArr = locationClone.pathname.slice(1).split("/");
  const pathObject = {};
  switch (mode) {
    case "view":
      pathObject.mode = "view";
      switch (locationArr[1]) {
        case "about":
          pathObject.type = locationArr[1];
          pathObject.page = params.page ? params.page : "home";
          break;
        case "classes":
          pathObject.type = locationArr[1];
          pathObject.id = params.classId ? params.classId : "";
          break;
        case "staff":
          pathObject.type = locationArr[1];
          pathObject.id = params.staffId ? params.staffId : "";
          break;
        default:
          pathObject.type = "about";
          pathObject.page = "home";
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
