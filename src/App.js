import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Test from "./features/test/Test";
import ViewTemplate from "./features/display/view/ViewTemplate";

function App() {
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

export default App;
