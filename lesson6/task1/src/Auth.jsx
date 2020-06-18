import React, { Component } from "react";
import Greeting from "./Greeting";
import Login from "./Login";
import Logout from "./Logout";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
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
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Login onClick={this.handleLogin} onLogin={this.handleLogin} />
        ) : (
          <Logout onClick={this.handleLogout} onLogout={this.handleLogout} />
        )}
      </div>
    );
  }
}

export default Auth;
