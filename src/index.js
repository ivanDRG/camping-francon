import React from "react";
import ReactDOM from "react-dom";
import App from "./AppES.js";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
