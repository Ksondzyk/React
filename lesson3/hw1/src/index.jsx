import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Greeting from "./Greeting";

const elementRoot = document.querySelector("#root");

// const userData = {
//   firstName: "John",
//   lastName: "Doe",
//   birthDate() {
//     const YEAR_IN_MILLISECONDS = 31536000000;
//     return Math.floor(
//       (new Date() - new Date("2001-01-01T11:11:11.819Z")) / YEAR_IN_MILLISECONDS
//     );
//   },
// };

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={new Date("2001-01-01T11:11:11.819Z")}
  />,
  elementRoot
);
