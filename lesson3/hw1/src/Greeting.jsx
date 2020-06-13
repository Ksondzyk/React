import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

// const formatDate = (date) => moment(date).format("YY") - new Date().getFullYear;
const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.user.firstName} ${
        props.user.lastName
      }. I'm ${props.user.birthDate()} years old`}
    </div>
  );
};

export default Greeting;
