import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const Greeting = (props) => {
  console.log(props);
  return (
    <div className="greeting">
      {`My name is ${props.user.firsName} ${
        props.user.lastName
      }. I'm ${props.user.birthDate()} years old`}
    </div>
  );
};

export default Greeting;
