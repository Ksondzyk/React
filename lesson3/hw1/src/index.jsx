import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Greeting from "./Greeting";

const elementRoot = document.querySelector("#root");

const user = {
  firsName: "John",
  lastName: "Doe",
  age: 17,
};

ReactDOM.render(<Greeting user={user} />, elementRoot);
