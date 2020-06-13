import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Greeting from "./Greeting";

const elementRoot = document.querySelector("#root");

const userData = {
  firstName: "John",
  lastName: "Doe",
  birthDate() {
    const res =
      (new Date() - new Date("2001-01-01T11:11:11.819Z")) /
      1000 /
      60 /
      60 /
      24 /
      365.25;

    return Math.floor(res);
  },
};

ReactDOM.render(<Greeting user={userData} />, elementRoot);
