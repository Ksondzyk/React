import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Greeting from "./Greeting";

const elementRoot = document.querySelector("#root");

// const user = {
//   firsName: "John",
//   lastName: "Doe",
//   birthDate() {
//     const birhdayDate = new Date("2001-01-01T11:11:11.819Z").getFullYear();
//     const dayNow = new Date().getFullYear();
//     const result = dayNow - birhdayDate;
//     return result;
//   },
// };

const user = {
  firsName: "John",
  lastName: "Doe",
  birthDate: "2001-01-01T11:11:11.819Z",
};
// const birhdayDate =
//   new Date().getFullYear() - new Date("2003-01-01T11:11:11.819Z").getFullYear();

ReactDOM.render(<Greeting user={user} />, elementRoot);
