import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Greeting from "./Greeting";

const elementRoot = document.querySelector("#root");

const userData = {
  firstName: "John",
  lastName: "Doe",
  birthDate() {
    return (
      new Date().getFullYear() -
      new Date("1991-01-17T11:11:11.819Z").getFullYear()
    );
  },
};

ReactDOM.render(<Greeting user={userData} />, elementRoot);
