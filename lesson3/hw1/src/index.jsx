import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Greeting from "./Greeting";

const elementRoot = document.querySelector("#root");

const userData = {
  firstName: "John",
  lastName: "Doe",
  birthDate() {
    const now = new Date(); //Текущя дата
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    const dob = new Date("2001-01-01T11:11:11.819Z"); //Дата рождения
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    let age; //Возраст

    //Возраст = текущий год - год рождения
    age = today.getFullYear() - dob.getFullYear();
    //Если ДР в этом году ещё предстоит, то вычитаем из age один год
    if (today < dobnow) {
      age = age - 1;
    }
    return age;
  },
};

ReactDOM.render(<Greeting user={userData} />, elementRoot);
