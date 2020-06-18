import React from "react";

const Online = (props) => {
  console.log(props);
  return <span className="status__text">{props.text}</span>;
};

export default Online;
