import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { daycareTheme } from "./styles";
import Main from "./features/main/Main";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  //@Todo: Had to remove StictMode due to problems with Quill.js
  // Look for new library or keep checking for updates
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={daycareTheme}>
        <Main />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
