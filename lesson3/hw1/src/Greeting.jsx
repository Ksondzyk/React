import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const Greeting = (props) => {
  console.log(props);
  return (
    <div className="greeting">
      {`My name is ${props.user.firsName} ${props.user.lastName}. I'm 17 years old`}
    </div>
  );
};

export default Greeting;
