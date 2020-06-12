import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

const rootElem = document.querySelector("#root");

const element = (
  <>
    <h1>Search From</h1>
    <div>
      <input type="text" />
      <button>Sumbit</button>
    </div>
  </>
);

ReactDOM.render(element, rootElem);
