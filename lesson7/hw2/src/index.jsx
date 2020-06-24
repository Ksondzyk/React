import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UsersList from "./UsersList";

const elemRoot = document.querySelector("#root");
const users = [
  {
    age: 21,
    name: "Bob",
    id: "id-0",
  },
  {
    age: 17,
    name: "Tom",
    id: "id-1",
  },

  {
    age: 18,
    name: "Tad",
    id: "id-3",
  },
  {
    age: 26,
    name: "Rom",
    id: "id-3",
  },
  {
    age: 25,
    name: "Masha",
    id: "id-3",
  },
  {
    age: 24,
    name: "Vasia",
    id: "id-3",
  },
  {
    age: 20,
    name: "Ivan",
    id: "id-3",
  },
  {
    age: 30,
    name: "Kolia",
    id: "id-3",
  },
  {
    age: 32,
    name: "Katia",
    id: "id-3",
  },
  {
    age: 29,
    name: "Yaroslav",
    id: "id-3",
  },
];

ReactDOM.render(<UsersList users={users} />, elemRoot);
