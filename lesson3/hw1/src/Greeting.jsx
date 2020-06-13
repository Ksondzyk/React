import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.firsName} ${props.lastName}. I'm ${props.birthDate} years old`}
    </div>
  );
};

export default Greeting;
