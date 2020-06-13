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

const birhdayDate = new Date("2001-01-01T11:11:11.819Z").getFullYear();
const dayNow = new Date().getFullYear();
const result = dayNow - birhdayDate;

ReactDOM.render(
  <Greeting firsName={"John"} lastName={"Doe"} birthDate={result} />,
  elementRoot
);
