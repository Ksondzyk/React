import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Page from "./App";

const elementRoot = document.querySelector("#root");

ReactDOM.render(<Page userId="github" />, elementRoot);
