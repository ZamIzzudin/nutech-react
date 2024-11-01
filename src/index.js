/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./utils/store";
import AppRouter from "./router";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
