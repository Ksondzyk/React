import React, { Component } from "react";

class UserForm extends Component {
  state = {
    userData: {
      firstName: "Tom",
      lastName: "Form",
    },
  };

  render() {
    return (
      <form className="user-form">
        <input type="text" name="firstName" className="user-form__input" />
        <input type="text" name="lastName" className="user-form__input" />
      </form>
    );
  }
}
export default UserForm;
