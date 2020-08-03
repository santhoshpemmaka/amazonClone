import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StateProvider } from "./State/StateProvider";
import App from "./App";
import { initialState } from "./State/reducer";
import reducer from "./State/reducer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  rootElement
);
