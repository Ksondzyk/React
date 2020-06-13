import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const formatDate = (date) => moment(date).format("YYYY");
const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.user.firsName} ${
        props.user.lastName
      }. I'm ${formatDate(props.user.birthDate)} years old`}
    </div>
  );
};

export default Greeting;
