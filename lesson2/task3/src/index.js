import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const elementRoot = document.querySelector("#root");

const renderSeconds = (time) => {
  const seconds = new Date(time).getSeconds();
  const backgroundColor = seconds % 2 === 0 ? "#fff" : "#000";
  const textColor = seconds % 2 !== 0 ? "#fff" : "#000";
  const styles = {
    color: textColor,
    backgroundColor,
  };

  const elemet = (
    <div className="seconds" style={styles}>
      {seconds}
    </div>
  );
  ReactDOM.render(elemet, elementRoot);
};
renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000);
