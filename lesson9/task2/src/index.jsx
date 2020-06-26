import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

const elementRoot = document.querySelector("#root");
const user = { name: "roman", age: 27 };

ReactDOM.render(<App user={user} />, elementRoot);
