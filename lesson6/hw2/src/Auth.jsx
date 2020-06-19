import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    setInterval(() => {
      this.setState({
        isLoggedIn: false,
      });
    }, 2000);
    this.setState({
      isLoggedIn: true,
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    let elem;

    if (this.state.isLoggedIn === true) {
      elem = <Spinner size={"50"} />;
      // if (this.state.isLoggedIn === false) {
      //   <Logout onLogout={this.handleLogout} text={"Logout"} />;
      // }
    } else {
      elem = <Login onLogin={this.handleLogin} text={"Login"} />;
    }
    return <div className="panel">{elem}</div>;
  }
}

export default Auth;
