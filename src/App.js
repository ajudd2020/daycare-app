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
        <Route path="/view">
          <Route path=":class" element={<ViewTemplate />} />
        </Route>
        {/* <Route exact path="/" element={<ViewTemplate />} />
        <Route exact path="/:mode/:type/:id" element={<ViewTemplate />} />
        <Route exact path="/:mode/:type" element={<ViewTemplate />} />
        <Route exact path="/:mode" element={<ViewTemplate />} /> */}
      </Routes>
    </div>
  );
}

export default App;
