import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ViewTemplate from "../display/view/ViewTemplate";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import useInitialData from "../../utilities/useInitialData";
import usePageData from "../../utilities/usePageData";
import EditTemplate from "../display/edit/EditTemplate";

function Main() {
  // get all of the initial data we need on state
  useInitialData();
  usePageData();
  return (
    <div className="App">
      <Routes>
        <Route index element={<ViewTemplate />} />
        {/* @todo: Update ViewTemplate to component which will select between view or edit once edit is completed */}
        {/* Note: Since these are all using ViewTemplate, I feel that this could be simplified to one nested route */}
        {/* I am chosing not to structure the routes that way, though, because they are easier to read this way. */}
        {/* View Mode */}
        <Route path="/view" element={<ViewTemplate />}>
          <Route path=":pageType" element={<ViewTemplate />}>
            <Route path=":id" element={<ViewTemplate />} />
          </Route>
          {/* General Pages */}
          {/* <Route path="about" element={<ViewTemplate />}>
            <Route path=":pageName" element={<ViewTemplate />} />
          </Route> */}
          {/* Newsletters */}
          {/* <Route path="newsletters" element={<ViewTemplate />}>
            <Route path=":newsletterId" element={<ViewTemplate />} />
          </Route> */}
          {/* Announcements */}
          {/* <Route path="announcements" element={<ViewTemplate />}>
            <Route path=":announcementId" element={<ViewTemplate />} />
          </Route> */}
          {/* Class Pages */}
          {/* <Route path="classes" element={<ViewTemplate />}>
            <Route path=":classId" element={<ViewTemplate />} />
          </Route> */}
          {/* Staff Pages */}
          {/* <Route path="staff" element={<ViewTemplate />}>
            <Route path=":staffId" element={<ViewTemplate />} />
          </Route> */}
        </Route>
        <Route path="/edit" element={<EditTemplate />}></Route>
      </Routes>
    </div>
  );
}

export default Main;
