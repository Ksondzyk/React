import React, { Component } from "react";

class onLogin extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isLoggedIn: false,
    // };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  render() {
    return (
      <button className="btn login" onClick={() => this.handleLogin()}>
        Login
      </button>
    );
  }
}
export default onLogin;
