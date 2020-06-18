import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Mainbox from "./Mailbox";

const elementRoot = document.querySelector("#root");

ReactDOM.render(<Mainbox unreadMessages={["a", "b"]} />, elementRoot);
