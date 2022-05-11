import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ViewTemplate from "../display/view/ViewTemplate";
import { getPagesThunk, getTextContentThunk } from "./mainSlice";
import get from "lodash/get";
import isEqual from "lodash/isEqual";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPagesThunk());
    dispatch(getTextContentThunk());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index element={<ViewTemplate />} />
        {/* @todo: Update ViewTemplate to component which will select between view or edit once edit is completed */}
        {/* Note: Since these are all using ViewTemplate, I feel that this could be simplified to one nested route */}
        {/* I am chosing not to structure the routes that way, though, because they are easier to read this way. */}
        {/* View Mode */}
        <Route path="/view" element={<ViewTemplate />}>
          {/* General Pages */}
          <Route path="about" element={<ViewTemplate />}>
            <Route path=":page" element={<ViewTemplate />} />
          </Route>
          {/* Class Pages */}
          <Route path="classes" element={<ViewTemplate />}>
            <Route path=":classId" element={<ViewTemplate />} />
          </Route>
          {/* Staff Pages */}
          <Route path="staff" element={<ViewTemplate />}>
            <Route path=":staffId" element={<ViewTemplate />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
