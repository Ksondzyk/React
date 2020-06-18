import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Mainbox from "./Mainbox";

const elementRoot = document.querySelector("#root");

ReactDOM.render(<Mainbox unreadMessages={["a"]} />, elementRoot);
