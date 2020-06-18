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
      isLoggedIn: false,
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
      elem = <Logout onLogout={this.handleLogout} text={"Logout"} />;
      if (this.state.isLoggedIn === true) {
        elem = <Spinner size={"50"} />;
      } else if (this.state.isLoggedIn === false) {
        return;
      }
    } else {
      elem = <Login onLogin={this.handleLogin} text={"Login"} />;
    }
    return <div className="panel">{elem}</div>;
  }
}

export default Auth;
