import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.scss";

const birhdayDate = new Date("2001-01-01T11:11:11.819Z").getFullYear();
const dayNow = new Date().getFullYear();
const result = dayNow - birhdayDate;
const elementRoot = document.querySelector("#root");
const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.firsName} ${props.lastName}. I'm ${props.birthDate} years old`}
    </div>
  );
};

ReactDOM.render(
  <Greeting firsName={"John"} lastName={"Doe"} birthDate={result} />,
  elementRoot
);
// export default Greeting;
