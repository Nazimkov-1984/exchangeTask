import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Modal from "./components/modal/Modal";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../src/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: counterSlice.reducer,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {ReactDOM.createPortal(<Modal />, document.getElementById("modal"))}
    </Provider>
  </React.StrictMode>
);
