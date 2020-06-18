import React, { Component } from "react";
import Greeting from "./Greeting";

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
    const button = this.state.isLoggedIn ? (
      <button className="btn logout" onClick={this.handleLogout}>
        Logout
      </button>
    ) : (
      <button className="btn login" onClick={this.handleLogin}>
        Login
      </button>
    );

    // if (this.state.isLoggedIn) {
    //   button = (
    //     <button className="btn logout" onClick={this.handleLogin}>
    //       Logout
    //     </button>
    //   );
    // } else {
    //   button = (
    //     <button className="btn login" onClick={this.handleLogin}>
    //       Login
    //     </button>
    //   );
    // }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;