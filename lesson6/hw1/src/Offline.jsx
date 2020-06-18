import React from "react";

const Offline = (props) => {
  console.log(props);
  return <span className="status__text">{props.text}</span>;
};

export default Offline;
