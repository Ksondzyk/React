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
    name: "Tom",
    id: "id-2",
  },
  {
    age: 18,
    name: "Tad",
    id: "id-3",
  },
  {
    age: 45,
    name: "Sam",
    id: "id-4",
  },
];

ReactDOM.render(<UsersList users={users} />, elemRoot);
