import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const age = (birthDate) => {
  const YearMs = 31536000000;
  return Math.floor((new Date() - new Date(birthDate)) / YearMs);
};

const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${age(
        props.birthDate
      )} years old`}
    </div>
  );
};

export default Greeting;
