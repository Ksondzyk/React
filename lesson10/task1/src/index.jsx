import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

const elementRoot = document.querySelector("#root");

ReactDOM.render(<App userId="github" />, elementRoot);
