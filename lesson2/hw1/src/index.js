import React from "react";
import ReactDOM from "react-dom";
import "./list.css";

const elementRoot = document.querySelector("#root");

const elemet = (
  <>
    <h1 className="title">Todo List</h1>
    <main className="todo-list">
      Name
      <div className="actions">
        <input className="task-input" type="text" />
        <button className="btn create-task-btn">Create</button>
      </div>
      <ul className="list"></ul>
    </main>
  </>
);
ReactDOM.render(elemet, elementRoot);
