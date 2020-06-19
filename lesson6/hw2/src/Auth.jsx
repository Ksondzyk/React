import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isLoading: false,
    };
  }
  handleLogin = () => {
    setInterval(() => {
      this.setState({
        isLoading: false,
        isLoggedIn: false,
      });
    }, 2000);
    this.setState({
      isLoading: true,
      isLoggedIn: true,
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  render() {
    let elem;

    if (this.state.isLoggedIn === true) {
      elem = <Logout onLogout={this.handleLogout} text={"Logout"} />;
      if (this.state.isLoading === true) {
        elem = <Spinner size={"50"} />;
      } else {
        elem = <Logout onLogout={this.handleLogout} text={"Logout"} />;
      }
    } else {
      elem = <Login onLogin={this.handleLogin} text={"Login"} />;
    }
    return <div className="panel">{elem}</div>;
  }
}

export default Auth;
