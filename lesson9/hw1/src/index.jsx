import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UsersList from "./UsersList";

const elementRoot = document.querySelector("#root");
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
    id: "id-2",
  },
  {
    age: 26,
    name: "Rom",
    id: "id-3",
  },
  {
    age: 25,
    name: "Masha",
    id: "id-4",
  },
  {
    age: 24,
    name: "Vasia",
    id: "id-5",
  },
  {
    age: 20,
    name: "Ivan",
    id: "id-6",
  },
  {
    age: 30,
    name: "Kolia",
    id: "id-7",
  },
  {
    age: 32,
    name: "Katia",
    id: "id-8",
  },
  {
    age: 29,
    name: "Yaroslav",
    id: "id-9",
  },
];

ReactDOM.render(<UsersList users={users} />, elementRoot);
